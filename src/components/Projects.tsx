import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Chimege Protocol",
    description:
      "Meeting protocol system enhancing organizational efficiency. Designed to streamline meeting documentation and action item tracking.",
    tags: ["AI Product", "Meeting Intelligence"],
    link: "https://protocol.chimege.com",
  },
  {
    title: "Chimege Sub",
    description:
      "Video subtitle tool improving content accessibility. Automates the process of generating accurate subtitles for video content.",
    tags: ["Video & audio processing", "Accessibility", "AI"],
    link: "https://sub.chimege.com",
  },
  {
    title: "Chimege Writer",
    description:
      "Audio-to-text transcriber with high accuracy. Converts spoken language into written text efficiently.",
    tags: ["STT", "Transcription", "Audio Processing"],
    link: "https://writer.chimege.com",
  },
  {
    title: "Chimege Reader",
    description:
      "Text-to-speech synthesizer for natural voice output. Generates lifelike speech from text input.",
    tags: ["TTS", "Speech Synthesis", "AI"],
    link: "https://reader.chimege.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Projects & Expertise
        </h2>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Showcasing my work in speech technology and software engineering.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-primary sm:text-2xl">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 bg-white/5 p-3 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/20 sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <span className="relative z-10">View Project</span>
              </a> */}
            </div>

            <div className="absolute -bottom-1 -right-1 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
