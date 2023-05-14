import './App.css'
import ChartBox from './components/commons/ChartBox'
import NivoLineChartExample from './components/commons/NivoLineChartExample'

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
