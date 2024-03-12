import InvoiceHeading from "../components/InvoiceHeading";

const Home = () => {
  return (
    <main className="dark:bg-black-12 text-black-8 min-h-screen font-spartan dark:text-white transition-all duration-200 ease-in">
      <section className="container md:max-w-[730px] w-11/12 mx-auto py-6 ">
        <InvoiceHeading />
      </section>
    </main>
  );
};

export default Home;
