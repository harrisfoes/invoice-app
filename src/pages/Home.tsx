import InvoiceHeading from "../components/InvoiceHeading";
import InvoiceCard from "../components/InvoiceCard";
import { useState } from "react";

type Invoice = {
  id: string;
  clientName: string;
  dueDate: string;
  total: number;
  status: "paid" | "pending" | "draft";
};

const Home = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "RT3080",
      clientName: "Jensen Huang",
      dueDate: "19 Aug 2021",
      total: 1800.9,
      status: "paid",
    },
    {
      id: "XM9141",
      clientName: "Alex Grim",
      dueDate: "20 Sep 2021",
      total: 556.0,
      status: "pending",
    },
    {
      id: "RG0314",
      clientName: "John Morrison",
      dueDate: "01 Oct 2021",
      total: 14002.33,
      status: "draft",
    },
  ]);

  return (
    <main className="dark:bg-black-12 text-black-8 min-h-screen font-spartan dark:text-white bg-white-11 transition-all duration-200 ease-in">
      <section className="container md:max-w-[730px] w-11/12 mx-auto py-6 ">
        <InvoiceHeading />
        <section className="py-4">
          {invoices.length > 1 &&
            invoices.map((invoice) => {
              return (
                <InvoiceCard
                  id={invoice.id}
                  clientName={invoice.clientName}
                  dueDate={invoice.dueDate}
                  total={invoice.total}
                  status={invoice.status}
                />
              );
            })}
        </section>
      </section>
    </main>
  );
};

export default Home;
