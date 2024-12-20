"use client";

import { cn } from "@/lib/utils";
import { EventCard } from "./event-card";

interface DayCellProps {
  date: number;
  events: Array<{
    id: string;
    title: string;
    time: string;
    type: "traffic" | "topic" | "opinion" | "conversion";
    platforms: Array<"twitter" | "facebook" | "instagram" | "email">;
  }>;
  isToday?: boolean;
}

export function DayCell({ date, events, isToday }: DayCellProps) {
  return (
    <div className="min-h-[120px] p-2 border border-gray-100 bg-white">
      <div className={cn(
        "text-sm mb-2",
        isToday ? "text-blue-600 font-semibold" : "text-gray-500"
      )}>
        {date}
      </div>
      <div className="space-y-1">
        {events.slice(0, 2).map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
        {events.length > 2 && (
          <p className="text-xs text-gray-500 pl-2">+{events.length - 2} more</p>
        )}
      </div>
    </div>
  );
}