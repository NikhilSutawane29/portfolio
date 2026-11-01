import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-[7vw] py-24 pb-24 font-sans bg-skills-gradient clip-path-custom-2 md:px-[7vw] lg:px-[12vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-3 top-0 w-px bg-white/70 sm:left-1/2 sm:-translate-x-1/2"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-10 flex flex-col items-stretch sm:mb-16 sm:flex-row sm:items-center ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Content Section */}
            <div
              className={`ml-8 w-[calc(100%-2rem)] rounded-2xl border border-white bg-gray-900 p-5 shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] sm:mx-0 sm:w-full sm:max-w-md sm:p-8 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              }`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start gap-4 sm:items-center sm:gap-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 shrink-0 bg-white rounded-full overflow-hidden flex items-center justify-center p-1">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-2xl">
                      {experience.role}
                    </h3>
                      <h4 className="text-sm text-gray-300 sm:text-base">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {experience.type && (
                        <span className="rounded-full border border-purple-400/60 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                          {experience.type}
                        </span>
                      )}
                      <p className="text-sm text-gray-500">{experience.date}</p>
                    </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                {experience.desc}
              </p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="mt-2 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-gray-400 bg-[#8245ec] px-3 py-1 text-xs text-gray-300 sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
              </div>
              {experience.certificateUrl && (
                <a
                    href={experience.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-purple-400 bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-purple-600"
                >
                    View Certificate <span aria-hidden="true" className="ml-2">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;