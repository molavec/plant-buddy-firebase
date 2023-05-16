export const chartSeriesData2 = [
  {
    name: "Máxima",
    type: "line",
    data: [25, 21, 24, 21, 24, 22, 20],
    markPoint: {
      data: [
        { type: "max", name: "Max" },
        { type: "min", name: "Min" },
      ],
    },
    markLine: {
      data: [{ type: "average", name: "Avg" }],
    },
  },
  {
    name: "Mínima",
    type: "line",
    data: [19, 17, 16, 18, 17, 20, 16],
    markPoint: {
      data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
    },
    markLine: {
      data: [
        { type: "average", name: "Avg" },
        [
          {
            symbol: "none",
            x: "90%",
            yAxis: "max",
          },
          {
            symbol: "circle",
            label: {
              position: "start",
              formatter: "Max",
            },
            type: "max",
            name: "最高点",
          },
        ],
      ],
    },
  },
];
