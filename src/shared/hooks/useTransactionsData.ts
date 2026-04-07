import { useMemo } from 'react'
import { useAuthStore } from '../../store/authStore'
import { getUserMockData } from '../../mocks/userData'

type TxKind = 'Доход' | 'Расход'

export type TxRow = {
  key: string
  description: string
  transactionId: string
  kind: TxKind
  card: string
  dateLabel: string
  amount: number
}

export type MonthBar = {
  month: string
  value: number
  highlight: 'Обычный' | 'Акцент'
}

export function useTransactionsData(tab: 'all' | 'income' | 'expense') {
  const user = useAuthStore((s) => s.user)

  const userData = useMemo(() => {
    if (!user) return null
    return getUserMockData(user.id)
  }, [user])

  const txAll = useMemo<TxRow[]>(() => {
    if (!userData) return []
    return userData.transactions.map(tx => ({
      key: tx.id,
      description: tx.description,
      transactionId: tx.transactionId,
      kind: tx.kind,
      card: tx.card,
      dateLabel: tx.dateLabel,
      amount: tx.amount,
    }))
  }, [userData])

  const txFiltered = useMemo(() => {
    if (tab === 'income') return txAll.filter((t) => t.amount > 0)
    if (tab === 'expense') return txAll.filter((t) => t.amount < 0)
    return txAll
  }, [tab, txAll])

  const monthBars = useMemo<MonthBar[]>(
    () => [
      { month: 'Авг', value: 35, highlight: 'Обычный' },
      { month: 'Сен', value: 55, highlight: 'Обычный' },
      { month: 'Окт', value: 50, highlight: 'Обычный' },
      { month: 'Ноя', value: 65, highlight: 'Обычный' },
      { month: 'Дек', value: 95, highlight: 'Акцент' },
      { month: 'Янв', value: 60, highlight: 'Обычный' },
    ],
    [],
  )

  return { userData, txFiltered, monthBars }
}
