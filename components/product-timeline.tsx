"use client"

import { motion } from "framer-motion"
import { Wallet, Coins, ShieldCheck, BarChart3, Users, DollarSign, Clock } from "lucide-react"
import type React from "react" // Import React

interface TimelineItemProps {
  number: string
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
}

const TimelineItem = ({ number, icon, title, subtitle, description }: TimelineItemProps) => {
  return (
    <motion.div
      className="relative flex gap-8 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Number */}
      <div className="absolute -left-12 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60">
        {number}
      </div>

      {/* Content */}
      <div className="flex-1 relative">
        <div className="border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20">
          <div className="grid md:grid-cols-[240px,1fr] h-full">
            {/* Icon Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center text-white">{icon}</div>
            </div>

            {/* Text Section */}
            <div className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-1">{title}</h3>
              <p className="text-white/60 text-sm mb-4">{subtitle}</p>
              <p className="text-white/80 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductTimeline() {
  const product1Steps = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Send SOL to your BlockNinja wallet",
      subtitle: "Quick & Easy Setup",
      description:
        "Or charge it conveniently via your credit/debit card. Get started in seconds with our streamlined onboarding process.",
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Buy a token",
      subtitle: "Simplified Trading",
      description:
        "Simply enter a token's contract address or name, specify how much SOL you want to invest. Just with a click of 2 buttons.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Have peace of mind",
      subtitle: "Advanced Security",
      description:
        "Knowing our Anti-Rug feature protects your investment from rug-pulls. Trade with confidence using our innovative security measures.",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Sell the token",
      subtitle: "Lightning Fast Execution",
      description:
        "Our innovative sell function gives you full control to sell at lightning speed and lets you decide how much % you'd like to sell.",
    },
  ]

  const product2Steps = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Choose a profitable whale wallet",
      subtitle: "Smart Portfolio Selection",
      description:
        "The Blockchain is 100% transparent. We can easily find Elon Musk's or Mr. Beast's private Wallets. And even better, BlockNinja delivers you every week the most profitable wallets on Solana.",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Set your investment amount",
      subtitle: "Customizable Trading",
      description:
        "Decide the amount you want each trade to copy trade in your wallet. Set your preferred investment amount for each copied trade, giving you full control over your risk management.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Automatic selling",
      subtitle: "Smart Exit Strategy",
      description:
        "Sell token automatically at the exact time the whale sells. Stop getting dumped on by fake influencers. Sell automatically when the whales sell.",
    },
  ]

  return (
    <div className="space-y-48">
      {/* Product 1 */}
      <section className="relative">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium mb-6">PRODUCT 1</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Solana's fastest Token Buy & Sell feature</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience lightning-fast trading with our innovative platform designed specifically for Solana.
          </p>
        </motion.div>

        <div className="relative pl-12">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {product1Steps.map((step, index) => (
              <TimelineItem
                key={index}
                number={(index + 1).toString()}
                icon={step.icon}
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product 2 */}
      <section className="relative">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium mb-6">PRODUCT 2</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Automatically Copy Trade the Most Profitable Wallets</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Follow and automatically replicate the trades of successful investors on Solana.
          </p>
        </motion.div>

        <div className="relative pl-12">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {product2Steps.map((step, index) => (
              <TimelineItem
                key={index}
                number={(index + 1).toString()}
                icon={step.icon}
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

