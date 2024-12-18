"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar as CalendarIcon } from "lucide-react";
import EventDialog from "./event-dialog";
import DayEvents from "./day-events";

export default function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Calendar</h1>
        </div>
        <Button onClick={() => setIsEventDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <Card className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </Card>

        <Card className="p-6">
          <DayEvents date={date} />
        </Card>
      </div>

      <EventDialog
        open={isEventDialogOpen}
        onOpenChange={setIsEventDialogOpen}
        selectedDate={date}
      />
    </div>
  );
}