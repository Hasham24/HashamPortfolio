import { useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "E-commerce Marketplace (Mobile App)",
      description:
        "Built and optimized a scalable e-commerce marketplace mobile app serving 10M+ users globally using React Native. Delivered fast, responsive, and accessible UI/UX with intuitive product browsing, checkout flow, and real-time data updates.",
      techStack: [
        "React Native",
        "React Navigation",
        "Redux Toolkit",
        "RTK Query",
        "React Native Paper",
        "React Hook Form",
        "Jest + React Native Testing Library",
      ],
      image:
        "https://images.unsplash.com/photo-1726056652635-7db7a936e7be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gym & Fitness Tracker App",
      description:
        "Developed a mobile app tailored for gym-goers to track workouts, manage fitness goals, and monitor progress over time. Integrated personalized workout plans, exercise logging, and analytics dashboard. Focused on performance, sleek UI, and seamless user experience.",
      techStack: [
        "React Native",
        "React Navigation",
        "Redux Toolkit",
        "Firebase (Auth & Firestore)",
        "Reanimated + Gesture Handler",
        "Victory Native / React Native SVG Charts",
        "React Native Paper",
        "AsyncStorage",
      ],
      image:
        "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww",
    },
    {
      title: "Restaurant Companion App",
      description:
        "Created a custom mobile app for a specific restaurant, offering menu browsing, table reservations, order tracking, and loyalty rewards. Designed to elevate customer engagement and streamline dine-in and takeaway operations.",
      techStack: [
        "React Native",
        "React Navigation",
        "Redux Toolkit",
        "Firebase (Auth, Firestore)",
        "React Native Maps",
        "Stripe / Cashfree Payment Gateway",
        "Lottie for Animations",
        "React Native Paper",
      ],
      image:
        "https://images.unsplash.com/photo-1659626890153-7421275f4b74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdHVyYW50fGVufDB8fDB8fHww",
    },
    {
      title: "Book Lovers – Audiobook & Ebook Marketplace",
      description:
        "Developed a mobile app for book enthusiasts to buy, sell, and enjoy books in both audio and digital (PDF) formats. Users can listen to audiobooks with in-app playback or read ebooks directly using an integrated PDF viewer. Features include previews, secure payments, personal library management, category-wise browsing, and offline support.",
      techStack: [
        "React Native",
        "React Navigation",
        "Redux Toolkit",
        "React Native Track Player (for audio)",
        "react-native-pdf",
        "Firebase (Auth, Firestore, Storage)",
        "Stripe / Razorpay Integration",
        "React Hook Form",
        "React Native Paper",
        "AsyncStorage",
      ],
      image:
        "https://images.unsplash.com/photo-1591719675150-a9302a9cb467?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGUlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Road Car Assistance App",
      description:
        "Built a mobile application that allows users to request real-time car assistance on the road for issues like flat tires, engine failure, or battery problems. Integrated live location tracking, service request management, and real-time updates for customers and service providers. Used classic Redux and Axios for API handling without Expo dependencies.",
      techStack: [
        "React Native (CLI)",
        "React Navigation",
        "Redux",
        "Axios",
        "Firebase (Auth & Firestore)",
        "react-native-maps",
        "react-native-geolocation-service",
        "Socket.IO (for real-time status)",
        "Payment Integration",
        "React Native Paper",
      ],
      image:
        "https://images.unsplash.com/photo-1629538745524-5b748fddac9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhciUyMHJvYWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Healthcare & Appointment App",
      description:
        "Developed a healthcare mobile app that allows patients to book appointments, consult doctors online, access prescriptions, and track medical history. The app supports live video consultations, doctor availability scheduling, and secure medical data storage. Designed with a focus on accessibility, performance, and HIPAA-aligned data practices.",
      techStack: [
        "React Native (CLI)",
        "React Navigation",
        "Redux",
        "Axios",
        "Firebase (Auth & Firestore)",
        "Agora(for video consultations)",
        "react-native-pdf (for prescriptions)",
        "React Native Calendars",
        "React Native Paper",
      ],
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-bottom");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = containerRef.current?.querySelectorAll(".project-card");
    if (cards) {
      cards.forEach((card) => {
        observer.observe(card);
        card.classList.add("opacity-0");
      });
    }

    return () => {
      if (cards) {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlighting some of my recent work and technical achievements
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-morphism rounded-xl overflow-hidden hover-lift transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-2 py-1 rounded-full neo-blur"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
