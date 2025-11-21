import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>
          <div className="border-muted relative border-l pb-12 pl-8">
            <div className="bg-primary absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full" />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">
                National University of Mongolia
              </h3>
              <span className="text-muted-foreground text-sm">
                2018.09 - 2022.06
              </span>
            </div>
            <div className="text-primary mt-2 text-lg font-medium">
              Bachelor
            </div>
            <p className="text-muted-foreground mt-2">
              Majored in Computer Science.
            </p>
          </div>
        </motion.div>

        {/* Awards Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Awards
          </h2>
          <div className="border-muted relative border-l pb-12 pl-8">
            <div className="bg-primary absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full" />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">
                Haruul Zangi U18 Competition
              </h3>
              <span className="text-muted-foreground text-sm">2017 - 2018</span>
            </div>
            <div className="text-primary mt-2 text-lg font-medium">
              Cyber Security
            </div>
            <p className="text-muted-foreground mt-2">
              Was placed 7th place in 2 consecutive years.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
