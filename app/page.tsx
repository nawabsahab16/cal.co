import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Organize Your Schedule
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
              Like Never Before
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mt-6">
            A modern calendar solution for managing your events, meetings, and tasks with style.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <Link href="/calendar">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <CalendarDays className="mr-2 h-5 w-5" />
                Open Calendar
              </Button>
            </Link>
          </div>

          <div className="mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                alt="Calendar Preview"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}