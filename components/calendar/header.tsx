"use client";

import { Button } from "@/components/ui/button";
import { Filter, Plus } from "lucide-react";
import { Tabs } from "./tabs";

export function CalendarHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Distribution</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="text-sm">Today</Button>
          </div>
        </div>
        <Tabs />
      </div>
    </header>
  );
}