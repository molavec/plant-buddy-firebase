import './App.css'
import ChartBox from './components/ChartBox'
import CardContainer from './components/CardContainer'
import NivoLineChartExample from './components/NivoLineChartExample'

function App() {
  
  return (
    <>

      <div className="text-3xl text-rose-600">
        Wellcome to Tailwind CSS
      </div>
      
      <CardContainer>
        <ChartBox>
          <NivoLineChartExample/>
        </ChartBox>
      </CardContainer>
      
    </>
  )
}

export default App
