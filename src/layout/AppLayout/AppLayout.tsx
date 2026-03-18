import type { MenuProps } from 'antd'
import styles from './AppLayout.module.css'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import { Layout, Menu, Input, Avatar, Badge, Space } from 'antd'
import {
  HomeOutlined,
  SwapOutlined,
  WalletOutlined,
  LineChartOutlined,
  CreditCardOutlined,
  MoneyCollectOutlined,
  AppstoreOutlined,
  CrownOutlined,
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Sider, Header, Content } = Layout

const routeTitles: Record<string, string> = {
  '/': 'Главная',
  '/transactions': 'Транзакции',
  '/accounts': 'Аккаунты',
  '/investments': 'Инвестиции',
  '/credit-card': 'Кредитная карта',
  '/loans': 'Кредиты',
  '/services': 'Сервисы',
  '/privileges': 'Мои привилегии',
  '/settings': 'Настройки',
}

const menuItems: MenuProps['items'] = [
  { key: '/', icon: <HomeOutlined />, label: 'Главная' },
  { key: '/transactions', icon: <SwapOutlined />, label: 'Транзакции' },
  { key: '/accounts', icon: <WalletOutlined />, label: 'Аккаунты' },
  { key: '/investments', icon: <LineChartOutlined />, label: 'Инвестиции' },
  { key: '/credit-card', icon: <CreditCardOutlined />, label: 'Кредитная карта' },
  { key: '/loans', icon: <MoneyCollectOutlined />, label: 'Кредиты' },
  { key: '/services', icon: <AppstoreOutlined />, label: 'Сервисы' },
  { key: '/privileges', icon: <CrownOutlined />, label: 'Мои привилегии' },
  { key: '/settings', icon: <SettingOutlined />, label: 'Настройки' },
];

export const AppLayout = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle =
    routeTitles[location.pathname] ??
    routeTitles[
      Object.keys(routeTitles)
        .sort((a, b) => b.length - a.length)
        .find((k) => k !== '/' && location.pathname.startsWith(k)) ?? '/'
    ] ??
    'Страница'

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
        <Header className={styles.headerOuter}>
          <div className={styles.container}>
            <div className={styles.header}>
            <div className={styles.pageTitle}>{pageTitle}</div>
            <div className={styles.headerRight}>
              <Input
                className={styles.search}
                placeholder="Поиск"
                prefix={<SearchOutlined style={{ color: '#b0b7c3' }} />}
                allowClear
              />
              <Space size={16} align="center">
                <Badge dot>
                  <BellOutlined className={styles.headerIcon} />
                </Badge>
                <SettingOutlined className={styles.headerIcon} />
                <Avatar size={40} icon={<UserOutlined />} />
              </Space>
            </div>
            </div>
          </div>
        </Header>

        <div className={styles.container}>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  )
}