import { motion } from "framer-motion";

const skills = [
  {
    category: "Front-end",
    items: ["Vue", "Nuxt", "React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Back-end",
    items: ["Go", "Python", "Node.js", "Express.js", "Docker", "Prisma"],
  },
  {
    category: "Database",
    items: ["SQL", "MongoDB", "PostgreSql"],
  },
  {
    category: "Languages",
    items: ["English (IELTS Band 7)"],
  },
];

export default function Skills() {
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
          Skills & Languages
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Technical proficiency and language skills.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-primary mb-4 text-xl font-semibold">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
