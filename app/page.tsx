import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Wallet, Coins, ShieldCheck, BarChart3 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import GlobeSection from "@/components/globe-section"
import AnimatedBackground from "@/components/animated-background"
import { ProductTimeline } from "@/components/product-timeline"

const steps = [
  {
    icon: <Wallet className="w-8 h-8" />,
    number: "01",
    title: "Send SOL to your BlockNinja wallet",
    description: "Or charge it conveniently via your credit/debit card.",
  },
  {
    icon: <Coins className="w-8 h-8" />,
    number: "02",
    title: "Buy a token",
    description:
      "Simply enter a token's contract address or name, specify how much SOL you want to invest. Just with a click of 2 buttons.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    number: "03",
    title: "Have peace of mind",
    description: "Knowing our Anti-Rug feature protects your investment from rug-pulls.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    number: "04",
    title: "Sell the token",
    description:
      "Our innovative sell function gives you full control to sell at lightning speed and lets you decide how much % you'd like to sell.",
  },
]

const FeatureCard = ({ icon, number, title, description }) => {
  return (
    <motion.div
      className="relative border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-white/5 group transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
          {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
        </div>
        <h3 className="text-2xl font-thin tracking-wider mb-4">
          <span className="mr-2">{number}.</span>
          {title}
        </h3>
        <p className="text-gray-400 font-thin tracking-wide">{description}</p>
      </div>
    </motion.div>
  )
}

const faqs = [
  {
    question: "What is BlockNinja?",
    answer:
      "BlockNinja is a high-speed trading platform built specifically for Solana. It combines lightning-fast execution with innovative security features to provide traders with the best possible trading experience.",
  },
  {
    question: "Why should I use BlockNinja?",
    answer:
      "BlockNinja offers unparalleled speed and security in the Solana ecosystem. Our platform features instant trade execution and our innovative Anti-Rug feature that protects your trades. Plus, our intuitive interface makes trading accessible to both beginners and experienced traders.",
  },
  {
    question: "How do I start using BlockNinja?",
    answer:
      "Getting started with BlockNinja is simple. Just connect your Solana wallet, deposit your funds, and you can start trading immediately. Our platform is designed to get you trading in less than 30 seconds.",
  },
  {
    question: "Is BlockNinja secure?",
    answer:
      "Yes, security is our top priority. We employ bank-grade encryption, secure wallet integration, and our proprietary Anti-Rug technology to ensure your trades and assets are protected at all times.",
  },
  {
    question: "Has BlockNinja ever been hacked?",
    answer:
      "No, BlockNinja has never been hacked. We maintain the highest security standards and regularly undergo security audits to ensure the safety of our platform and our users' assets.",
  },
  {
    question: "How do I trade tokens on BlockNinja?",
    answer:
      "Trading on BlockNinja is straightforward. Once your wallet is connected, simply select the token you want to trade, enter the amount, and execute your trade. Our platform handles all the complexity in the background while providing you with a simple, intuitive interface.",
  },
  {
    question: "What are the fees for trading on BlockNinja?",
    answer:
      "BlockNinja charges minimal fees to ensure the best possible trading experience. Our fee structure is transparent and competitive within the Solana ecosystem. Exact fees are displayed before you confirm any trade.",
  },
  {
    question: "I need help - who can I speak to?",
    answer:
      "Our support team is available 24/7 to assist you. You can reach us through our Discord community, Telegram channel (@blockninjabotsupport), or email support. We typically respond within minutes to ensure you get the help you need quickly.",
  },
  {
    question: "What is the minimum balance required to start copy trading?",
    answer: "To start copy trading, users must maintain a minimum balance of 1 SOL in their wallet.",
  },
  {
    question: "What are the fees for copy trading?",
    answer:
      "Copy trading follows the same fee structure as regular trades on BlockNinja:\n\n• A flat fee of $4 per trade.\n\n• An additional 1% of the trade volume",
  },
  {
    question: "What is the speed of copy trades in BlockNinja?",
    answer:
      "BlockNinja offers one of the fastest transaction-tracking systems in the industry, monitoring tracked wallet transactions in near real-time.\n\nOnce a swap trade is detected, BlockNinja executes the same trade in your wallet based on your copy trading settings. The speed of this trade depends on gas fee settings and network conditions",
  },
]

const SupportSection = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium mb-6">FAQ's</div>
      <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
        ANY QUESTION?
        <br />
        LOOK HERE
      </h2>
      <p className="text-gray-400 text-xl mb-8 max-w-2xl">
        We're here to make your experience smooth and easy. Browse the FAQs for helpful information.
      </p>
      <p className="text-gray-400 mb-6">Still can't find an answer? Contact our support:</p>
      <a
        href="https://t.me/blockninjabotsupport"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors group"
      >
        <div className="w-8 h-8 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5211655825_create_a_subtle_drawing_with_fine_white_lines_on__4134a3d6-f42b-4813-9c2d-9d22e3451eab_0-Photoroom-Qwrih4mSjahpn6cXENr2cAVaMZcnG1.png"
            alt="BlockNinja warrior"
            fill
            className="object-contain invert"
          />
        </div>
        <span className="font-bold">BLOCK NINJA</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  )
}

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-8">
        <SupportSection />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={`item-${index}`}
                className="border-none rounded-2xl overflow-hidden bg-[#111] data-[state=open]:bg-[#111]"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline [&[data-state=open]>div]:text-white">
                  <div className="text-left text-gray-200 group-hover:text-white transition-colors">{faq.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <header className="container mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3373.PNG-V33XUl25brud8ZhE12JpA9LVTuvo9L.png"
            alt="BlockNinja Logo"
            width={300}
            height={300}
            className="w-auto h-36"
            priority
          />
        </div>
      </header>

      <main>
        <section className="container mx-auto mt-16 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-thin leading-[1.1] font-['Times_New_Roman'] tracking-[0.15em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                The Fastest and Simplest
                <br />
                Way to Trade
                <br />
                on Solana
              </motion.h1>
              <motion.h2
                className="text-lg sm:text-xl md:text-2xl font-thin leading-tight font-['Times_New_Roman'] tracking-wide text-gray-300 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Start Trading In Less Than 30 Seconds
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="https://t.me/BlockNinjaBot" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-black text-white border-2 border-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
                  >
                    START TRADING
                  </Button>
                </a>
              </motion.div>
            </div>

            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5211655825_create_a_subtle_drawing_with_fine_white_lines_on__4134a3d6-f42b-4813-9c2d-9d22e3451eab_0-Photoroom-Qwrih4mSjahpn6cXENr2cAVaMZcnG1.png"
                  alt="Dynamic sketch-like illustration of a ninja warrior in action stance with dual katana swords"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="w-full">
            <video autoPlay loop muted playsInline className="w-full object-contain bg-black">
              <source
                src="https://synifkbb6rlxwopn.public.blob.vercel-storage.com/New%20video-vuFyBX3sZ7bCjP9r8D9FgIUIpeuv61.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <motion.p
              className="text-3xl sm:text-4xl md:text-5xl font-thin leading-tight font-['Times_New_Roman'] tracking-normal text-white whitespace-pre-line text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {"BlockNinja combines the two most\npowerful trading products on Solana."}
            </motion.p>
          </div>
        </section>

        <GlobeSection />

        <section className="container mx-auto px-4 py-24">
          <ProductTimeline />
        </section>

        <section className="bg-black py-24">
          <FAQSection />
        </section>

        <footer className="bg-black py-24 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-16">
              <motion.div
                className="relative w-48 h-48"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5211655825_create_a_subtle_drawing_with_fine_white_lines_on__4134a3d6-f42b-4813-9c2d-9d22e3451eab_0-Photoroom-Qwrih4mSjahpn6cXENr2cAVaMZcnG1.png"
                  alt="BlockNinja warrior"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h2 className="text-[10rem] font-bold tracking-tight text-white leading-none">BLOCK NINJA</h2>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

