"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

interface SurvivorAvatarProps {
  name: string
  src?: string
  className?: string
}

export default function SurvivorAvatar({ name, src, className = "w-20 h-20" }: SurvivorAvatarProps) {
  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="bg-slate-700 text-white">
        {src ? initials : <User className="h-8 w-8" />}
      </AvatarFallback>
    </Avatar>
  )
}