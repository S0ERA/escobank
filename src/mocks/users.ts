export type MockUser = {
  id: string
  username: string
  password: string
  displayName: string
  email: string
}

export const mockUsers: MockUser[] = [
  {
    id: 'u1',
    username: 'charlene',
    password: '1234',
    displayName: 'Шарлин Рид',
    email: 'charlenereed@gmail.com',
  },
  {
    id: 'u2',
    username: 'tatiana',
    password: '1234',
    displayName: 'Татьяна С',
    email: 'tatyana@example.com',
  },
]

export function authenticateMockUser({
  username,
  password,
}: {
  username: string
  password: string
}) {
  const u = mockUsers.find((x) => x.username === username && x.password === password)
  return u ?? null
}

