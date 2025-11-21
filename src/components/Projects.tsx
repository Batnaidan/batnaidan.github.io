import { motion } from "framer-motion";

const projects = [
  {
    title: "Chimege Protocol",
    description:
      "Meeting protocol system enhancing organizational efficiency. Designed to streamline meeting documentation and action item tracking.",
    tags: ["AI Product", "Meeting Intelligence"],
  },
  {
    title: "Chimege Sub",
    description:
      "Video subtitle tool improving content accessibility. Automates the process of generating accurate subtitles for video content.",
    tags: ["Video Processing", "Accessibility", "AI"],
  },
  {
    title: "Chimege Writer",
    description:
      "Audio-to-text transcriber with high accuracy. Converts spoken language into written text efficiently.",
    tags: ["STT", "Transcription", "Audio Processing"],
  },
  {
    title: "Chimege Reader",
    description:
      "Text-to-speech synthesizer for natural voice output. Generates lifelike speech from text input.",
    tags: ["TTS", "Speech Synthesis", "AI"],
  },
];

export default function Projects() {
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
          Projects & Expertise
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Showcasing my work in speech technology and software engineering.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
          >
            <div className="mb-4">
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary rounded-md px-2 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
