export type Transaction = {
    id: string
    description: string
    transactionId: string
    kind: 'Доход' | 'Расход'
    card: string
    dateLabel: string
    amount: number
}

export type BalanceHistoryPoint = {
    month: string
    value: number
}

export type ExpenseStat = {
    category: string
    value: number
}

export type WeeklyActivity = {
    day: string
    type: 'Депозиты' | 'Вывод'
    value: number
}

export type UserMockData = {
    userId: string
    transactions: Transaction[]
    balanceHistory: BalanceHistoryPoint[]
    expenseStats: ExpenseStat[]
    weeklyActivity: WeeklyActivity[]
    currentBalance: number
    cards: Array<{
        id: string
        variant: 'primary' | 'secondary'
        amount: string
        holder: string
        expiry: string
        numberMasked: string
    }>
}

// Данные для Шарлин (charlene)
const charleneData: UserMockData = {
    userId: 'u1',
    currentBalance: 12500,
    cards: [
        {
            id: 'card1',
            variant: 'primary',
            amount: '$5,756',
            holder: 'Шарлин Рид',
            expiry: '12/25',
            numberMasked: '3778 **** **** 1234',
        },
        {
            id: 'card2',
            variant: 'secondary',
            amount: '$3,240',
            holder: 'Шарлин Рид',
            expiry: '08/26',
            numberMasked: '4567 **** **** 5678',
        },
    ],
    transactions: [
        {
            id: 't1',
            description: 'Spotify Subscription',
            transactionId: '#12548796',
            kind: 'Расход',
            card: '3778 ****',
            dateLabel: '28 Jan, 12.30 AM',
            amount: -2500,
        },
        {
            id: 't2',
            description: 'Freepik Sales',
            transactionId: '#12548797',
            kind: 'Доход',
            card: '4567 ****',
            dateLabel: '25 Jan, 10.40 PM',
            amount: 750,
        },
        {
            id: 't3',
            description: 'Mobile Service',
            transactionId: '#12548798',
            kind: 'Расход',
            card: '3778 ****',
            dateLabel: '20 Jan, 10.40 PM',
            amount: -150,
        },
        {
            id: 't4',
            description: 'Netflix',
            transactionId: '#12548799',
            kind: 'Расход',
            card: '4567 ****',
            dateLabel: '18 Jan, 08.15 PM',
            amount: -499,
        },
        {
            id: 't5',
            description: 'Salary',
            transactionId: '#12548800',
            kind: 'Доход',
            card: '3778 ****',
            dateLabel: '15 Jan, 03.29 PM',
            amount: 5400,
        },
        {
            id: 't6',
            description: 'Uber Ride',
            transactionId: '#12548801',
            kind: 'Расход',
            card: '4567 ****',
            dateLabel: '14 Jan, 10.40 PM',
            amount: -850,
        },
        {
            id: 't7',
            description: 'Amazon Purchase',
            transactionId: '#12548802',
            kind: 'Расход',
            card: '3778 ****',
            dateLabel: '12 Jan, 02.15 PM',
            amount: -3200,
        },
        {
            id: 't8',
            description: 'Freelance Project',
            transactionId: '#12548803',
            kind: 'Доход',
            card: '4567 ****',
            dateLabel: '10 Jan, 11.20 AM',
            amount: 1200,
        },
    ],
    balanceHistory: [
        { month: 'Июл', value: 8200 },
        { month: 'Авг', value: 9400 },
        { month: 'Сен', value: 10200 },
        { month: 'Окт', value: 11500 },
        { month: 'Ноя', value: 10800 },
        { month: 'Дек', value: 13100 },
        { month: 'Янв', value: 12500 },
    ],
    expenseStats: [
        { category: 'Развлечения', value: 30 },
        { category: 'Продукты', value: 25 },
        { category: 'Транспорт', value: 20 },
        { category: 'Другое', value: 25 },
    ],
    weeklyActivity: [
        { day: 'Sat', type: 'Депозиты', value: 350 },
        { day: 'Sat', type: 'Вывод', value: 560 },
        { day: 'Sun', type: 'Депозиты', value: 210 },
        { day: 'Sun', type: 'Вывод', value: 430 },
        { day: 'Mon', type: 'Депозиты', value: 410 },
        { day: 'Mon', type: 'Вывод', value: 520 },
        { day: 'Tue', type: 'Депозиты', value: 560 },
        { day: 'Tue', type: 'Вывод', value: 670 },
        { day: 'Wed', type: 'Депозиты', value: 420 },
        { day: 'Wed', type: 'Вывод', value: 340 },
        { day: 'Thu', type: 'Депозиты', value: 460 },
        { day: 'Thu', type: 'Вывод', value: 590 },
        { day: 'Fri', type: 'Депозиты', value: 510 },
        { day: 'Fri', type: 'Вывод', value: 600 },
    ],
}

