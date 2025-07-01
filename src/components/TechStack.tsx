import { useRef, useEffect } from "react";

type TechItem = {
  name: string;
  icon: string;
};

type TechCategory = {
  name: string;
  technologies: TechItem[];
};

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const techCategories: TechCategory[] = [
    {
      name: "Languages",
      technologies: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      name: "Mobile Development",
      technologies: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Expo",
          icon: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4",
        },
        {
          name: "Redux Toolkit",
          icon: "https://redux-toolkit.js.org/img/redux-logo-landscape.png",
        },
        {
          name: "React Navigation",
          icon: "https://reactnavigation.org/img/spiro.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Realm",
          icon: "https://avatars.githubusercontent.com/u/7575099?s=200&v=4",
        },
      ],
    },
    {
      name: "Frameworks/Libraries",
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Storybook",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        },
      ],
    },
    {
      name: "Backend Tech",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Firebase Functions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      name: "Databases",
      technologies: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase Realtime DB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Supabase",
          icon: "https://supabase.com/dashboard/img/supabase-logo.svg",
        },
        {
          name: "Realm",
          icon: "https://avatars.githubusercontent.com/u/7575099?s=200&v=4",
        },
      ],
    },
    // {
    //   name: "UI Libraries",
    //   technologies: [
    //     {
    //       name: "Tailwind CSS",
    //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    //     },
    //     {
    //       name: "Material-UI",
    //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    //     },
    //     {
    //       name: "Bootstrap",
    //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    //     },
    //     {
    //       name: "Ant Design",
    //       icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    //     },
    //   ],
    // },
    {
      name: "Tools",
      technologies: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://img.icons8.com/?size=100&id=ARy6tFUfwclb&format=png&color=000000",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
        },
        {
          name: "Slack",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
        },
        {
          name: "Discord",
          icon: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const children = containerRef.current?.querySelectorAll(".tech-item");
    if (children) {
      children.forEach((child) => {
        observer.observe(child);
        child.classList.add("opacity-0");
      });
    }

    return () => {
      if (children) {
        children.forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div
          className="max-w-5xl mx-auto grid gap-8 md:gap-12"
          ref={containerRef}
        >
          {techCategories.map((category, index) => (
            <div key={index} className="tech-item space-y-4">
              <h3 className="text-xl font-semibold text-foreground inline-block px-3 py-1 rounded-lg neo-blur">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="glass-morphism rounded-lg px-4 py-3 text-center hover-scale card-shine flex flex-col items-center justify-center gap-2"
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
