import React from 'react'
import ChartistGraph from 'react-chartist'
import CardWrapper from '../../cards/CardWrapper/CardWrapper'

type Props = {
  title: string
}

const BarChart = ({ title }: Props) => {
  const data = {
    labels: [2016, 2017, 2018, 2019, 2020],
    series: [[75, 45, 80, 40, 85]],
  }
  const options = {
    // high: 10,
    // low: 0,
    axisX: {
      labelInterpolationFnc(value: any, index: number) {
        return index % 2 === 0 ? value : null
      },
    },
  }
  const type = 'Line'

  return (
    <CardWrapper title={title}>
      <div className="bar-chart__content">
        <ChartistGraph data={data} options={options} type={type} />
      </div>
      <style>{`
        .bar-chart__content{

        }
      `}</style>
    </CardWrapper>
  )
}

export default BarChart
