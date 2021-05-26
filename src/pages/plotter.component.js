import { PlotterChart } from "../components/plotter/chart/plotter-chart.componet";
import { PlotterColumns } from "../components/plotter/columns/plotter-columns.component";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function Plotter() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="row">
        <div className="col-4">
          <PlotterColumns></PlotterColumns>
        </div>
        <div className="col">
          <PlotterChart></PlotterChart>
        </div>
      </div>
    </DndProvider>
  );
}
