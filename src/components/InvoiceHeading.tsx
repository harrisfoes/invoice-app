import Button from "./Button";
import chevron from "../assets/chevron.svg";

const InvoiceHeading = ({
  handleAddNew,
}: {
  handleAddNew: (isOpen: boolean) => void;
}) => {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="font-bold text-2xl">Invoices</h1>
        <p>7 invoices</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="font-bold flex gap-2">
          <span>Filter</span>
          <button>
            <img src={chevron} />
          </button>
        </div>
        <div>
          <Button text="New" isAddNew={true} handleAddNew={handleAddNew} />
        </div>
      </div>
    </section>
  );
};

export default InvoiceHeading;
