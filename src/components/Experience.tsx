import { motion } from "framer-motion";

const experience = [
  {
    company: "Chimege Systems",
    role: "Senior Software Engineer",
    period: "2024.7 - PRESENT",
    description: "Leading product development and team mentorship.",
    details: [
      "Product Development: Designed and launched four core AI products: Chimege Protocol (meeting protocol system), Chimege Sub (video subtitle tool), Chimege Writer (audio-to-text transcriber), and Chimege Reader (text-to-speech synthesizer).",
      "Team Leadership: Managed and mentored a 5-member team, providing technical guidance and fostering a collaborative work environment.",
      "Customer Support: Addressed client technical issues and gathered feedback to drive product improvements, ensuring high satisfaction.",
    ],
    stack: ["Golang", "Vue.js", "Nuxt", "AI/ML Products"],
  },
  {
    company: "Chimege Systems",
    role: "Software Engineer",
    period: "2023.08 - 2024.7",
    description: "Developed data preparation tools and AI meeting systems.",
    details: [
      "Built and maintained multiple data preprocessing tools to automate data cleaning, validation, and transformation tasks.",
      "Designed database structure for scalable applications.",
      "Created machine learning model pipeline with pub/sub architecture using Apache Kafka.",
      "Implemented NAS (Network Attached Storage) for backing up files.",
    ],
    stack: ["Golang", "Apache Kafka", "Database Design", "NAS"],
  },
  {
    company: "Tavan Bogd Finance",
    role: "Back-end developer",
    period: "2022.06 - 2023.08",
    description:
      "Developed highly available, decoupled, scalable web applications based on containerized microservices structure.",
    details: [
      "Developed a system that meets standard of business requirements.",
    ],
    stack: ["Microservices", "Containerization", "Backend"],
  },
  {
    company: "Mono Solution",
    role: "Back-end developer",
    period: "2021.10 - 2022.06",
    description:
      "Developed and maintained medical and business management systems.",
    details: [
      "Developed and maintained a medical system that implemented FHIR open source medical data standard.",
      "Designed database architecture of business management systems.",
    ],
    stack: ["FHIR", "Database Architecture", "Backend"],
  },
];

export default function Experience() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Experience
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          My professional journey and technical expertise.
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="border-muted relative border-l pb-12 pl-8 last:pb-0"
          >
            <div className="bg-primary absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <span className="text-muted-foreground text-sm">
                {job.period}
              </span>
            </div>
            <div className="text-primary text-lg font-medium">
              {job.company}
            </div>
            <p className="text-muted-foreground mt-2">{job.description}</p>
            <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-4">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-secondary-foreground rounded-full bg-white/10 px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
