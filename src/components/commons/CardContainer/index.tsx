import { ReactNode } from 'react'
import './index.css'

type Props = {
  children: ReactNode
}

const CardContainer = (props: Props) => {
  const { children } = props
  return (
    <div className="text-slate-800 p-4 rounded-lg shadow-md shadow-gray-500/20">
      { children }
    </div>
  )
}

export default CardContainer
