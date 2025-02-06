"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, DollarSign, Clock } from "lucide-react"

const steps = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "01",
    title: "Choose a profitable whale wallet",
    description:
      "The Blockchain is 100% transparent. We can easily find Elon Musk's or Mr. Beast's private Wallets. And even better, BlockNinja delivers you every week the most profitable wallets on Solana.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    number: "02",
    title: "Decide the amount you want each trade to copy trade in your wallet",
    description:
      "Set your preferred investment amount for each copied trade, giving you full control over your risk management.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "03",
    title: "Sell token automatically at the exact time the whale sells",
    description: "Stop getting dumped on by fake influencers. Sell automatically when the whales sell.",
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

export default function CopyTradeSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-thin tracking-wider text-gray-400 mb-2">PRODUCT 2</p>
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-wide mb-2 relative z-10">
              Automatically Copy Trade the Most Profitable Wallets on Solana
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600/50 blur-sm" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-blue-500" />
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <FeatureCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

