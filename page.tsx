"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/apple-cards-carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wallet, Coins, ShieldCheck, BarChart3, Users, DollarSign, Clock } from "lucide-react"

export default function Component() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="min-h-screen bg-black text-white">
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
                <Button
                  size="lg"
                  className="bg-black text-white border-2 border-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
                >
                  START TRADING
                </Button>
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

        <section className="container mx-auto mt-48 text-center">
          <motion.p
            className="text-sm font-thin font-['Times_New_Roman'] tracking-wider text-gray-400 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            PRODUCT 2
          </motion.p>
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-thin leading-tight font-['Times_New_Roman'] tracking-wide text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Automatically Copy Trade the Most Profitable Wallets on Solana
          </motion.h3>
          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto mt-16">
            {copyTradeSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-white/5 group transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    {React.cloneElement(step.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h4 className="text-2xl font-thin font-['Times_New_Roman'] tracking-wider mb-4">{step.title}</h4>
                  <p className="text-gray-400 font-thin font-['Times_New_Roman'] tracking-wide">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-48 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <div className="py-24">
            <motion.h3
              className="text-5xl sm:text-6xl md:text-7xl font-thin leading-[1.1] font-['Times_New_Roman'] tracking-[0.15em] uppercase text-center whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {"BlockNinja is your\nunfair advantage when\ntrading on Solana."}
            </motion.h3>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8" />
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-thin leading-relaxed font-['Times_New_Roman'] tracking-wide text-gray-300 mt-4 text-center flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>Not only do we buy & sell at lightning speed,</p>
              <p>but also are your trades secured by our innovative Anti-Rug feature.</p>
            </motion.div>
            <motion.div
              className="mt-[2.5cm]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-black text-white border-2 border-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
              >
                START TRADING
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto mt-48 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <div className="py-24">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-thin leading-tight font-['Times_New_Roman'] tracking-wide text-white mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h3>
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 group hover:bg-white hover:border-black"
                  >
                    <AccordionTrigger className="px-6 py-2 text-xl font-thin font-['Times_New_Roman'] tracking-wide text-white group-hover:text-black hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-2 text-lg font-thin font-['Times_New_Roman'] tracking-wide text-gray-300 group-hover:text-black">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section className="bg-black py-24 mt-10">
          <div className="container mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button
                size="lg"
                className="bg-black text-white border-2 border-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Trading
              </Button>
              <Button
                size="lg"
                className="bg-black text-white border-2 border-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
              >
                Trading Bot Tutorial
              </Button>
              <Button
                size="lg"
                className="bg-black text-white border-2 border-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium uppercase tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
              >
                Telegram Support
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const data = [
  {
    category: "Speed",
    title: "Lightning-fast transactions on Solana",
    src: "/placeholder.svg?height=1000&width=1000",
    content: (
      <p>
        Execute trades instantly with BlockNinja's optimized trading engine, leveraging Solana's high-performance
        blockchain.
      </p>
    ),
  },
  {
    category: "Security",
    title: "Bank-grade security for your assets",
    src: "/placeholder.svg?height=1000&width=1000",
    content: (
      <p>
        Your funds are protected with military-grade encryption and advanced security measures, ensuring peace of mind
        for all your trades.
      </p>
    ),
  },
  {
    category: "Analytics",
    title: "Real-time market insights",
    src: "/placeholder.svg?height=1000&width=1000",
    content: (
      <p>
        Make informed decisions with our advanced analytics, providing up-to-the-second market data and trend analysis.
      </p>
    ),
  },
  {
    category: "Trading",
    title: "Professional trading tools",
    src: "/placeholder.svg?height=1000&width=1000",
    content: (
      <p>
        Access advanced order types and trading features designed for both novice and experienced traders on the Solana
        blockchain.
      </p>
    ),
  },
]

const steps = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "01. Send SOL to your BlockNinja wallet",
    description: "Or charge it conveniently via your credit/debit card.",
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "02. Buy a token",
    description:
      "Simply enter a token's contract address or name, specify how much SOL you want to invest. Just with a click of 2 buttons.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "03. Have peace of mind",
    description: "Knowing our Anti-Rug feature protects your investment from rug-pulls.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "04. Sell the token",
    description:
      "Our innovative sell function gives you full control to sell at lightning speed and lets you decide how much % you'd like to sell.",
  },
]

const copyTradeSteps = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "01. Choose a profitable whale wallet",
    description:
      "The Blockchain is 100% transparent. We can easily find Elon Musk's or Mr. Beast's private Wallets. And even better, BlockNinja delivers you every week the most profitable wallets on Solana.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "02. Decide the amount you want each trade to copy trade in your wallet",
    description:
      "Set your preferred investment amount for each copied trade, giving you full control over your risk management.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "03. Sell token automatically at the exact time the whale sells",
    description: "Stop getting dumped on by fake influencers. Sell automatically when the whales sell.",
  },
]

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
      "Our support team is available 24/7 to assist you. You can reach us through our Discord community, Telegram channel, or email support. We typically respond within minutes to ensure you get the help you need quickly.",
  },
]

