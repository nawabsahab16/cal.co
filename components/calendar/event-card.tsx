"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

interface EventCardProps {
  title: string;
  time: string;
  type: "traffic" | "topic" | "opinion" | "conversion";
  platforms: Array<"twitter" | "facebook" | "instagram" | "email">;
}

const typeColors = {
  traffic: "bg-cyan-50 border-l-cyan-400",
  topic: "bg-purple-50 border-l-purple-400",
  opinion: "bg-blue-50 border-l-blue-400",
  conversion: "bg-green-50 border-l-green-400",
};

const PlatformIcon = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  email: Mail,
};

export function EventCard({ title, time, type, platforms }: EventCardProps) {
  return (
    <div
      className={cn(
        "p-2 rounded-sm border-l-2 mb-1 group cursor-pointer hover:shadow-sm transition-shadow",
        typeColors[type]
      )}
    >
      <div className="flex justify-between items-start">
        <p className="text-xs font-medium truncate flex-1">{title}</p>
        <span className="text-xs text-gray-500 ml-2">{time}</span>
      </div>
      <div className="mt-1 flex items-center gap-1">
        {platforms.map((platform) => {
          const Icon = PlatformIcon[platform];
          return <Icon key={platform} className="h-3 w-3 text-gray-500" />;
        })}
      </div>
    </div>
  );
}