// Данные для Татьяны (tatiana)
const tatianaData: UserMockData = {
    userId: 'u2',
    currentBalance: 8750,
    cards: [
        {
            id: 'card1',
            variant: 'primary',
            amount: '$5,756',
            holder: 'Татьяна С',
            expiry: '12/22',
            numberMasked: '3778 **** **** 1234',
        },
        {
            id: 'card2',
            variant: 'secondary',
            amount: '$2,994',
            holder: 'Татьяна С',
            expiry: '03/24',
            numberMasked: '5678 **** **** 9012',
        },
    ],
    transactions: [
        {
            id: 't1',
            description: 'Dinner at Restaurant',
            transactionId: '#22548796',
            kind: 'Расход',
            card: '3778 ****',
            dateLabel: '29 Jan, 08.30 PM',
            amount: -3450,
        },
        {
            id: 't2',
            description: 'Salary Deposit',
            transactionId: '#22548797',
            kind: 'Доход',
            card: '5678 ****',
            dateLabel: '26 Jan, 09.00 AM',
            amount: 6200,
        },
        {
            id: 't3',
            description: 'Gym Membership',
            transactionId: '#22548798',
            kind: 'Расход',
            card: '3778 ****',
            dateLabel: '22 Jan, 06.15 PM',
            amount: -890,
        },
        {
            id: 't4',
            description: 'Online Course',
            transactionId: '#22548799',
            kind: 'Расход',
            card: '5678 ****',
            dateLabel: '19 Jan, 11.00 AM',
            amount: -2990,
        },
        {
            id: 't5',
            description: 'Bonus',
            transactionId: '#22548800',
            kind: 'Доход',
            card: '3778 ****',
            dateLabel: '16 Jan, 02.00 PM',
            amount: 1500,
        },
        {
            id: 't6',
            description: 'Coffee Shop',
            transactionId: '#22548801',
            kind: 'Расход',
            card: '5678 ****',
            dateLabel: '15 Jan, 09.45 AM',
            amount: -450,
        },
        {
            id: 't7',
            description: 'Shopping Mall',
            transactionId: '#22548802',
            kind: 'Расход',
            card: '3778 ****',
            dateLabel: '13 Jan, 04.20 PM',
            amount: -5200,
        },
        {
            id: 't8',
            description: 'Dividends',
            transactionId: '#22548803',
            kind: 'Доход',
            card: '5678 ****',
            dateLabel: '10 Jan, 10.30 AM',
            amount: 850,
        },
    ],
    balanceHistory: [
        { month: 'Июл', value: 6500 },
        { month: 'Авг', value: 7100 },
        { month: 'Сен', value: 7800 },
        { month: 'Окт', value: 8200 },
        { month: 'Ноя', value: 7900 },
        { month: 'Дек', value: 9200 },
        { month: 'Янв', value: 8750 },
    ],
    expenseStats: [
        { category: 'Рестораны', value: 35 },
        { category: 'Покупки', value: 40 },
        { category: 'Здоровье', value: 15 },
        { category: 'Другое', value: 10 },
    ],
    weeklyActivity: [
        { day: 'Sat', type: 'Депозиты', value: 280 },
        { day: 'Sat', type: 'Вывод', value: 520 },
        { day: 'Sun', type: 'Депозиты', value: 190 },
        { day: 'Sun', type: 'Вывод', value: 380 },
        { day: 'Mon', type: 'Депозиты', value: 380 },
        { day: 'Mon', type: 'Вывод', value: 490 },
        { day: 'Tue', type: 'Депозиты', value: 510 },
        { day: 'Tue', type: 'Вывод', value: 620 },
        { day: 'Wed', type: 'Депозиты', value: 340 },
        { day: 'Wed', type: 'Вывод', value: 290 },
        { day: 'Thu', type: 'Депозиты', value: 420 },
        { day: 'Thu', type: 'Вывод', value: 530 },
        { day: 'Fri', type: 'Депозиты', value: 470 },
        { day: 'Fri', type: 'Вывод', value: 580 },
    ],
}

export const getUserMockData = (userId: string): UserMockData => {
    if (userId === 'u1') return charleneData
    if (userId === 'u2') return tatianaData
    return charleneData // fallback
}