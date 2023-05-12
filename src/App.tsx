import './App.css'
import ChartBox from './components/ChartBox'
import NivoLineChartExample from './components/NivoLineChartExample'

function App() {
  
  return (
    <>

      <div className="text-3xl text-rose-600">
        Wellcome to Tailwind CSS
      </div>

      <ChartBox>
        <NivoLineChartExample/>
      </ChartBox>
      <ChartBox>
        <NivoLineChartExample/>
      </ChartBox>
    
      
    </>
  )
}

export default App
