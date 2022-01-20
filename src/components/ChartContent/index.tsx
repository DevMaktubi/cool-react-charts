import { useEffect, useState } from 'react'
import * as S from './styles'

interface ChartProps {
  name: string;
  op: Object;
  sr: Array<Object>;
  type: string;
}

const ChartContent = ({name, op, sr, type}: ChartProps) => {

  const [options, setOptions] = useState<Object>({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }
  })

  const [series,setSeries] = useState<Object[]>([
    {
      name: 'series-1',
      data: [30,40,50,10,60,70,20,80]
    }
  ])

  useEffect(() => {
    setOptions(op);
    setSeries(sr)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <S.Container>
      <h1>{name}</h1>
        <S.StyledChart
          options={options}
          series={series}
          type={type}
          width="100%"
        />
    </S.Container>
  )
}

export default ChartContent