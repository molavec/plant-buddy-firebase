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
      title: {
        text: 'Ejemplo de gráfico de ECharts'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Serie 1', 'Serie 2']
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
          name: 'Serie 1',
          data: [10, 20, 30, 40, 50, 60, 77770],
          type: 'line'
        },
        {
          name: 'Serie 2',
          data: [70, 60, 50, 40, 30, 20, 1110],
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
