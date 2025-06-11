import { Button } from "../../../../custom";
import { CATEGORIES_LINK } from "../../../../data";
import { useNavigate } from "react-router";
export default function Sidebar() {
  const nav = useNavigate();
  return (
    <div className="w-1/6 p-1  border-l-2 border-dashed border-purple-900 h-full flex flex-col gap-1">
      {CATEGORIES_LINK.map((it, index) => (
        <Button onClick={() => nav(it.link)} key={index} className="!w-full">
          {it.icon}
          <span className="w-max">{`${it.title}`}</span>
        </Button>
      ))}
    </div>
  );
}
