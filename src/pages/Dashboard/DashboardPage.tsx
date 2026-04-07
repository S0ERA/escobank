// src/pages/Dashboard/DashboardPage.tsx
import { Card, Row, Col, message } from 'antd'
import styles from './DashboardPage.module.css'
import { TransactionsWidget } from '../../components/dashboard/TransactionsWidget'
import { WeeklyActivityChart } from '../../shared/components/charts/WeeklyActivityChart'
import { ExpenseStatisticsPie } from '../../shared/components/charts/ExpenseStatisticsPie'
import { QuickTransferWidget } from '../../components/dashboard/QuickTransferWidget'
import { BalanceHistoryChart } from '../../shared/components/charts/BalanceHistoryChart'
import { BankCard } from '../../components/cards/BankCard/BankCard'
import { useState } from 'react'
import { useDashboardData } from '../../shared/hooks/useDashboardData'

export const DashboardPage = () => {
  const [selectedContactId, setSelectedContactId] = useState('c1')
  const [amount, setAmount] = useState(525.5)
  const { userData, txItems, contacts } = useDashboardData()

  if (!userData) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={styles.root}>
      <Row gutter={24}>
        <Col span={16}>
          <div className={styles.blockTitle}>Мои карты</div>
          <Row gutter={24}>
            {userData.cards.map((card) => (
              <Col span={12} key={card.id}>
                <BankCard
                  variant={card.variant}
                  amount={card.amount}
                  holder={card.holder}
                  expiry={card.expiry}
                  numberMasked={card.numberMasked}
                />
              </Col>
            ))}
          </Row>
          <div className={styles.sectionTitle} style={{ marginTop: 24 }}>
            Активность недели
          </div>
          <Card className={styles.section}>
            <div className={styles.chart}>
              <WeeklyActivityChart data={userData.weeklyActivity} />
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
              <ExpenseStatisticsPie data={userData.expenseStats} />
            </div>
          </Card>
        </Col>
      </Row>
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
              <BalanceHistoryChart data={userData.balanceHistory} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
