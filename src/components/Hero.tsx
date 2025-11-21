import { motion } from "framer-motion";

import Signature from "~/components/Signature";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 pt-16 md:pt-24">
      <div className="relative flex flex-col items-center text-center">
        <Signature />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Batnaidan Tsend
          </h1> */}
          <p className="text-muted-foreground mt-4 text-xl sm:text-2xl">
            Senior Software Engineer
          </p>
        </motion.div>
      </div>
    </section>
  );
}
