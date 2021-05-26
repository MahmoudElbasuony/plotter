import { useDrag } from "react-dnd";

export function PlotterColumnsItem({ value }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Column",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item : {value : value}
  }));
  return <li ref={drag} className="list-group-item">{value}</li>;
}
