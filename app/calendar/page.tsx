import { CalendarHeader } from "@/components/calendar/header";
import { CalendarGrid } from "@/components/calendar/calendar-grid";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CalendarHeader />
      <main className="container mx-auto py-4">
        <CalendarGrid />
      </main>
    </div>
  );
}