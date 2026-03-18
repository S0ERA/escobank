import { Avatar, Button, DatePicker, Form, Input, Tabs, Typography } from 'antd'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<'edit' | 'prefs' | 'security'>('edit')

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
                    <Input defaultValue="Шарлин Рид" className={styles.input} />
                  </Form.Item>
                  <Form.Item label="Имя пользователя" className={styles.item}>
                    <Input defaultValue="Шарлин Рид" className={styles.input} />
                  </Form.Item>

                  <Form.Item label="Email" className={styles.item}>
                    <Input defaultValue="charlenereed@gmail.com" className={styles.input} />
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
                </div>
              </Form>
            </div>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <Typography.Text type="secondary">
              Раздел “{activeTab === 'prefs' ? 'Предпочтения' : 'Безопасность'}” в разработке.
            </Typography.Text>
          </div>
        )}
      </div>
    </div>
  )
}