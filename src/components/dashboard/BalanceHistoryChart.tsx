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
  const config = {
    data,
    height,
    xField: 'month',
    yField: 'value',
    smooth: true,
    line: { color: '#1d4ed8', size: 3 },
    areaStyle: { fill: 'l(270) 0:#1d4ed8 1:#ffffff' },
    xAxis: { tickLine: null },
    yAxis: { grid: { line: { style: { stroke: '#eef2ff' } } } },
  } as const

  return (
    <Area {...(config as unknown as Record<string, unknown>)} />
  )
}
