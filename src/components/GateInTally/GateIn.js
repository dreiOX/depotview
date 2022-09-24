import Menu from "../Menu/Menu";
import GateInForm from "./GateInForm";

function GateIn({ setGateInData }) {
  return (
    <div>
      <Menu />

      <GateInForm setGateInData={setGateInData} />
    </div>
  );
}

export default GateIn;
