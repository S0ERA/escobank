import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { authenticateMockUser } from '../mocks/users'

export type AuthUser = {
  id: string
  displayName: string
  email: string
  username: string
}

type AuthState = {
  status: 'guest' | 'auth'
  token: string | null
  user: AuthUser | null
  login: (args: { username: string; password: string }) => Promise<{ ok: true } | { ok: false; error: string }>
  logout: () => void
}

function makeToken(userId: string) {
  return `mock_token_${userId}_${Date.now()}`
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      status: 'guest',
      token: null,
      user: null,
      login: async ({ username, password }) => {
        const u = authenticateMockUser({ username, password })
        if (!u) return { ok: false, error: 'Неверный логин или пароль' }

        set({
          status: 'auth',
          token: makeToken(u.id),
          user: { id: u.id, displayName: u.displayName, email: u.email, username: u.username },
        })

        return { ok: true }
      },
      logout: () => set({ status: 'guest', token: null, user: null }),
    }),
    {
      name: 'escobank_auth',
      partialize: (s) => ({ status: s.status, token: s.token, user: s.user }),
    },
  ),
)

