// src/pages/Transactions/TransactionsPage.tsx (обновленная версия)
import { Column } from '@ant-design/plots'
import { Card, Col, Pagination, Row, Space, Table, Typography, Button } from 'antd'
import type { TableColumnsType } from 'antd'
import { useMemo, useState } from 'react'
import styles from './TransactionsPage.module.css'
import { BankCard } from '../../components/cards/BankCard/BankCard'
import { useAuthStore } from '../../store/authStore'
import { getUserMockData } from '../../mocks/userData'

type TxKind = 'Доход' | 'Расход'

type TxRow = {
  key: string
  description: string
  transactionId: string
  kind: TxKind
  card: string
  dateLabel: string
  amount: number
}

type MonthBar = {
  month: string
  value: number
  highlight: 'Обычный' | 'Акцент'
}

export const TransactionsPage = () => {
  const [tab, setTab] = useState<'all' | 'income' | 'expense'>('all')
  const [page, setPage] = useState(1)
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

  const columns = useMemo<TableColumnsType<TxRow>>(
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

  if (!userData) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={styles.root}>
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <div className={styles.blockHeader}>
            <div className={styles.blockTitle}>Мои карты</div>
            <button className={styles.linkLike} type="button">
              Все
            </button>
          </div>

          <Row gutter={24}>
            {userData.cards.map((card) => (
              <Col xs={24} md={12} key={card.id}>
                <BankCard
                  variant={card.variant}
                  balanceLabel="Баланс карты"
                  amount={card.amount}
                  holder={card.holder}
                  expiry={card.expiry}
                  numberMasked={card.numberMasked}
                  className={styles.cardHeightCompact}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} lg={8}>
          <div className={styles.blockTitle}>Мой счет</div>
          <Card className={styles.accountCard} bordered={false}>
            <div className={styles.accountTop}>
              <Typography.Text className={styles.accountAmount}>
                ${userData.currentBalance.toLocaleString()}
              </Typography.Text>
            </div>
            <div className={styles.accountChart}>
              <Column
                data={monthBars}
                height={180}
                xField="month"
                yField="value"
                seriesField="highlight"
                isGroup={false}
                legend={false}
                color={(d: MonthBar) => (d.highlight === 'Акцент' ? '#14b8a6' : '#e8edf7')}
                columnStyle={{ radius: [12, 12, 12, 12] }}
                xAxis={{ tickLine: null, line: null, label: { style: { fill: '#8a99b0' } } }}
                yAxis={{ grid: null, label: null, tickLine: null, line: null }}
                tooltip={false}
              />
            </div>
          </Card>
        </Col>
      </Row>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Недавние транзакции</div>
          <Space size={24} className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tabBtn} ${tab === 'all' ? styles.tabBtnActive : ''}`}
              onClick={() => {
                setTab('all')
                setPage(1)
              }}
            >
              Все транзакции
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${tab === 'income' ? styles.tabBtnActive : ''}`}
              onClick={() => {
                setTab('income')
                setPage(1)
              }}
            >
              Доход
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${tab === 'expense' ? styles.tabBtnActive : ''}`}
              onClick={() => {
                setTab('expense')
                setPage(1)
              }}
            >
              Расход
            </button>
          </Space>
        </div>

        <Card className={styles.tableCard} bordered={false}>
          <Table<TxRow>
            columns={columns}
            dataSource={txFiltered}
            pagination={false}
            className={styles.table}
          />
        </Card>

        <div className={styles.paginationRow}>
          <Pagination
            current={page}
            onChange={(p) => setPage(p)}
            total={txFiltered.length}
            pageSize={10}
            showSizeChanger={false}
            size="small"
          />
        </div>
      </div>
    </div>
  )
}