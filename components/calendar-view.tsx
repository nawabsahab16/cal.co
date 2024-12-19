"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import EventDialog from "./event-dialog";
import CalendarGrid from "./calendar-grid";
import { cn } from "@/lib/utils";

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);

  const tabs = ["Calendar", "Social media", "Mailings"];
  const [activeTab, setActiveTab] = useState("Calendar");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Distribution</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" onClick={() => setIsEventDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>
          </div>

          <div className="flex gap-8 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-2 px-1 text-sm font-medium transition-colors",
                  activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">February 2024</h2>
          </div>
          <Button variant="outline">Today</Button>
        </div>

        <CalendarGrid date={date} />
      </main>

      <EventDialog
        open={isEventDialogOpen}
        onOpenChange={setIsEventDialogOpen}
        selectedDate={date}
      />
    </div>
  );
}