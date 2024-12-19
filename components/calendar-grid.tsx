"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CalendarGridProps {
  date: Date;
}

export default function CalendarGrid({ date }: CalendarGridProps) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Mock events data
  const events = [
    {
      id: 1,
      title: "Digital textile printing guide",
      date: new Date(2024, 1, 1),
      time: "12:00",
      type: "social",
      platforms: ["twitter", "instagram"],
    },
    {
      id: 2,
      title: "Traffic page social content",
      date: new Date(2024, 1, 9),
      time: "12:00",
      type: "traffic",
      platforms: ["twitter", "instagram"],
    },
  ];

  return (
    <div className="grid grid-cols-7 gap-4">
      {weekDays.map((day) => (
        <div
          key={day}
          className="text-sm font-medium text-muted-foreground text-center py-2"
        >
          {day}
        </div>
      ))}
      
      {Array.from({ length: 35 }).map((_, i) => {
        const dayEvents = events.filter(
          (event) => event.date.getDate() === (i % 31) + 1
        );

        return (
          <Card
            key={i}
            className={cn(
              "p-2 min-h-[120px] hover:shadow-md transition-shadow",
              dayEvents.length > 0 && "ring-1 ring-primary/20"
            )}
          >
            <div className="text-sm text-muted-foreground">{(i % 31) + 1}</div>
            <div className="mt-2 space-y-1">
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-2 rounded-md bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
                >
                  <div className="text-xs font-medium">{event.title}</div>
                  <div className="mt-1 flex items-center gap-1">
                    {event.platforms.map((platform) => (
                      <Badge
                        key={platform}
                        variant="secondary"
                        className="text-xs"
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}