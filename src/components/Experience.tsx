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
      "Developed and delivered systems that consistently met stringent business requirements and performance standards.",
    ],
    stack: ["Microservices", "Containerization", "Backend"],
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
