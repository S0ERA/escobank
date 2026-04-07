import { Pie } from '@ant-design/plots'

export type ExpenseSlice = {
  category: string
  value: number
}

export function ExpenseStatisticsPie({
  data,
  height = 260,
}: {
  data: ExpenseSlice[]
  height?: number
}) {
  return (
    <Pie
      data={data}
      height={height}
      angleField="value"
      colorField="category"
      radius={0.9}
      innerRadius={0.55}
      label={{
        type: 'inner',
        content: '{value}%',
        style: { fontWeight: 700, fill: '#fff' },
      }}
      legend={false}
      statistic={false}
    />
  )
}
