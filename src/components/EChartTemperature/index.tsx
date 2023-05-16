import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { chartSeriesData2 } from './data';

type EChartsOption = echarts.EChartsOption;

const EChartTemp: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option: EChartsOption = {
        title: {
          text: 'Variación de temperatura',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C',
          },
        },
        series: chartSeriesData2,
      };

      myChart.setOption(option);
    }
  }, []);

  return <div id="main" ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartTemp;
