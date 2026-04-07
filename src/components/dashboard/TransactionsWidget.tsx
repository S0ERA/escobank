import { Avatar, List, Space, Typography } from 'antd'
import type { ReactNode } from 'react'
import styles from './TransactionsWidget.module.css'

export type TransactionItem = {
  id: string
  title: string
  dateLabel: string
  amount: number
  icon?: ReactNode
}

function getTransactionLine(amount: number) {
  const isNegative = amount < 0
  const color = isNegative ? styles.amountNegative : styles.amountPositive
  const sign = isNegative ? '-' : '+'
  const value = Math.abs(amount).toLocaleString()

  return { color, sign, value }
}

export function TransactionsWidget({ items }: { items: TransactionItem[] }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(tx) => {
        const { color, sign, value } = getTransactionLine(tx.amount)

        return (
          <List.Item key={tx.id}>
            <List.Item.Meta
              avatar={<Avatar size={40}>{tx.icon}</Avatar>}
              title={<Typography.Text strong>{tx.title}</Typography.Text>}
              description={<Typography.Text type="secondary">{tx.dateLabel}</Typography.Text>}
            />
            <Space>
              <Typography.Text strong className={color}>
                {sign}${value}
              </Typography.Text>
            </Space>
          </List.Item>
        )
      }}
    />
  )
}
