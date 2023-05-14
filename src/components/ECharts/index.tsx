import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
// import 'echarts/dist/echarts.css';

interface EChartProps {
  data: any[];
}

const EChart: React.FC<EChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    const options = {
      animationDuration: 5000,
      title: {
        text: 'Mis plantas'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Planta 1', 'Planta 2']
      },
      xAxis: {
        type: 'category',
        data: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Planta 1',
          data: [28, 23, 30, 24, 28, 27, 20],
          type: 'line'
        },
        {
          name: 'Planta 2',
          data: [25, 30, 24, 26, 30, 21, 28],
          type: 'line'
        }
      ]
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
};







export default EChart;
