import { Line } from "react-chartjs-2";

export function PlotterCharBoard({}) {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5, 6],
        borderColor: "1px solid green",
      },
      {
        label: "Dataset 2",
        data: [1, 2, 3, 2, 1, 0],
        borderColor: "1px solid red",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          color: "red",
          display: true,
          text: "Measure",
        },
      },
      y: {
        title: {
          color: "green",
          display: true,
          text: "dimension",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
