import { motion } from "framer-motion";

import Signature from "~/components/Signature";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center gap-16 pt-8 md:pt-16">
      <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <Signature />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h1 className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Batnaidan Tsend
            </h1>
            <div className="mx-auto h-1 w-48 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
          </div>
          <p className="text-xl text-muted-foreground sm:text-2xl md:text-3xl">
            Senior Software Engineer
          </p>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/80 sm:text-lg md:text-xl">
            Building AI-powered products and scalable systems with Golang,
            Vue.js, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group relative overflow-hidden rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <span className="relative z-10">View Experience</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href="#projects"
            className="group relative overflow-hidden rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
