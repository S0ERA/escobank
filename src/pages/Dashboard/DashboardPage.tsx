import { Card, Row, Col } from 'antd'
import styles from './DashboardPage.module.css'

export const DashboardPage = () => {
  return (
    <div className={styles.root}>
      {/* Верх: Мои карты + Транзакции */}
      <Row gutter={24}>
        <Col span={16}>
          <Card className={styles.cardBlock} title="Мои карты">
            {/* тут пока просто дивы с текстом вместо настоящих карточек */}
            Место для карточек
          </Card>
          <Card className={styles.cardBlock} title="Активность недели">
            Место для графика
          </Card>
        </Col>

        <Col span={8}>
          <Card className={styles.cardBlock} title="Транзакции">
            Место для списка транзакций
          </Card>
          <Card className={styles.cardBlock} title="Статистика расходов">
            Место для круговой диаграммы
          </Card>
        </Col>
      </Row>

      {/* Низ: Быстрый перевод + История баланса */}
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card className={styles.cardBlock} title="Быстрый перевод">
            Место для карточек людей и формы
          </Card>
        </Col>
        <Col span={12}>
          <Card className={styles.cardBlock} title="История баланса">
            Место для линейного графика
          </Card>
        </Col>
      </Row>
    </div>
  )
}