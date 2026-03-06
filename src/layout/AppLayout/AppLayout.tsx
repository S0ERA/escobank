import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import type { ReactNode } from 'react'
import styles from './AppLayout.module.css'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const { Sider, Header, Content } = Layout

const menuItems: MenuProps['items'] = [
  { key: '/', label: 'Главная' },
  { key: '/transactions', label: 'Транзакции' },
  { key: '/accounts', label: 'Аккаунты' },
  { key: '/investments', label: 'Инвестиции' },
  { key: '/credit-card', label: 'Кредитная карта' },
  { key: '/loans', label: 'Кредиты' },
  { key: '/services', label: 'Сервисы' },
  { key: '/privileges', label: 'Мои привилегии' },
  { key: '/settings', label: 'Настройки' },
];

export const AppLayout = () => {

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Layout className={styles.root}>
      <Sider width={260} className={styles.sider}>
        <div className={styles.logo}>EscoBank.</div>
        <Menu
          mode="inline"
          items={menuItems}
          selectedKeys={[location.pathname]} 
          onClick={(e) => navigate(e.key)}   
          className={styles.menu}
        />
      </Sider>

      <Layout className={styles.main}>
        <Header className={styles.header}>
          {/* тут потом будет поиск, иконки, аватар */}
          <div className={styles.pageTitle}>Главная</div>
          <div className={styles.headerRight}>Поиск, колокольчик, аватар</div>
        </Header>

        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}