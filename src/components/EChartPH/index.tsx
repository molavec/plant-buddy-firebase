import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { chartSeriesData } from './data';

interface EChartProps {
  data: any[];
}

const EChartPH: React.FC<EChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    const options = {
      animationDuration: 2000,
      title: {
        text: 'Variación de PH'
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
      series: chartSeriesData
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

export default EChartPH;
