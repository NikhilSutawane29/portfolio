import { freelanceProjects, upcomingFreelanceWork } from "../../constants";

const FreelanceWork = () => {
  return (
    <section
      id="freelance"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">FREELANCE WORK</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Independent projects built for clients and businesses
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {freelanceProjects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-white bg-gray-900 shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="h-56 overflow-hidden bg-white">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-contain p-6"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-purple-400/60 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-4 text-gray-400">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-lg border border-gray-400 bg-[#8245ec] px-3 py-1 text-xs text-gray-200 sm:text-sm"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-lg border border-purple-400 bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-purple-600"
                >
                  See my work
                  <span aria-hidden="true" className="ml-2 text-lg">
                    &rarr;
                  </span>
                </a>
              )}
            </div>
          </article>
        ))}

        <article className="flex min-h-[28rem] flex-col justify-center rounded-2xl border border-dashed border-purple-400/70 bg-gray-900/70 p-6 text-center shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/70 bg-purple-500/10 text-3xl text-purple-300">
            +
          </div>
          <span className="mt-6 text-sm font-medium uppercase tracking-wider text-purple-300">
            {upcomingFreelanceWork.category}
          </span>
          <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            {upcomingFreelanceWork.title}
          </h3>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            {upcomingFreelanceWork.description}
          </p>
        </article>
      </div>
    </section>
  );
};

export default FreelanceWork;
