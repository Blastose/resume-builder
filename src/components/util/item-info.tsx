import ItemInfoInterface from "../interfaces/item-info-interface";

function ItemInfo(props: ItemInfoInterface) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col leading-tight">
        <div className="font-bold">{props.name}</div>
        <div className="italic text-sm">{props.sub}</div>
      </div>

      <div className="flex flex-col leading-none text-right">
        <div className="font-medium">
          {props.start}-{props.end}
        </div>
        <div className="italic text-sm">{props.location}</div>
      </div>
    </div>
  );
}

export default ItemInfo;
