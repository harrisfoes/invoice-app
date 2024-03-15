import addnew from "../assets/addnew.svg";
import { useAddNew } from "../context/AddNewContext";

type ButtonProps = {
  text: string;
  isAddNew: boolean;
};

const Button = ({ text, isAddNew }: ButtonProps) => {
  const { toggleIsOpen } = useAddNew();

  return (
    <>
      <button
        onClick={toggleIsOpen}
        className="font-bold flex gap-3 justify-center items-end bg-purple-1 text-white pl-2 pr-4 py-2 rounded-full hover:bg-purple-2"
      >
        {isAddNew && <img src={addnew} />}
        {text}
      </button>
    </>
  );
};
export default Button;
