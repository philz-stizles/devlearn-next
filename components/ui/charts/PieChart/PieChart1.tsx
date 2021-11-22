import React from 'react'
import ChartistGraph from 'react-chartist'
import CardWrapper from '../../cards/CardWrapper/CardWrapper'

type Props = {
  title: string
}

const BarChart = ({ title }: Props) => {
  const data = {
    series: [20, 10, 30, 40],
  }

  const options = {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 100,
  }

  const type = 'Pie'

  return (
    <CardWrapper title={title}>
      <div className="pie-chart__content">
        <ChartistGraph data={data} options={options} type={type} />
      </div>
      <style>{`
        .pie-chart__content{

        }
      `}</style>
    </CardWrapper>
  )
}

export default BarChart
