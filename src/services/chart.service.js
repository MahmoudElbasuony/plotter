export const ChartService = {
  getDimensionLabels(data) {
    const firstDimension = data.find((e) => e.function === "dimension");
    return firstDimension ? [...firstDimension.values] : [];
  },
  getDataSets(data, dimensionLabels) {
    const sets = data
      ? data
          .filter((e) => e.function === "measure")
          .map((e, i) => ({
            label: `${dimensionLabels[i]}_${i}`,
            data: e.values,
            borderColor: "1px solid green",
          }))
      : [];
    return sets;
  },
  getChartDefaultOptions() {
    const options = {
      scales: {
        x: {
          title: {
            color: "red",
            display: true,
            text: "Dimension",
          },
          ticks: {
            beginAtZero: true,
          },
        },
        y: {
          title: {
            color: "red",
            display: true,
            text: "Measure",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    return options;
  },
};
