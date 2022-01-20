import ChartContent from '../ChartContent'
import * as S from './styles'


const Dashboard = () => {

  return (
    <S.Container>
      <S.ChartDiv>
        <ChartContent 
          op={{
            chart: {
              id: 'basic-bar'
            },
            xaxis: {
              categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
            }
          }}
          sr={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
              name: 'series-2',
              data: [20, 40, 60, 80, 100, 120, 140, 160]
            }
          ]}
          name="First Chart"
          type="bar"
        />
      </S.ChartDiv>
      <S.ChartDiv>
      <ChartContent 
          op={{
            chart: {
              id: 'basic-line'
            },
            xaxis: {
              categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
            }
          }}
          sr={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
              name: 'series-2',
              data: [20, 40, 60, 80, 100, 120, 140, 160]
            }
          ]}
          name="Second Chart"
          type="line"
        />
      </S.ChartDiv>
      <S.ChartDiv>
      <ChartContent 
          op={{
            chart: {
              id: 'basic-area'
            },
            xaxis: {
              categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
            }
          }}
          sr={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
              name: 'series-2',
              data: [20, 40, 60, 80, 100, 120, 140, 160]
            }
          ]}
          name="Third Chart"
          type="area"
        />
      </S.ChartDiv>
      <S.ChartDiv>
      <ChartContent 
          op={{
            chart: {
              id: 'basic-range'
            },
            xaxis: {
              categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
            }
          }}
          sr={[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
              name: 'series-2',
              data: [20, 40, 60, 80, 100, 120, 140, 160]
            }
          ]}
          name="Fourth Chart"
          type="radar"
        />
      </S.ChartDiv>
    </S.Container>
  )
}

export default Dashboard