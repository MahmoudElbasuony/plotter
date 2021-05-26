import { PlotterChart } from "../components/plotter/chart/plotter-chart.componet";
import { PlotterColumns } from "../components/plotter/columns/plotter-columns.component";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { DataService } from "../services/data.service";

export function Plotter() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchColumns = async () => {
      return await DataService.fetchColumns();
    };
     fetchColumns().then(cols => {
        setColumns(cols);
     });
    
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="row">
        <div className="col-4">
          <PlotterColumns cols={columns}></PlotterColumns>
        </div>
        <div className="col">
          <PlotterChart/>
        </div>
      </div>
    </DndProvider>
  );
}
