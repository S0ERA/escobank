import type { TableColumnsType } from 'antd'
import { Button } from 'antd'
import { useMemo } from 'react'
import styles from '../../pages/Transactions/TransactionsPage.module.css'
import type { TxRow } from '../hooks/useTransactionsData'

export function useTransactionsColumns() {
  return useMemo<TableColumnsType<TxRow>>(
    () => [
      {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
        render: (_v, row) => (
          <div className={styles.descCell}>
            <span
              className={`${styles.descIcon} ${row.amount < 0 ? styles.descIconDown : styles.descIconUp}`}
              aria-hidden
            />
            <span className={styles.descText}>{row.description}</span>
          </div>
        ),
      },
      { title: 'Транзакция ID', dataIndex: 'transactionId', key: 'transactionId' },
      { title: 'Тип', dataIndex: 'kind', key: 'kind' },
      { title: 'Карта', dataIndex: 'card', key: 'card' },
      { title: 'Дата', dataIndex: 'dateLabel', key: 'dateLabel' },
      {
        title: 'Сумма',
        dataIndex: 'amount',
        key: 'amount',
        align: 'right',
        render: (v: number) => (
          <span className={v < 0 ? styles.amountNegative : styles.amountPositive}>
            {v < 0 ? '-' : '+'}${Math.abs(v).toLocaleString()}
          </span>
        ),
      },
      {
        title: 'Чек',
        key: 'receipt',
        align: 'center',
        render: () => (
          <Button className={styles.downloadBtn} size="middle">
            Download
          </Button>
        ),
      },
    ],
    [],
  )
}
