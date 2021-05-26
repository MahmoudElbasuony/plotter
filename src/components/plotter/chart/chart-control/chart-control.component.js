import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

export function PlotterChartControl({ onMeasureChanged, onDimensionChanged }) {
  const [measures, setMeasures] = useState([]);
  const [dimension, setDimension] = useState("");
  const onMeasuresChange = () => {
    if (onMeasureChanged) onMeasureChanged(measures);
  };


  useEffect(()=>{
    onDimensionChanged(dimension)
  }, [dimension]);

  useEffect(() => {
    onMeasuresChange();
  }, [measures]);

  const onDimensionDrop = (monitor) => {
    const droppedDimension = (monitor || {}).value;
    if (!droppedDimension || measures.includes(droppedDimension)) return;
    setDimension(droppedDimension);
  };
  const onMeasureDrop = (monitor) => {
    const droppedMeasure = (monitor || {}).value;
    if (droppedMeasure && !measures.includes(droppedMeasure)) {
      setMeasures((prevMeasures) =>
        prevMeasures.includes(droppedMeasure) || droppedMeasure === dimension
          ? prevMeasures
          : [...prevMeasures, droppedMeasure]
      );
    }
  };

  const [, drop_dimension] = useDrop(
    () => ({ accept: "dimension", drop: onDimensionDrop }),
    [dimension, measures]
  );

  const [, drop_measure] = useDrop(
    () => ({ accept: "measure", drop: onMeasureDrop }),
    [dimension, measures]
  );

  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label"> Dimension </label>
          <div className="col-sm-9">
            <div className="input-group mb-3" ref={drop_dimension}>
              <input
                type="text"
                className="form-control"
                placeholder="Dimension"
                id="dimensionInput"
                value={dimension}
                readOnly
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
