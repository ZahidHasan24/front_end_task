import ChatGptSvg from "../../assets/chatgpt.svg";
import { MdClose, MdMenu } from "react-icons/md";

const SidebarHeader = ({ open, setOpen }) => {
  return (
    <div className="flex items-center justify-between w-full px-2 mx-auto max-h-[20vh]">
      <div
        className={` ${
          !open && "scale-0 hidden"
        } flex flex-row items-center gap-2 mx-auto w-full`}
      >
        <img src={ChatGptSvg} alt="logo" className="w-6 h-6" />
        <h1 className={`${!open && "scale-0 hidden"}`}>OptiGPT</h1>
      </div>
      <div
        className="mx-auto btn btn-ghost"
        onClick={() => setOpen(!open)}
      >
        {open ? <MdClose size={15} /> : <MdMenu size={15} />}
      </div>
    </div>
  );
};

export default SidebarHeader;
