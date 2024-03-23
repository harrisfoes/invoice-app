import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const Demo = () => {
  /* 
    Managing form state
    current value in the field
    whether a field has been interacted with
    whether a field has changed 
    whether the form is invalid
    if it contains errors 
  */

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="flex flex-col my-12 items-center text-gray-500">
      This is the Demo for React Hook Form
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col border p-6 rounded-xl m-6"
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
          className="border p-2"
        />
        <p className="text-red-400 text-sm">{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message: "Please enter a valid email address",
            },
          })}
          name="email"
          className="border p-2"
        />
        <p className="text-red-400 text-sm">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", { required: "Channel is required" })}
          name="channel"
          className="border p-2"
        />
        <p className="text-red-400 text-sm">{errors.channel?.message}</p>

        <button className="p-2 my-4 bg-amber-400 rounded-xl hover:opacity-75 text-white">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Demo;
