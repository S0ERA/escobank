import { Card } from 'antd'
import styles from './BankCard.module.css'

export type BankCardVariant = 'primary' | 'secondary'

export function BankCard({
  variant,
  balanceLabel = 'Баланс карты',
  amount,
  holder,
  expiry,
  numberMasked,
  className,
}: {
  variant: BankCardVariant
  balanceLabel?: string
  amount: string
  holder: string
  expiry: string
  numberMasked: string
  className?: string
}) {
  const isPrimary = variant === 'primary'

  return (
    <Card
      bordered={false}
      className={[
        styles.root,
        isPrimary ? styles.primary : styles.secondary,
        className ?? '',
      ].join(' ')}
    >
      <div className={styles.topRow}>
        <div>
          <div className={styles.label}>{balanceLabel}</div>
          <div className={isPrimary ? styles.amountPrimary : styles.amountSecondary}>{amount}</div>
        </div>
        <div className={[styles.chip, isPrimary ? '' : styles.chipDark].join(' ')} aria-hidden />
      </div>

      <div className={styles.metaRow}>
        <div className={styles.metaCol}>
          <div className={styles.metaKey}>Держатель карты</div>
          <div className={styles.metaVal}>{holder}</div>
        </div>
        <div className={styles.metaColRight}>
          <div className={styles.metaKey}>Действует до</div>
          <div className={styles.metaVal}>{expiry}</div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={isPrimary ? styles.numberPrimary : styles.numberSecondary}>{numberMasked}</div>
        <div className={isPrimary ? styles.toggle : styles.toggleMuted} aria-hidden />
      </div>
    </Card>
  )
}

