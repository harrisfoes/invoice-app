import empty from "../assets/person.svg";

const InvoiceEmpty = () => {
  return (
    <>
      <div className="mt-12 empty w-4/5  mx-auto flex flex-col justify-center">
        <img src={empty} className=" mx-auto" />
        <p className="font-bold text-2xl my-4 text-center">
          There is nothing here
        </p>
        <span className="text-center text-sm">
          Create an invoice by clicking the
          <span className="font-semibold">New</span> button and get started
        </span>
      </div>
    </>
  );
};

export default InvoiceEmpty;
