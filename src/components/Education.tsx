import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text mb-8 text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Education
          </h2>
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative">
              <div className="mb-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  National University of Mongolia
                </h3>
                <span className="text-muted-foreground text-sm font-medium sm:text-base">
                  2018.09 - 2022.06
                </span>
              </div>
              <div className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                Bachelor
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                Majored in Computer Science.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Awards Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text mb-8 text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Awards
          </h2>
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative">
              <div className="mb-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Haruul Zangi U18 Competition
                </h3>
                <span className="text-muted-foreground text-sm font-medium sm:text-base">
                  2017 - 2018
                </span>
              </div>
              <div className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                Cyber Security
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                Was placed 7th place in 2 consecutive years.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
