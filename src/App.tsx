import './App.css'
import ChartBox from './components/ChartBox'
import EChartTemp from './components/EChartTemperature'
import EChartPH from './components/EChartPH'
import EChartH from './components/EChartHumidity'

function App() {

  return (
    <>
      <ChartBox>
        <EChartTemp/>
      </ChartBox>
      <ChartBox>
        <EChartPH/>
      </ChartBox>
      <ChartBox>
        <EChartH/>
      </ChartBox>
    </>
  )
}

export default App
