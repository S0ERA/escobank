import { Card, Row, Col, message } from 'antd'
import styles from './DashboardPage.module.css'
import { TransactionsWidget } from '../../components/dashboard/TransactionsWidget'
import { WeeklyActivityChart } from '../../components/dashboard/WeeklyActivityChart'
import { ExpenseStatisticsPie } from '../../components/dashboard/ExpenseStatisticsPie'
import { QuickTransferWidget } from '../../components/dashboard/QuickTransferWidget'
import { BalanceHistoryChart } from '../../components/dashboard/BalanceHistoryChart'
import {
  DollarCircleOutlined,
  PayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useMemo, useState } from 'react'
export const DashboardPage = () => {
  const [selectedContactId, setSelectedContactId] = useState('c1')
  const [amount, setAmount] = useState(525.5)

  const txItems = useMemo(
    () => [
      {
        id: 't1',
        title: 'Депозит',
        dateLabel: '28 Январь 2025',
        amount: -850,
        icon: <DollarCircleOutlined />,
      },
      {
        id: 't2',
        title: 'Депозит',
        dateLabel: '28 Январь 2025',
        amount: 2500,
        icon: <PayCircleOutlined />,
      },
      {
        id: 't3',
        title: 'Ирина',
        dateLabel: '28 Январь 2025',
        amount: 5400,
        icon: <UserOutlined />,
      },
    ],
    [],
  )

  const weeklyData = useMemo(
    () => [
      { day: 'Sat', type: 'Депозиты' as const, value: 250 },
      { day: 'Sat', type: 'Вывод' as const, value: 460 },
      { day: 'Sun', type: 'Депозиты' as const, value: 110 },
      { day: 'Sun', type: 'Вывод' as const, value: 330 },
      { day: 'Mon', type: 'Депозиты' as const, value: 210 },
      { day: 'Mon', type: 'Вывод' as const, value: 320 },
      { day: 'Tue', type: 'Депозиты' as const, value: 360 },
      { day: 'Tue', type: 'Вывод' as const, value: 470 },
      { day: 'Wed', type: 'Депозиты' as const, value: 220 },
      { day: 'Wed', type: 'Вывод' as const, value: 140 },
      { day: 'Thu', type: 'Депозиты' as const, value: 260 },
      { day: 'Thu', type: 'Вывод' as const, value: 390 },
      { day: 'Fri', type: 'Депозиты' as const, value: 310 },
      { day: 'Fri', type: 'Вывод' as const, value: 400 },
    ],
    [],
  )

  const expenseData = useMemo(
    () => [
      { category: 'Развлечения', value: 30 },
      { category: 'Расходы', value: 15 },
      { category: 'Инвестиции', value: 20 },
      { category: 'Другое', value: 35 },
    ],
    [],
  )

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

  const balanceData = useMemo(
    () => [
      { month: 'Июл', value: 220 },
      { month: 'Авг', value: 420 },
      { month: 'Сен', value: 520 },
      { month: 'Окт', value: 760 },
      { month: 'Ноя', value: 260 },
      { month: 'Дек', value: 560 },
      { month: 'Янв', value: 620 },
    ],
    [],
  )

  return (
    <div className={styles.root}>
      {/* Верхний блок: Мои карты + Транзакции */}
      <Row gutter={24}>
        <Col span={16}>
          <div className={styles.blockTitle}>Мои карты</div>
          <Row gutter={24}>
            <Col span={12}>
              <Card className={styles.card}>
                <div className={styles.cardLabel}>Баланс карты</div>
                <div className={styles.cardAmount}>$5,756</div>
                <div className={styles.cardHolder}>Татьяна С</div>
                <div className={styles.cardNumber}>3778 **** **** 1234</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className={styles.cardSecondary}>
                {/* вторая карта, можно скопировать ту же разметку */}
                <div className={styles.cardLabel}>Баланс карты</div>
                <div className={styles.cardAmount}>$5,756</div>
                <div className={styles.cardHolder}>Татьяна С</div>
                <div className={styles.cardNumber}>3778 **** **** 1234</div>
              </Card>
            </Col>
          </Row>
          <div className={styles.sectionTitle} style={{ marginTop: 24 }}>
            Активность недели
          </div>
          <Card className={styles.section}>
            <div className={styles.chart}>
              <WeeklyActivityChart data={weeklyData} />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <div className={styles.sectionTitle}>Транзакции</div>
          <Card className={styles.section}>
            <div className={styles.transactions}>
              <TransactionsWidget items={txItems} />
            </div>
          </Card>
          <div className={styles.sectionTitle} style={{ marginTop: 24 }}>
            Статистика расходов
          </div>
          <Card className={styles.section}>
            <div className={styles.chart}>
              <ExpenseStatisticsPie data={expenseData} />
            </div>
          </Card>
        </Col>
      </Row>
      {/* Нижний блок: Быстрый перевод + История баланса */}
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={12}>
          <div className={styles.sectionTitle}>Быстрый перевод</div>
          <Card className={styles.section}>
            <QuickTransferWidget
              contacts={contacts}
              selectedId={selectedContactId}
              onSelect={setSelectedContactId}
              amount={amount}
              onAmountChange={setAmount}
              onSend={() => {
                const name = contacts.find((c) => c.id === selectedContactId)?.name ?? 'получателю'
                void message.success(`Перевод отправлен: ${name} — ${amount}`)
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <div className={styles.sectionTitle}>История баланса</div>
          <Card className={styles.section}>
            <div className={styles.chart}>
              <BalanceHistoryChart data={balanceData} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}