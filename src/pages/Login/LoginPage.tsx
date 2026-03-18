import { Button, Card, Form, Input, Typography } from 'antd'
import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import styles from './LoginPage.module.css'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation() as unknown as { state?: { from?: string } }
  const login = useAuthStore((s) => s.login)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const from = useMemo(() => location.state?.from ?? '/', [location.state?.from])

  return (
    <div className={styles.root}>
      <Card className={styles.card} bordered={false}>
        <div className={styles.header}>
          <Typography.Title level={3} className={styles.title}>
            Вход
          </Typography.Title>
          <Typography.Text type="secondary">
            Тестовые пользователи: <b>charlene/1234</b> или <b>tatiana/1234</b>
          </Typography.Text>
        </div>

        <Form
          layout="vertical"
          onFinish={async (values: { username: string; password: string }) => {
            setLoading(true)
            setError(null)
            try {
              const res = await login(values)
              if (!res.ok) {
                setError(res.error)
                return
              }
              navigate(from, { replace: true })
            } finally {
              setLoading(false)
            }
          }}
        >
          <Form.Item
            label="Логин"
            name="username"
            rules={[{ required: true, message: 'Введите логин' }]}
          >
            <Input placeholder="например, charlene" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password placeholder="например, 1234" />
          </Form.Item>

          {error ? <div className={styles.error}>{error}</div> : null}

          <Button type="primary" htmlType="submit" size="large" block loading={loading}>
            Войти
          </Button>
        </Form>
      </Card>
    </div>
  )
}

