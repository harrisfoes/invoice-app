import { useAddNew } from "../context/AddNewContext";
import chevron from "../assets/chevron.svg";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fromStreetAddress: string;
  fromCity: string;
  fromPostcode: string;
  fromCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
};

const AddNewInvoice = () => {
  const { toggleIsOpen } = useAddNew();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="absolute inset-0 min-h-screen dark:bg-black-12 bg-white z-10">
        <div>
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

            <button type="submit" className="bg-amber-400 p-2 rounded-xl">
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNewInvoice;
