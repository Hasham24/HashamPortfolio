import { useRef, useEffect } from "react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const experienceItems: ExperienceItem[] = [
    {
      title: "Senior React Native Engineer",
      company: "Bitsol Technologies",
      location: "Islamabad, Pakistan",
      period: "December 2022 - Present",
      achievements: [
        "Architect, design, and develop robust and scalable mobile applications using React Native.",
        "Collaborate with product managers and cross-functional teams to define project goals, scope, and deliverables.",
        "Write structured JavaScript code for developing efficient mobile applications.",
        "Optimize app performance and enhance user experience through performance profiling and tuning.",
        "Stay abreast of the latest advancements in React Native, mobile app development, and related technologies.",
        "Automated code quality checks using Husky, lint-staged, and commit-lint for enforcing commit message conventions, improving the development workflow.",
        "Maintained transparent communication with the Project Manager and client, providing regular project status updates and addressing challenges proactively.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "DPL",
      location: "Islamabad, Pakistan",
      period: "February 2022 - December 2022",
      achievements: [
        "Develop and maintain scalable and performant mobile applications using React Native.",
        "Created web portals using Next.js to improve user experiences and expand mobile application functionality.",
        "Engineered reliable and scalable backends utilizing Node.js and Express.js to manage data and transactions for various projects.",
        "Successfully deployed applications and services on platforms such as Digital Ocean and GoDaddy, ensuring high availability and performance.",
        "Created responsive and dynamic web applications using the MERN stack",
        "Designed and implemented trading journal applications to help traders record and analyze their trading activities efficiently.",
        "Effectively communicated with clients, providing regular updates and addressing concerns and suggestions to achieve project goals.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Techinn360",
      location: "Rawalpindi, Pakistan",
      period: "July 2022 - February 2023",
      achievements: [
        "Took charge of custom web client development using React, Bootstrap, React Query, React Data Table (Server-side pagination) and Formik.",
        "Implemented robust NodeJS, Express web server to communicate with MySQL database.",
        "Used Prisma ORM to facilitate data modelling and building SQL queries.",
        "Delivered maintainable, well-documented code with comprehensive unit and integration tests.",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const items = containerRef.current?.querySelectorAll(".experience-item");
    if (items) {
      items.forEach((item) => {
        observer.observe(item);
        item.classList.add("opacity-0");
      });
    }

    return () => {
      if (items) {
        items.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my career development and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="experience-item mb-12 relative pl-8 md:pl-12"
            >
              {/* Timeline connector */}
              {index < experienceItems.length - 1 && (
                <div className="absolute left-3 md:left-5 top-5 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>

              <div className="glass-morphism rounded-xl p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-accent px-3 py-1 rounded-full neo-blur inline-block">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
