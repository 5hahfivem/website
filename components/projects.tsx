"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "SandboxRP",
      shortDescription: "A high-performance roleplay server with a custom economy and job system.",
      description: "Lead Developer",
      image: "https://i1.sndcdn.com/avatars-kKJzXHHl4zIZWgAv-iJEZTw-t1080x1080.jpg",
      tags: ["NUI", "Lua", "JavaScript", "TypeScript", "MySQL", "MongoDB"],
      features: [
        "Fully custom jobs and progression system",
        "Optimized inventory and crafting integration",
        "In-depth vehicle and property management",
        "Performance-tuned tick-based systems",
        "Component Based Framework",
      ],
      demoLink: "https://discord.gg/sandboxrp",
      githubLink: "https://github.com/badcodesgg/sandbox-fivem",
    //   fullDescription:
    //     "SandboxRP is a feature-rich roleplay server. My work focused on designing optimized server systems, custom NUI interfaces, and scalable job/resource architecture. Performance and player immersion were core priorities, including tick reduction techniques and modular exports for extensibility.",
    },
    {
      id: 2,
      title: "NewEnergyRP",
      shortDescription: "A serious RP server with average 200 players.",
      description:
        "Worked on advanced gameplay mechanics and improved stability.",
      image: "https://pbs.twimg.com/profile_images/1696958921469050881/k-COWGr2_400x400.jpg",
      tags: ["QBCore", "Lua", "ox_inventory", "MySQL"],
      features: [],
      demoLink: "https://discord.gg/newenergyrp",
      // githubLink: "#",
      // fullDescription:
      //   "NewEnergyRP emphasized immersive systems and stable framework extension. I developed multiple interactive jobs, refined state tracking, and built reliable systems for server-side interactions, ensuring performance without compromising sync or realism.",
    },
    {
      id: 3,
      title: "Mythic Framework Contribution",
      shortDescription: "Open source contributions to the modular Mythic framework.",
      description:
        "Contributed to core utilities, export structuring, and documentation for Mythic.",
      image: "https://www.mythicframework.com/_next/image?url=%2Fimages%2Fmythic_logo.png&w=384&q=75",
      tags: ["Lua", "Mythic Framework", "Open Source"],
      features: [
        "Utility library extensions",
        "Improved state handling",
        "Resource modularization patterns",
        "Export normalization",
        "Internal documentation updates",
      ],
      demoLink: "https://www.mythicframework.com",
      githubLink: "https://github.com/Mythic-Framework/mythic-framework",
      // fullDescription:
      //   "Mythic is a modular framework designed for performance and extensibility. I submitted improvements to its core utilities, including better export patterns and modular design. These changes aimed to make the framework easier to extend and debug for larger projects.",
    },
    {
      id: 4,
      title: "QBox Framework Contribution",
      shortDescription: "Enhancements and fixes to the lightweight QBox framework.",
      description:
        "QBox Framework Contributer",
      image: "https://www.qbox.re/static/screenshots/qbox-logo2.png",
      tags: ["Lua", "QBox", "Open Source"],
      features: [
        "Contributed issue fixes and cleanup",
        "Enhanced core modularity",
      ],
      demoLink: "https://discord.gg/qbox",
      githubLink: "https://github.com/qbox-project",
      // fullDescription:
      //   "QBox is a minimal framework built for simplicity and performance. These enhancements made it easier for other devs to adopt and extend QBox in production environments.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${expandedProject === project.id ? "ring-2 ring-primary" : ""
                  }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2 flex-wrap">
                            {project.githubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.githubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            )}
                            {project.demoLink && (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.demoLink, "_blank")
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Click here for more
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${expandedProject === project.id ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4 flex-wrap">
                {selectedProject.githubLink && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.demoLink && (
                  <Button asChild>
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Click here for more
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
