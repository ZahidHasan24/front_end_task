import {
  MdLightbulb,
  MdAirplanemodeActive,
  MdCreate,
  MdLayers,
} from "react-icons/md";

const Template = ({ item, setFormValue }) => {
  return (
    <div
      className="p-3 border rounded-lg border-slate-300 hover:border-slate-500 hover:cursor-pointer"
      onClick={() => setFormValue(item.prompt)}
    >
      {item.icon === "idea" && <MdLightbulb color="#e2c541" size={20} />}
      {item.icon === "fly" && (
        <MdAirplanemodeActive color="#76d0eb" size={20} />
      )}
      {item.icon === "write" && <MdCreate color="#a7d08b" size={20} />}
      {item.icon === "education" && <MdLayers color="#cb8bd0" size={20} />}
      <div className="line-clamp-3 text-balance text-white-500 dark:text-gray-500 break-word mt-3">
        {item.title}
      </div>
    </div>
  );
};

export default Template;
