import './App.css'
import ChartBox from './components/ChartBox'
import NivoLineChartExample from './components/NivoLineChartExample'
import EChart from './components/ECharts'

function App() {
  
  return (
    <>
      <ChartBox>
        <NivoLineChartExample/>
      </ChartBox>
      <ChartBox>
        <NivoLineChartExample/>
      </ChartBox>
      <ChartBox>
        <NivoLineChartExample/>
      </ChartBox>
      <ChartBox>
        <EChart/>
      </ChartBox>
      
    </>
  )
}

export default App
