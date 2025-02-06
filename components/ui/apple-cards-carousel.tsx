import type React from "react"

export const Card = ({ card, index }: { card: any; index: number }) => {
  return (
    <div key={index} className="w-64 h-auto bg-gray-800 rounded-lg p-4 m-4">
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </div>
  )
}

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex overflow-x-auto snap-x snap-mandatory">{children}</div>
}

