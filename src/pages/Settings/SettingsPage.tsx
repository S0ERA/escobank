// src/pages/Settings/SettingsPage.tsx
import { Avatar, Button, DatePicker, Form, Input, Tabs, Typography } from 'antd'
import { EditOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { useLogout } from '../../shared/hooks/useLogout'
import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<'edit' | 'prefs' | 'security'>('edit')
  const user = useAuthStore((s) => s.user)
  const handleLogout = useLogout()

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <Tabs
          activeKey={activeTab}
          onChange={(k) => setActiveTab(k as typeof activeTab)}
          items={[
            { key: 'edit', label: 'Редактирование' },
            { key: 'prefs', label: 'Предпочтения' },
            { key: 'security', label: 'Безопасность' },
          ]}
          className={styles.tabs}
        />

        {activeTab === 'edit' ? (
          <div className={styles.body}>
            <div className={styles.avatarCol}>
              <div className={styles.avatarWrap}>
                <Avatar size={130} icon={<UserOutlined />} className={styles.avatar} />
                <button className={styles.avatarEditBtn} type="button" aria-label="Редактировать фото">
                  <EditOutlined />
                </button>
              </div>
            </div>

            <div className={styles.formCol}>
              <Form layout="vertical" className={styles.form}>
                <div className={styles.grid}>
                  <Form.Item label="Твое имя" className={styles.item}>
                    <Input defaultValue={user?.displayName || ''} className={styles.input} />
                  </Form.Item>
                  <Form.Item label="Имя пользователя" className={styles.item}>
                    <Input defaultValue={user?.username || ''} className={styles.input} />
                  </Form.Item>

                  <Form.Item label="Email" className={styles.item}>
                    <Input defaultValue={user?.email || ''} className={styles.input} />
                  </Form.Item>
                  <Form.Item label="Пароль" className={styles.item}>
                    <Input.Password defaultValue="**********" className={styles.input} />
                  </Form.Item>

                  <Form.Item label="Дата рождения" className={styles.item}>
                    <DatePicker
                      className={[styles.input, styles.date].join(' ')}
                      placeholder="25 Января 1990"
                      suffixIcon={<span className={styles.dateChevron} aria-hidden />}
                      allowClear={false}
                      inputReadOnly
                    />
                  </Form.Item>
                  <Form.Item label="Адрес" className={styles.item}>
                    <Input defaultValue="San Jose, California, USA" className={styles.input} />
                  </Form.Item>

                  <Form.Item label="Постоянное место жительства" className={styles.item}>
                    <Input defaultValue="San Jose, California, USA" className={styles.input} />
                  </Form.Item>
                  <Form.Item label="Город" className={styles.item}>
                    <Input defaultValue="San Jose" className={styles.input} />
                  </Form.Item>

                  <Form.Item label="Индекс" className={styles.item}>
                    <Input defaultValue="45962" className={styles.input} />
                  </Form.Item>
                  <Form.Item label="Страна" className={styles.item}>
                    <Input defaultValue="USA" className={styles.input} />
                  </Form.Item>
                </div>

                <div className={styles.actions}>
                  <Button type="primary" size="large" className={styles.saveBtn}>
                    Сохранить
                  </Button>
                  <Button
                    danger
                    size="large"
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                    className={styles.logoutBtn}
                  >
                    Выйти из аккаунта
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        ) : activeTab === 'security' ? (
          <div className={styles.securitySection}>
            <Typography.Title level={4} className={styles.securityTitle}>
              Безопасность аккаунта
            </Typography.Title>
            <div className={styles.securityActions}>
              <Button
                type="primary"
                ghost
                onClick={() => void 0}
              >
                Сменить пароль
              </Button>
              <Button
                danger
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                size="large"
              >
                Выйти из аккаунта
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <Typography.Text type="secondary">
              Раздел "Предпочтения" в разработке.
            </Typography.Text>
          </div>
        )}
      </div>
    </div>
  )
}
