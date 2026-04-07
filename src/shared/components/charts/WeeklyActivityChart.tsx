import { Column } from '@ant-design/plots'

export type WeeklyActivityPoint = {
  day: string
  type: 'Депозиты' | 'Вывод'
  value: number
}

export function WeeklyActivityChart({
  data,
  height = 260,
}: {
  data: WeeklyActivityPoint[]
  height?: number
}) {
  return (
    <Column
      data={data}
      height={height}
      xField="day"
      yField="value"
      seriesField="type"
      isGroup
      legend={{ position: 'top-right' }}
      color={['#22c55e', '#1d4ed8']}
      columnStyle={{ radius: [8, 8, 0, 0] }}
      xAxis={{ tickLine: null }}
      yAxis={{ grid: { line: { style: { stroke: '#eef2ff' } } } }}
    />
  )
}
