export type BankCardVariant = 'primary' | 'secondary'

export interface BankCardProps {
  variant: BankCardVariant
  balanceLabel?: string
  amount: string
  holder: string
  expiry: string
  numberMasked: string
  className?: string
}
