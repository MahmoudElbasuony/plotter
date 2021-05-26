import { useState } from "react";
import { useDrop } from "react-dnd";

export function PlotterChartControl() {
  const [measures, setMeasures] = useState([]);
  const [dimension, setDimension] = useState("");

  const onDimensionDrop = (monitor) => {
    debugger;
    const droppedDimension = (monitor || {}).value;
    if (!droppedDimension || measures.includes(droppedDimension)) return;
    setDimension(droppedDimension);
  };

  const onMeasureDrop = (monitor) => {
    const droppedMeasure = (monitor || {}).value;
    if (droppedMeasure && !measures.includes(droppedMeasure)) {
      setMeasures((prevMeasures) => {
        if (prevMeasures.includes(droppedMeasure) ||droppedMeasure === dimension)
             return prevMeasures;
        else return [...prevMeasures, droppedMeasure];
      });
    }
  };
  
  const [, drop_dimension] = useDrop(() => ({ accept: "Column", drop: onDimensionDrop }),[dimension, measures]);

  const [, drop_measure] = useDrop(() => ({accept: "Column",drop: onMeasureDrop }),[dimension, measures]);

  const onMeasuresChange = () => {
    console.log(measures);
  };
  const onDimensionChange = () => {
    console.log(dimension);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label"> Dimension </label>
          <div className="col-sm-9">
            <div className="input-group mb-3" ref={drop_dimension}>
              <input
                type="text"
                readOnly
                className="form-control"
                placeholder="Dimension"
                id="dimensionInput"
                value={dimension}
                onChange={() => onDimensionChange()}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="dimensionClrBtn"
                onClick={() => setDimension("")}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label"> Measures </label>
          <div className="col-sm-9">
            <div className="input-group mb-3" ref={drop_measure}>
              <input
                type="text"
                className="form-control"
                placeholder="Measures"
                id="measuresInput"
                readOnly
                value={(measures || []).join(" , ")}
                onChange={() => onMeasuresChange()}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="measuresClrBtn"
                onClick={() => setMeasures([])}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
