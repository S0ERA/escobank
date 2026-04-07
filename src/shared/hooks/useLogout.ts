import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { ROUTES } from '../constants/routes'

export function useLogout() {
  const navigate = useNavigate()
  const logout = useAuthStore((s) => s.logout)

  const handleLogout = () => {
    logout()
    message.success('Вы вышли из аккаунта')
    navigate(ROUTES.login)
  }

  return handleLogout
}
