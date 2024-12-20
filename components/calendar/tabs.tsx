"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["Calendar", "Social media", "Mailings"];

export function Tabs() {
  const [activeTab, setActiveTab] = useState("Calendar");

  return (
    <div className="flex gap-8 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "pb-2 px-1 text-sm font-medium transition-colors relative",
            activeTab === tab
              ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}