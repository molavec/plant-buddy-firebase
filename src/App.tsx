import './App.css'
import ChartBox from './components/ChartBox'
import EChartTemp from './components/EChartTemperature'
import EChartPH from './components/EChartPH'
import EChartH from './components/EChartHumidity'
import EChartHth from './components/EChartHealth'
function App() {

  return (
    <>
      <ChartBox>
        <EChartTemp/>
      </ChartBox>
      <ChartBox>
        <EChartH/>
      </ChartBox>
      <ChartBox>
        <EChartPH/>
      </ChartBox>
      <ChartBox>
        <EChartHth/>
      </ChartBox>

    </>
  )
}

export default App
