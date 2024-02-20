import Stroke from "./sideBarComponents/Stroke";
import Background from "./sideBarComponents/Background";
import Fill from "./sideBarComponents/Fill";
import StrokeWidth from "./sideBarComponents/StrokeWidth";
import Sloppiness from "./sideBarComponents/Sloppiness";
import { SideBarProps } from "../util/types";
import { Show } from "./Show";

const SideBar: React.FC<SideBarProps> = ({ options, setOptions }) => {
  return (
    <div className="absolute mx-4 mt-24 p-4 rounded-lg drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] bg-white w-auto h-auto">
      <Stroke options={options} setOptions={setOptions} />
      <Background options={options} setOptions={setOptions} />
      <Show>
        <Show.When isTrue={options.fill !== "transparent"}>
          <Fill options={options} setOptions={setOptions} />
        </Show.When>
      </Show>
      <StrokeWidth options={options} setOptions={setOptions} />
      <Sloppiness options={options} setOptions={setOptions} />
    </div>
  );
};

export default SideBar;
