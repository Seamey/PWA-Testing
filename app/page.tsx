"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Heart, Gift, Calendar, ArrowRight, Camera, Clock } from "lucide-react"
import {
  FloatingHearts,
  TextReveal,
  FadeIn,
  SlideUp,
  GradientButton,
  ParallaxImage,
  Confetti,
  Timeline,
  TimelineItem,
  FlipCard,
  ParticleBackground,
  CountdownTimer,
  MusicPlayer,
  PhotoCarousel,
  AnimatedIcon,
  GlowingText,
} from "@/components/eldora-ui"
import CarouselImage from '../images/memories.jpeg'
import GetToKnow from '../images/gettoknow.jpg'
import FirstDate from '../images/firstdate.jpg'
import OneMonth from '../images/1 month later.jpg'
import ThreeMonth from '../images/friendtalkabout.jpg'
import FiveMonth from '../images/5 month.jpg'
import Cute from '../images/cute.jpg'
import SevenMonth from '../images/7 month of lvo.jpg'
import value1 from '../images/coffe date.jpg'
import value2 from '../images/memories.jpeg'
import rightHand from '../images/right heart.jpg'
import leftHand from '../images/left heart.jpg'
import { it } from "node:test"
import HeartImage from '../images/heart.png'

export default function AnniversaryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const heroRef = useRef(null)

  // Trigger page load animations
  useEffect(() => {
    setIsLoaded(true)

    // Set up intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.replace("section-", ""))
            setActiveSection(id)
          }
        })
      },
      { threshold: 0.3 },
    )

    // Observe all sections
    document.querySelectorAll('section[id^="section-"]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Calculate anniversary date (7 months from a starting date)
  const startDate = new Date(2025, 8, 14) // Example: July 15, 2023
  const anniversaryDate = new Date(startDate)
  anniversaryDate.setMonth(anniversaryDate.getMonth() + 7)

  // Photos for carousel
  const photos = [
    { src: Cute.src, alt: "Love You" }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/20 dark:to-background overflow-hidden">
      {/* Particle Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBackground color="#f43f5e" particleCount={50} />
      </div>

      {/* Floating Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <FloatingHearts count={15} />
      </div>      
       

      {/* Confetti Animation */}
      {showConfetti && <Confetti duration={5000} />}

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section id="section-0" ref={heroRef} className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <FadeIn delay={0.2}>
                <AnimatedIcon icon={Heart} className="h-12 w-12 text-rose-600" fill="currentColor" />
              </FadeIn>

              <GlowingText
                text="Happy 7 Months Anniversary"
                className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-rose-600 dark:text-rose-400 max-w-3xl"
                glowColor="rgba(244, 63, 94, 0.5)"
              />

              <FadeIn delay={0.8}>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Celebrating 7 beautiful months of love, laughter, and unforgettable moments together.
                </p>
              </FadeIn>

              <SlideUp delay={1}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <GradientButton from="rose-400" to="rose-500" className="group relative overflow-hidden">
                    <span className="relative z-10 flex items-center text-black">
                      See Our Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </GradientButton>
                </div>
              </SlideUp>

              <FadeIn delay={1.2}>
                <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-rose-500" />
                    <h3 className="text-lg font-medium">Celebrating Our Anniversary</h3>
                  </div>
                  <CountdownTimer targetDate={anniversaryDate} />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Music Player */}
        <div className="fixed bottom-4 right-4 z-50">
          <MusicPlayer
            songTitle="Our Song"
            artistName="Love Playlist"
            coverImage="https://cdn-icons-png.flaticon.com/512/3094/3094063.png"
          />
        </div>

        {/* Main Image */}
        <section id="section-1" className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <FadeIn visible={activeSection >= 1}>
              <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl shadow-xl">
                <ParallaxImage
                  src={CarouselImage}
                  width={1200}
                  height={600}
                  alt="Us together"
                  className="w-full object-cover"
                  strength={30}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-medium">7 months of beautiful memories</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Our Journey Timeline Section */}
        <section id="section-2" className="w-full py-12 md:py-24">
          <div className="container ">
            <FadeIn visible={activeSection >= 2}>
              <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">7 Months of Us</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Every moment with you has been a blessing. Here's a look at our journey so far.
                </p>
              </div>
            </FadeIn>

            <Timeline visible={activeSection >= 2}>
              <TimelineItem
                date="Month 1"
                title="The Beginning"
                description="Where our story began. Our first date was magical and I knew right away there was something special between us."
                icon={<Heart className="h-5 w-5" />}
                image={GetToKnow.src}
              />
              <TimelineItem
                date="Month 2"
                title="Getting to Know You"
                description="Learning all your little quirks and habits. Every conversation brought us closer together."
                icon={<Calendar className="h-5 w-5" />}
                image={OneMonth.src}
              />
              <TimelineItem
                date="Month 3"
                title="First Trip Together"
                description="That weekend getaway where we stayed up all night talking and watching the stars."
                icon={<Camera className="h-5 w-5" />}
                image={FirstDate.src}
              />
              <TimelineItem
                date="Month 5"
                title="Meeting Friends"
                description="When you charmed all my friends and they couldn't stop talking about how perfect you are."
                icon={<Heart className="h-5 w-5" />}
                image={ThreeMonth.src}
              />
               <TimelineItem
                date="Month 6"
                title="Loving You"
                description="Every day I fall more in love with you. You're my best friend and my soulmate."
                icon={<Heart className="h-5 w-5" />}
                image={FiveMonth.src}
              />
              <TimelineItem
                date="Month 7"
                title="Today"
                description="Celebrating our love and looking forward to many more months and years of us."
                icon={<Gift className="h-5 w-5" />}
                image={SevenMonth.src}
              />
            </Timeline>
          </div>
        </section>

        {/* Reasons Section */}
        <section id="section-3" className="w-full py-12 md:py-24 bg-rose-50 dark:bg-rose-950/10">
          <div className="container px-4 md:px-6">
            <FadeIn visible={activeSection >= 3}>
              <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  7 Reasons Why
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">7 Reasons Why I Love You</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  There are countless reasons, but here are just seven of them.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Your smile brightens my darkest days", icon: Heart },
                { text: "Your kindness knows no bounds", icon: Heart },
                { text: "You understand me like no one else", icon: Heart },
                { text: "You make me laugh when I need it most", icon: Heart },
                { text: "Your passion inspires me daily", icon: Heart },
                { text: "You support my dreams unconditionally", icon: Heart },
                { text: "With you, I feel like I'm home", icon: Heart },
              ].map((reason, index) => (
                <SlideUp key={index} delay={0.1 * index} visible={activeSection >= 3}>
                  <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/30 flex items-start gap-4 transition-all duration-500 hover:shadow-lg hover:border-rose-300 dark:hover:border-rose-700">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/30">
                      <AnimatedIcon
                        icon={reason.icon}
                        className="h-5 w-5 text-rose-600 dark:text-rose-400"
                        fill="currentColor"
                      />
                    </div>
                    <p className="text-muted-foreground">{reason.text}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery with 3D Cards */}
        <section id="section-4" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <FadeIn visible={activeSection >= 4}>
              <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <div className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <Camera className="h-4 w-4" />
                  <span>Our Memories</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Captured Moments</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  A glimpse of the beautiful memories we've created together.
                </p>
              </div>
            </FadeIn>

            <div className="mb-12">
              <PhotoCarousel photos={photos} visible={activeSection >= 4} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-3xl items-center">
                {[1, 2,3].map((item) => (
                  <FadeIn key={item} delay={0.1 * item} visible={activeSection >= 4}>
                    <FlipCard
                      front={
                        <div className="h-full w-full flex items-center justify-center  dark:bg-rose-900/30 rounded-lg p-4">
                          <Image
                            src={item === 2 ? HeartImage.src : item === 1 ? leftHand.src : rightHand.src}
                            width={600}
                            height={400}
                            alt={`Memory ${item}`}
                            className="rounded-lg object-cover"
                          />
                        </div>
                      }
                      back={
                        <div className="h-full w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-lg p-6 text-center">
                          <h3 className="text-xl font-bold mb-2">Memory {item}</h3>
                        </div>
                      }
                    />
                  </FadeIn>
                ))}
              </div>
          </div>
        </section>

        {/* Special Message */}
        <section id="section-5" className="w-full py-12 md:py-24 bg-rose-50 dark:bg-rose-950/10">
          <div className="container px-4 md:px-6">
            <FadeIn visible={activeSection >= 5}>
              <div className="mx-auto max-w-3xl bg-white dark:bg-gray-950 p-8 md:p-12 rounded-xl shadow-lg border border-rose-100 dark:border-rose-900/30">
                <div className="flex justify-center mb-6">
                  <AnimatedIcon
                    icon={Heart}
                    className="h-12 w-12 text-rose-600 dark:text-rose-400"
                    fill="currentColor"
                    animation="pulse"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">A Special Message For You</h2>
                <div className="prose dark:prose-invert max-w-none text-center">
                  <TextReveal
                    text="These past 7 months have been the most beautiful chapter of my life. Every moment with you feels like a gift, and I cherish each day we spend together. Thank you for being you, for your love, your patience, and for making my life infinitely better. Here's to many more months and years of us."
                    className="text-lg md:text-xl italic"
                    delay={0.5}
                    visible={activeSection >= 5}
                  />
                  <SlideUp delay={1} visible={activeSection >= 5}>
                    <p className="text-right font-medium mt-6">With all my love,</p>
                    <p className="text-right font-bold">Mey Meow Meow❤️</p>
                  </SlideUp>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Call to Action */}
        <section id="section-6" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <FadeIn visible={activeSection >= 6}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <Gift className="h-4 w-4" />
                  <span>Special Surprise</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">I Have a Surprise For You</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Click the button below to reveal your special anniversary surprise.
                </p>
                <SlideUp delay={0.5} visible={activeSection >= 6}>
                  <GradientButton
                    from="rose-400"
                    to="rose-600"
                    size="lg"
                    className="mt-6 relative overflow-hidden group"
                    onClick={() => setShowConfetti(true)}
                  >
                    <span className="relative z-10 text-black">Reveal Your Surprise</span>
                    <span className="absolute -inset-full top-0 block w-1/2 h-full z-5 transform -skew-x-12 bg-white/20 opacity-40 animate-shine"></span>
                  </GradientButton>
                </SlideUp>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500" fill="currentColor" />
              <span className="text-lg font-medium">7 Months of Love</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Created with love for our 7-month anniversary on {anniversaryDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

