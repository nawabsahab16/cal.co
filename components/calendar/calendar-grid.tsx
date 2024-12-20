"use client";

import { DayCell } from "./day-cell";
import { useCalendarStore } from "@/hooks/use-calendar-store";
import { getCalendarDays } from "@/lib/calendar-utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addMonths, subMonths } from "date-fns";

export function CalendarGrid() {
  const { currentDate, setCurrentDate, events, filters } = useCalendarStore();
  const calendarDays = getCalendarDays(currentDate);
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const filteredEvents = events.filter((event) => {
    const platformMatch = filters.platforms.length === 0 || 
      event.platforms.some(p => filters.platforms.includes(p));
    const typeMatch = filters.types.length === 0 || 
      filters.types.includes(event.type);
    return platformMatch && typeMatch;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-lg font-medium">
            {new Intl.DateTimeFormat('en-US', { 
              month: 'long', 
              year: 'numeric' 
            }).format(currentDate)}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => setCurrentDate(new Date())}
        >
          Today
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {weekDays.map((day) => (
          <div
            key={day}
            className="bg-gray-50 text-xs font-medium text-gray-500 text-center p-2"
          >
            {day}
          </div>
        ))}
        
        {calendarDays.map((day, i) => (
          <DayCell
            key={i}
            date={day.date.getDate()}
            events={filteredEvents.filter(event => 
              event.date.toDateString() === day.date.toDateString()
            )}
            isToday={day.isToday}
            isCurrentMonth={day.isCurrentMonth}
          />
        ))}
      </div>
    </div>
  );
}