import { useMemo } from 'react'
import { useAuthStore } from '../../store/authStore'
import { getUserMockData } from '../../mocks/userData'
import { DollarCircleOutlined, PayCircleOutlined } from '@ant-design/icons'

export function useDashboardData() {
  const user = useAuthStore((s) => s.user)

  const userData = useMemo(() => {
    if (!user) return null
    return getUserMockData(user.id)
  }, [user])

  const txItems = useMemo(() => {
    if (!userData) return []
    return userData.transactions.slice(0, 3).map(tx => ({
      id: tx.id,
      title: tx.description,
      dateLabel: tx.dateLabel,
      amount: tx.amount,
      icon: tx.amount < 0 ? <PayCircleOutlined /> : <DollarCircleOutlined />,
    }))
  }, [userData])

  const contacts = useMemo(
    () => [
      { id: 'c1', name: 'Нежный айдар' },
      { id: 'c2', name: 'Анна' },
      { id: 'c3', name: 'Мария' },
      { id: 'c4', name: 'Алия' },
      { id: 'c5', name: 'Олег' },
    ],
    [],
  )

  return { userData, txItems, contacts }
}
