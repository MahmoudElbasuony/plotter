import { PlotterColumnsItem } from "./columns-item/columns-item.component";
import "./plotter-columns.css";

export function PlotterColumns({ props }) {
  const columns = ["Product", "Cost"];
  return (
    <div className="row">
      <div className="col">
        <div className="accordion" id="columns">
          <div className="accordion-item">
            <h2 className="accordion-header" id="columns-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Columns
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="columns"
              data-bs-parent="#columns"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {columns.map((col, indx) => (
                    <PlotterColumnsItem value={col} key={indx} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
