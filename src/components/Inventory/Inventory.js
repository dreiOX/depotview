import GateInDataCard from "./GateInDataCard";
import GateOutDataCard from "./GateOutDataCard";
import InventorySearch from "./InventorySearch";

function Inventory({ gateInData, gateOutData }) {
  return (
    <div>
      <InventorySearch />
      <GateInDataCard gateInData={gateInData} />
      <GateOutDataCard gateInData={gateOutData} />
    </div>
  );
}

export default Inventory;
