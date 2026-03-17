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

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0b63f6', // подгони под фигму
          borderRadius: 16,
          fontSize: 18,
        },
      }}
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/credit-card" element={<CreditCardPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/privileges" element={<PrivilegesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App