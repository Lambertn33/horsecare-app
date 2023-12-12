export const Home = () => {
  const homeCard = (
    <div>
      <h3 className="mb-2 text-xl font-bold text-primary dark:text-white">
        Grooming
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi
        delectus vel, blanditiis suscipit incidunt dolor alias repellendus,
        maxime corporis perferendis ut illum laboriosam a nostrum eos dolores
        veniam. Debitis!
      </p>
    </div>
  );

  const homeCards = Array.from({ length: 6 }, (_, index) => (
    <div key={index}>{homeCard}</div>
  ));

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-white">
            Take care of your horses
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            corrupti accusamus odio, omnis magni est excepturi
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {homeCards}
        </div>
      </div>
    </section>
  );
};
