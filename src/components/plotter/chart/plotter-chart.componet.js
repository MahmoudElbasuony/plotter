import { useEffect, useState } from "react";
import { DataService } from "../../../services/data.service";
import { PlotterCharBoard } from "./chart-board/chart-board.component";
import { PlotterChartControl } from "./chart-control/chart-control.component";

export function PlotterChart({ props }) {
  const [measures, setMeasures] = useState([]);
  const [dimension, setDimension] = useState("");
  const [data, setData] = useState([]);

  const onMeasureChangedHanler = (measuresEventArg) => {
    setMeasures(measuresEventArg);
  };
  const onDimensionChangedHandler = (dimensionEventArg) => {
    setDimension(dimensionEventArg);
  };

  useEffect(() => {
    if (measures && measures.length && dimension) {
      // call api to get the new data
      DataService.fetchCharData(dimension, measures).then((data) => {
        const classifiedData = classifyData(data, measures, dimension);
        setData(classifiedData);
        console.log(classifiedData);
      });
    }
  }, [measures, dimension]);

  const isValidDataToRender = () =>
    measures && measures.length && dimension && data && data.length;

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <PlotterChartControl
              onMeasureChanged={onMeasureChangedHanler}
              onDimensionChanged={onDimensionChangedHandler}
            />
            <hr />
            {!!isValidDataToRender() && <PlotterCharBoard data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function classifyData(data = [], measures = []) {
  const result = [];
  data.forEach((entry) => {
    let newEntry = {};
    if (measures.some((m) => m.toLowerCase() === entry.name.toLowerCase())) {
      Object.assign(newEntry, entry, { function: "measure" });
    } else {
      Object.assign(newEntry, entry, { function: "dimension" });
    }
    result.push(newEntry);
  });
  return result;
}
