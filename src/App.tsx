import './App.css'
import ChartBox from './components/commons/ChartBox'
import CardContainer from './components/commons/CardContainer'
import NivoLineChartExample from './components/commons/NivoLineChartExample'

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
