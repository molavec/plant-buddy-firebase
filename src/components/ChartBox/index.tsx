import './index.css'

const ChartBox = (props: any) => {
  const { children } = props
  return (
    <div className="chart-box">
      {children}
    </div>
  )
}

export default ChartBox
