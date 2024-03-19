import { useAddNew } from "../context/AddNewContext";
import chevron from "../assets/chevron.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import remove from "../assets/trash.svg";

enum PaymentEnum {
  next_1_days = "Next 1 Days",
  next_7_days = "Next 7 Days",
  next_14_days = "Next 14 Days",
  next_30_days = "Next 30 Days",
}

type Item = {
  itemName: string;
  quantity: number;
  price: number;
  total: number;
};

type InvoiceForm = {
  fromStreetAddress: string;
  fromCity: string;
  fromPostcode: string;
  fromCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostcode: string;
  clientCountry: string;
  date: string;
  paymentTerms: PaymentEnum;
  projectDesc: string;
  itemList: Item[];
};

const AddNewInvoice = () => {
  const { toggleIsOpen } = useAddNew();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceForm>();
  const onSubmit: SubmitHandler<InvoiceForm> = (data) => console.log(data);
  console.log(errors);

  const dateToday = () => {
    let today = new Date();
    return today.toISOString().slice(0, 10);
  };

  return (
    <>
      <section className="absolute inset-0 max-w-[616px] min-h-screen dark:bg-black-12 bg-white z-10 overflow-scroll">
        <div className="w-11/12 mx-auto">
          <button
            className="py-4 flex items-center gap-2 justify-center font-semibold"
            onClick={toggleIsOpen}
          >
            <img src={chevron} className="rotate-90" />
            <p>Go Back</p>
          </button>

          <p className="text-2xl font-bold">New Invoice</p>

          <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-purple-1 font-semibold my-2">Bill Form</p>

            <div className="flex flex-col mb-2">
              <label htmlFor="street-address" className="text-sm text-blue-7">
                Street Address
              </label>
              <input
                id="street-address"
                {...register("fromStreetAddress", {
                  required: "This is required",
                })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.fromStreetAddress && (
                <span className="text-red-400">
                  {errors.fromStreetAddress.message}
                </span>
              )}
            </div>

            <div className="flex gap-2 justify-between">
              <div className="flex flex-col mb-2 w-[48%]">
                <label htmlFor="city" className="text-sm text-blue-7">
                  City
                </label>
                <input
                  id="fromCity"
                  {...register("fromCity", { required: "This is required" })}
                  className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
                />
                {errors.fromCity && (
                  <span className="text-red-400">
                    {errors.fromCity.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-2 w-[48%]">
                <label htmlFor="postcode" className="text-sm text-blue-7">
                  Post Code
                </label>
                <input
                  id="postcode"
                  {...register("fromPostcode", {
                    required: "This is required",
                  })}
                  className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
                />
                {errors.fromPostcode && (
                  <span className="text-red-400">
                    {errors.fromPostcode.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <label htmlFor="country" className="text-sm text-blue-7">
                Country
              </label>
              <input
                id="country"
                {...register("fromCountry", { required: "This is required" })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.fromCountry && (
                <span className="text-red-400">
                  {errors.fromCountry.message}
                </span>
              )}
            </div>

            <p className="text-purple-1 font-bold mt-6 mb-2">Bill To</p>

            <div className="flex flex-col mb-2">
              <label htmlFor="client-name" className="text-sm text-blue-7">
                Client's Name
              </label>
              <input
                id="street-address"
                {...register("clientName", {
                  required: "This is required",
                })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.clientName && (
                <span className="text-red-400">
                  {errors.clientName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <label htmlFor="client-email" className="text-sm text-blue-7">
                Client's Email
              </label>
              <input
                id="street-address"
                {...register("clientEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please input a valid email address",
                  },
                })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.clientEmail && (
                <span className="text-red-400">
                  {errors.clientEmail.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <label
                htmlFor="client-street-address"
                className="text-sm text-blue-7"
              >
                Street Address
              </label>
              <input
                id="street-address"
                {...register("clientStreetAddress", {
                  required: "This is required",
                })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.clientStreetAddress && (
                <span className="text-red-400">
                  {errors.clientStreetAddress.message}
                </span>
              )}
            </div>

            <div className="flex gap-2 justify-between">
              <div className="flex flex-col mb-2 w-[48%]">
                <label htmlFor="client-city" className="text-sm text-blue-7">
                  City
                </label>
                <input
                  id="clientCity"
                  {...register("clientCity", { required: "This is required" })}
                  className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
                />
                {errors.clientCity && (
                  <span className="text-red-400">
                    {errors.clientCity.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-2 w-[48%]">
                <label
                  htmlFor="client-postcode"
                  className="text-sm text-blue-7"
                >
                  Post Code
                </label>
                <input
                  id="clientPostcode"
                  {...register("clientPostcode", {
                    required: "This is required",
                  })}
                  className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
                />
                {errors.clientPostcode && (
                  <span className="text-red-400">
                    {errors.clientPostcode.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <label htmlFor="client-country" className="text-sm text-blue-7">
                Country
              </label>
              <input
                id="country"
                {...register("clientCountry", { required: "This is required" })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.clientCountry && (
                <span className="text-red-400">
                  {errors.clientCountry.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-2 pt-6">
              <label htmlFor="date" className="text-sm text-blue-7">
                Invoice Date
              </label>
              <input
                id="date"
                type="date"
                value={dateToday()}
                {...register("date", {
                  valueAsDate: true,
                  required: "This is required",
                })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0 text-gray-6 datepicker opacity-50"
              />
              {errors.date && (
                <span className="text-red-400">{errors.date.message}</span>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <label htmlFor="payment-terms" className="text-sm text-blue-7">
                Payment Terms
              </label>
              <select
                id="payment-terms"
                {...register("paymentTerms", {
                  required: "This is required",
                })}
                className="rounded-sm px-2 py-2 border text-inherit bg-inherit dark:bg-blue-4 dark:border-0 text-gray-6"
              >
                <option value="next_1_day">Next 1 Day</option>
                <option value="next_7">Next 7 Day</option>
                <option value="next_14_day">Next 14 Day</option>
                <option value="next_30_day">Next 30 Day</option>
              </select>
              {errors.paymentTerms && (
                <span className="text-red-400">
                  {errors.paymentTerms.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <label
                htmlFor="project-description"
                className="text-sm text-blue-7"
              >
                Project Description
              </label>
              <input
                id="country"
                {...register("projectDesc", { required: "This is required" })}
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
              {errors.projectDesc && (
                <span className="text-red-400">
                  {errors.projectDesc.message}
                </span>
              )}
            </div>

            <p className="text-gray-6 font-bold mt-6 mb-2">Item List</p>

            {/* Add New Item Button
              create component first
              when item button is created make hook with Item object
              
            */}

            <div className="flex flex-col mb-2">
              <label htmlFor="item-name" className="text-sm text-blue-7">
                Item Name
              </label>
              <input
                id="item-name"
                className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col mb-2 w-1/6">
                <label htmlFor="item-qty" className="text-blue-7">
                  Qty.
                </label>
                <input
                  id="item-qty"
                  className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
                  type="number"
                />
              </div>
              <div className="flex flex-col mb-2 w-2/5">
                <label htmlFor="item-qty" className="text-blue-7">
                  Price
                </label>
                <input
                  id="item-qty"
                  className="rounded-sm px-2 py-2 border dark:bg-blue-4 dark:border-0"
                  type="number"
                />
              </div>
              <div className="flex flex-col mb-2 w-2/5">
                <label htmlFor="item-qty" className="text-blue-7">
                  Total
                </label>
                <p className="flex items-center justify-start font-semibold h-full">
                  156.00
                </p>
              </div>
              <div className="w-1/6 flex items-center">
                <img src={remove} />
              </div>
            </div>

            <div className="w-10/12 mx-auto">
              <button className="mx-auto w-full rounded-full py-4 font-semibold bg-gray-6 text-white-5 px-2">
                + Add New Item
              </button>
            </div>

            <div>
              <button
                className="bg-slate-400 p-2 rounded-xl"
                onClick={(e) => {
                  e.preventDefault;
                }}
              >
                Discard
              </button>

              <button
                className="bg-sky-400 p-2 rounded-xl"
                onClick={(e) => {
                  e.preventDefault;
                }}
              >
                Save as Draft
              </button>

              <button type="submit" className="bg-amber-400 p-2 rounded-xl">
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
      <div
        className="sliding-door absolute w-full bg-black-12 opacity-75 h-screen"
        onClick={toggleIsOpen}
      ></div>
    </>
  );
};

export default AddNewInvoice;
