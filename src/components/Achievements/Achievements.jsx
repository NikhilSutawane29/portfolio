import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="px-[7vw] py-24 font-sans bg-skills-gradient md:px-[7vw] lg:px-[12vw]"
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          ACHIEVEMENTS &amp; CERTIFICATIONS
        </h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          Certifications and recognitions from my learning journey
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="rounded-2xl border border-white bg-gray-900 p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-purple-400/60 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                {achievement.category}
              </span>
              {achievement.date && (
                <span className="text-sm text-gray-500">{achievement.date}</span>
              )}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
              {achievement.title}
            </h3>
            {achievement.issuer && (
              <p className="mt-2 text-gray-300">{achievement.issuer}</p>
            )}
            {achievement.description && (
              <p className="mt-4 leading-7 text-gray-400">
                {achievement.description}
              </p>
            )}
            {achievement.certificateUrl && (
              <a
                href={achievement.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center rounded-lg border border-purple-400 bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-purple-600"
              >
                View Certificate <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
