const InvoiceStatus = ({
  status,
}: {
  status: "paid" | "pending" | "draft";
}) => {
  let bg = "#000";
  let fill = "#333";

  if (status === "paid") {
    bg = "rgb(51,214,159,0.10)";
    fill = "rgb(51,214,159)";
  } else if (status === "pending") {
    bg = "rgb(244,143,0, 0.10)";
    fill = "rgb(244,143,0)";
  } else if (status === "draft") {
    bg = "rgb(255,151,151, 0.10)";
    fill = "rgb(255,151,151)";
  }

  return (
    <>
      <div
        style={{ backgroundColor: bg }}
        className={`flex gap-2 items-center w-[105px] justify-center my-1 rounded-lg`}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill={fill} />
        </svg>
        <span className="font-bold" style={{ color: fill }}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </>
  );
};

type Invoice = {
  id: string;
  clientName: string;
  dueDate: string;
  total: number;
  status: "paid" | "pending" | "draft";
};

const InvoiceCard = ({ id, clientName, dueDate, total, status }: Invoice) => {
  return (
    <>
      <div className="bg-white rounded-lg px-5 py-4 my-3 dark:bg-blue-3 dark:text-white">
        <div className="flex justify-between">
          <p className="font-bold">
            <span className="text-blue-7">#</span>
            {id}
          </p>
          <p className="text-blue-7 text-sm dark:text-white-5">{clientName}</p>
        </div>
        <div className="flex justify-between pt-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-blue-7 dark:text-white-5">{dueDate}</p>
            <p className="font-bold">{total}</p>
          </div>
          <InvoiceStatus status={status} />
        </div>
      </div>
    </>
  );
};

export default InvoiceCard;
