import { useDrag } from "react-dnd";

export function PlotterColumnsItem({ value, category }) {
  const [, drag] = useDrag(() => ({
    type: category,
    item: { value, category },
  }));
  return (
    <li ref={drag} className="list-group-item">
      {value}
    </li>
  );
}
