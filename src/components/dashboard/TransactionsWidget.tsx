import { Avatar, List, Space, Typography } from 'antd'
import type { ReactNode } from 'react'

export type TransactionItem = {
  id: string
  title: string
  dateLabel: string
  amount: number
  icon?: ReactNode
}

export function TransactionsWidget({ items }: { items: TransactionItem[] }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(tx) => (
        <List.Item key={tx.id}>
          <List.Item.Meta
            avatar={<Avatar size={40}>{tx.icon}</Avatar>}
            title={<Typography.Text strong>{tx.title}</Typography.Text>}
            description={<Typography.Text type="secondary">{tx.dateLabel}</Typography.Text>}
          />
          <Space>
            <Typography.Text
              strong
              style={{ color: tx.amount < 0 ? '#ff4d4f' : '#22c55e' }}
            >
              {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toLocaleString()}
            </Typography.Text>
          </Space>
        </List.Item>
      )}
    />
  )
}
