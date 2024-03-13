import addnew from "../assets/addnew.svg";
import { useState } from "react";

type ButtonProps = {
  text: string;
  isAddNew: boolean;
  handleAddNew: (isNewOpen: boolean) => void;
};

const Button = ({ text, isAddNew, handleAddNew }: ButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleAddNewClick = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
    handleAddNew(isOpen);
  };

  return (
    <>
      <button
        onClick={handleAddNewClick}
        className="font-bold flex gap-3 justify-center items-end bg-purple-1 text-white pl-2 pr-4 py-2 rounded-full hover:bg-purple-2"
      >
        {isAddNew && <img src={addnew} />}
        {text}
      </button>
    </>
  );
};
export default Button;
