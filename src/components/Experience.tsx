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
      title: "Senior Mobile Application Engineer",
      company: "Veroke",
      location: "Islamabad, Pakistan",
      period: "August 2025 - Present",
      achievements: [
        "Architect and lead the development of scalable, high-performance mobile applications using React Native and Flutter.",
        "Designed modular mobile architecture ensuring maintainability, reusability, and long-term scalability across projects.",
        "Integrated agentic AI systems to automate repetitive workflows and enhance intelligent user personalization, significantly improving user engagement and retention.",
        "Collaborate cross-functionally with product managers, designers, and backend engineers to translate business requirements into scalable technical solutions.",
        "Drive adoption of modern development standards including CI/CD pipelines, code quality automation, and structured release management.",
        "Mentor junior and mid-level engineers through architectural guidance, code reviews, and technical workshops to elevate overall engineering quality.",
      ],
    },
    {
      title: "Senior React Native Engineer",
      company: "Bitsol Technologies",
      location: "Islamabad, Pakistan",
      period: "December 2022 - Jun 2025",
      achievements: [
        "Led architecture and end-to-end development of scalable React Native applications serving thousands of active users.",
        "Collaborated closely with product managers, designers, and backend teams to define technical scope, roadmap, and delivery milestones.",
        "Designed modular and maintainable codebases using TypeScript, improving long-term scalability and reducing technical debt.",
        "Optimized application performance by profiling memory usage, reducing re-renders, and improving API handling, resulting in smoother UX and faster load times.",
        "Implemented CI/CD improvements and automated code quality enforcement using Husky, lint-staged, and commit-lint, significantly improving development workflow consistency.",
        "Provided proactive communication with clients and stakeholders, ensuring transparency, risk mitigation, and on-time project delivery.",
        "Mentored junior developers through code reviews and architectural guidance, improving overall team code quality.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "DPL",
      location: "Islamabad, Pakistan",
      period: "February 2022 - December 2022",
      achievements: [
        "Developed and maintained high-performance cross-platform mobile applications using React Native for Android and iOS.",
        "Designed scalable mobile architecture using Redux Toolkit, Context API, and modular component patterns to improve maintainability.",
        "Implemented complex navigation flows using React Navigation including deep linking and nested navigators.",
        "Integrated RESTful APIs with efficient data caching, error handling, and asynchronous state management.",
        "Optimized application performance by minimizing unnecessary re-renders, improving memory usage, and reducing app startup time.",
        "Implemented push notifications, background tasks, and device-specific native integrations where required.",
        "Managed app release cycles including build generation, environment configuration, and deployment to Google Play Store and Apple App Store.",
        "Expanded product ecosystem by building supporting web portals using Next.js to complement mobile functionality.",
        "Collaborated directly with clients and cross-functional teams to deliver feature-rich and business-aligned mobile solutions.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "Develo IT Solutions",
      location: "Islamabad, Pakistan",
      period: "April 2020 - January 2022",
      achievements: [
        "Developed and maintained cross-platform mobile applications using React Native and Flutter.",
        "Designed scalable mobile architectures using Redux, Redux Toolkit, Redux Saga, Context API, Bloc, GetX, Provider, and Riverpod.",
        "Implemented modern, responsive UI systems with reusable components and advanced animations.",
        "Integrated Firebase, REST APIs, and GraphQL services ensuring secure and efficient backend communication.",
        "Strengthened application stability through unit, widget, and integration testing using Jest, Detox, and Flutter testing frameworks.",
        "Collaborated with cross-functional teams to deliver high-quality production-ready applications.",
        "Improved development lifecycle by contributing to CI/CD pipelines using Fastlane, GitHub Actions, App Store, and Google Play deployment workflows.",
        "Contributed to code reviews, secure coding standards, and continuous performance optimization initiatives.",
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
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
