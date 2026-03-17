import { Area } from '@ant-design/plots'

export type BalancePoint = {
  month: string
  value: number
}

export function BalanceHistoryChart({
  data,
  height = 260,
}: {
  data: BalancePoint[]
  height?: number
}) {
  return (
    <Area
      data={data}
      height={height}
      xField="month"
      yField="value"
      smooth
      line={{ color: '#1d4ed8', size: 3 }}
      areaStyle={{ fill: 'l(270) 0:#1d4ed8 1:#ffffff' }}
      xAxis={{ tickLine: null }}
      yAxis={{ grid: { line: { style: { stroke: '#eef2ff' } } } }}
    />
  )
}
