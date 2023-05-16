import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface EChartProps {
  data: any[];
}

const EChartH: React.FC<EChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);
    const options = {
        animationDuration: 2000,
      title: {
        text: 'Variación de Humedad'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Planta 1', 'Planta 2']
      },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [55, 60, 65, 60, 58, 61, 68],
            type: 'line',
            smooth: true
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

export default EChartH;