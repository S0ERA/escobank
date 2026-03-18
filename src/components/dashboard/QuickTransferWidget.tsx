import { Avatar, Button, InputNumber, Space, Typography } from 'antd'
import styles from './QuickTransferWidget.module.css'

export type QuickTransferContact = {
  id: string
  name: string
  avatarUrl?: string
}

export function QuickTransferWidget({
  contacts,
  selectedId,
  onSelect,
  amount,
  onAmountChange,
  onSend,
}: {
  contacts: QuickTransferContact[]
  selectedId: string
  onSelect: (id: string) => void
  amount: number
  onAmountChange: (amount: number) => void
  onSend: () => void
}) {
  const selected = contacts.find((c) => c.id === selectedId)

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={16}>
      <div className={styles.contacts}>
        {contacts.map((c) => {
          const active = c.id === selectedId
          return (
            <button
              key={c.id}
              type="button"
              className={active ? styles.contactActive : styles.contact}
              onClick={() => onSelect(c.id)}
            >
              <Avatar size={56} src={c.avatarUrl}>
                {c.name.slice(0, 1)}
              </Avatar>
              <Typography.Text className={styles.name}>{c.name}</Typography.Text>
            </button>
          )
        })}
      </div>

      <div className={styles.bottomRow}>
        <Space>
          <Typography.Text type="secondary">Сумма</Typography.Text>
          <InputNumber
            value={amount}
            min={0}
            precision={2}
            onChange={(v) => onAmountChange(Number(v ?? 0))}
            className={styles.amount}
          />
        </Space>

        <Button type="primary" shape="round" onClick={onSend} disabled={!selected}>
          Отправить
        </Button>
      </div>
    </Space>
  )
}
