// src/pages/Transactions/TransactionsPage.tsx
import { Column } from '@ant-design/plots'
import { Card, Col, Pagination, Row, Space, Table, Typography } from 'antd'
import { useState } from 'react'
import styles from './TransactionsPage.module.css'
import { BankCard } from '../../components/cards/BankCard/BankCard'
import { useTransactionsData } from '../../shared/hooks/useTransactionsData'
import { useTransactionsColumns } from '../../shared/hooks/useTransactionsColumns'
import type { MonthBar } from '../../shared/hooks/useTransactionsData'

export const TransactionsPage = () => {
  const [tab, setTab] = useState<'all' | 'income' | 'expense'>('all')
  const [page, setPage] = useState(1)
  const { userData, txFiltered, monthBars } = useTransactionsData(tab)
  const columns = useTransactionsColumns()

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
          <Table
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
