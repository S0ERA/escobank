// src/App.tsx
import { ConfigProvider } from 'antd'
import { AppLayout } from './layout/AppLayout/AppLayout'
import { DashboardPage } from './pages/Dashboard/DashboardPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TransactionsPage } from './pages/Transactions/TransactionsPage'
import { AccountsPage } from './pages/Accounts/AccountsPage'
import { InvestmentsPage } from './pages/Investments/InvestmentsPage'
import { CreditCardPage } from './pages/CreditCard/CreditCardPage'
import { LoansPage } from './pages/Loans/LoansPage'
import { ServicesPage } from './pages/Services/ServicesPage'
import { PrivilegesPage } from './pages/MyPrivileges/PrivilegesPage'
import { SettingsPage } from './pages/Settings/SettingsPage'
import { LoginPage } from './pages/Login/LoginPage'
import { ProtectedRoute } from './shared/components/ProtectedRoute'
import { APP_THEME } from './shared/constants/theme'
import { ROUTES } from './shared/constants/routes'

function App() {
  return (
    <ConfigProvider theme={APP_THEME}>
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage />} />

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path={ROUTES.dashboard} element={<DashboardPage />} />
          <Route path={ROUTES.transactions} element={<TransactionsPage />} />
          <Route path={ROUTES.accounts} element={<AccountsPage />} />
          <Route path={ROUTES.investments} element={<InvestmentsPage />} />
          <Route path={ROUTES.creditCard} element={<CreditCardPage />} />
          <Route path={ROUTES.loans} element={<LoansPage />} />
          <Route path={ROUTES.services} element={<ServicesPage />} />
          <Route path={ROUTES.privileges} element={<PrivilegesPage />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App