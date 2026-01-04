import { motion } from "framer-motion";
const experience = [
  {
    company: "Chimege Systems",
    role: "Senior Software Engineer",
    period: "2024.7 - PRESENT",
    description:
      "Led product development and team mentorship, driving the successful launch of four core AI products.",
    details: [
      "Spearheaded the design and launch of four core AI products: Chimege Protocol (meeting protocol system), Chimege Sub (video subtitle tool), Chimege Writer (audio-to-text transcriber), and Chimege Reader (text-to-speech synthesizer).",
      "Managed and mentored a 5-member engineering team, providing technical guidance, fostering collaboration, and enhancing team productivity.",
      "Resolved client technical issues and leveraged feedback to implement product improvements, significantly boosting customer satisfaction.",
    ],
    stack: ["Golang", "Vue.js", "Nuxt", "AI/ML Products", "Apache Kafka"],
  },
  {
    company: "Chimege Systems",
    role: "Software Engineer",
    period: "2023.08 - 2024.7",
    description:
      "Developed robust data preparation tools and integral components for AI meeting systems, enhancing data pipeline efficiency.",
    details: [
      "Built and maintained multiple data preprocessing tools, automating data cleaning, validation, and transformation tasks to improve data quality and efficiency.",
      "Designed scalable database structures to support high-volume applications and ensure data integrity.",
      "Engineered a machine learning model pipeline utilizing Apache Kafka for pub/sub architecture, enabling real-time data processing.",
      "Implemented Network Attached Storage (NAS) solutions for secure and efficient file backup and retrieval.",
    ],
    stack: ["Golang", "Apache Kafka", "Database Design", "NAS"],
  },
  {
    company: "Tavan Bogd Finance",
    role: "Back-end developer",
    period: "2022.06 - 2023.08",
    description:
      "Contributed to the development of highly available, decoupled, and scalable web applications within a containerized microservices architecture.",
    details: [
      "Ensured quality and reliability by developing services based on specific business requirements, managing testing environment deployment, monitoring performance, and performing thorough code reviews.",
      "Designed architecture of Trust/Deposit (Savings) calculation and accounting system.",
      'Designed and implemented the back-end services for "PayOn," a Buy Now, Pay Later (BNPL) platform enabling 0% interest product purchases.',
    ],
    stack: ["Microservices", "Containerization", "Node.js", "Backend"],
  },
  {
    company: "Mono Solution",
    role: "Back-end developer",
    period: "2021.10 - 2022.06",
    description:
      "Developed and maintained critical medical and business management systems, ensuring high performance and data integrity.",
    details: [
      "Developed and maintained a medical system adhering to the FHIR open-source medical data standard, improving interoperability and data exchange.",
      "Designed efficient database architectures for business management systems, optimizing data storage and retrieval.",
    ],
    stack: ["FHIR", "Database Architecture", "Backend"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Experience
        </h2>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          My professional journey and technical expertise.
        </p>
      </motion.div>

      <div className="mx-auto max-w-4xl">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="group relative mb-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {job.role}
                  </h3>
                  <div className="mt-1 text-lg font-medium text-primary sm:text-xl">
                    {job.company}
                  </div>
                </div>
                <span className="shrink-0 text-sm font-medium text-muted-foreground sm:text-base">
                  {job.period}
                </span>
              </div>

              <p className="mb-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {job.description}
              </p>

              <ul className="mb-6 space-y-2.5 pl-5 text-muted-foreground">
                {job.details.map((detail, i) => (
                  <li
                    key={i}
                    className="relative text-sm leading-relaxed before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60 sm:text-base"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
