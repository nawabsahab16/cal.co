"use client";

import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface DayEventsProps {
  date?: Date;
}

export default function DayEvents({ date }: DayEventsProps) {
  if (!date) return null;

  const mockEvents = [
    {
      id: 1,
      title: "Team Meeting",
      time: "10:00 AM",
      description: "Weekly team sync",
    },
    {
      id: 2,
      title: "Lunch Break",
      time: "12:30 PM",
      description: "Lunch with colleagues",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">
        Events for {format(date, "MMMM d, yyyy")}
      </h2>
      <div className="space-y-4">
        {mockEvents.map((event) => (
          <Card key={event.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
              <span className="text-sm font-medium">{event.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}