"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Jake Thomson",
      // position: "Owner of Horizon RP",
      content:
        "Shah completely overhauled our server's job system, and the results speak for themselves — players are more engaged, bugs are down to zero, and performance is buttery smooth. Highly recommended!",
      rating: 5,
      // image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Alyssa Moore",
      // position: "Community Manager at Legacy State RP",
      content:
        "From custom heist scripts to unique player interaction mechanics, Shah brought our creative ideas to life. They’re fast, reliable, and super easy to work with.",
      rating: 5,
      // image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Carlos Mendes",
      // position: "Lead Dev at Drift Syndicate",
      content:
        "Shah delivered a flawless drift points system that syncs with our leaderboard in real time. Players love it, and it’s helped grow our server’s active user base by 30%.",
      rating: 4.5,
      // image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Tina Lawson",
      // position: "Admin at Paleto Valley RP",
      content:
        "We needed a custom MDT, court system, and jail mechanics — Shah nailed all three. They even added features we hadn’t thought of. Truly top-tier work!",
      rating: 5,
      // image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Reece Nakamura",
      // position: "Founder of Synth RP",
      content:
        "Shah built our entire inventory and crafting system from scratch using ox_inventory. It’s sleek, efficient, and players haven’t stopped praising it since day one.",
      rating: 4.8,
      // image: "/placeholder.svg?height=100&width=100",
    },
  ]  

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Satisfaction</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          {/* <p className="text-sm text-muted-foreground">{testimonial.position}</p> */}
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
