import { PlotterCharBoard } from "./chart-board/chart-board.component";
import { PlotterChartControl } from "./chart-control/chart-control.component";

export function PlotterChart({ props }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <PlotterChartControl />
            <hr />
            <PlotterCharBoard />
          </div>
        </div>
      </div>
    </div>
  );
}
