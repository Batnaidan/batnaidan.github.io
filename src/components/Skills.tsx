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
        className="mb-16 text-center"
      >
        <h2 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Skills & Languages
        </h2>
        <p className="text-muted-foreground mt-4 text-lg sm:text-xl">
          Technical proficiency and language skills.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative">
              <h3 className="text-primary mb-6 text-xl font-semibold sm:text-2xl">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                    className="text-muted-foreground relative pl-4 text-sm before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/40 transition-colors group-hover:text-foreground/90 sm:text-base"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
