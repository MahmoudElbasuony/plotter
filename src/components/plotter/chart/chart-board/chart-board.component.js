import { Line } from "react-chartjs-2";
import { ChartService } from "../../../../services/chart.service";
const options = ChartService.getChartDefaultOptions();

export function PlotterCharBoard({ data = [] }) {
  const dimensionLabels = ChartService.getDimensionLabels(data);
  const dataSets = ChartService.getDataSets(data, dimensionLabels);
  const chartData = {
    labels: dimensionLabels,
    datasets: dataSets,
  };
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
