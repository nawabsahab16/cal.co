import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CalendarEvent } from '@/types/calendar';

interface CalendarState {
  events: CalendarEvent[];
  filters: {
    platforms: string[];
    types: string[];
  };
  currentDate: Date;
  addEvent: (event: CalendarEvent) => void;
  removeEvent: (eventId: string) => void;
  setFilters: (filters: { platforms?: string[]; types?: string[] }) => void;
  setCurrentDate: (date: Date) => void;
}

export const useCalendarStore = create<CalendarState>()(
  persist(
    (set) => ({
      events: [],
      filters: {
        platforms: [],
        types: [],
      },
      currentDate: new Date(),
      addEvent: (event) =>
        set((state) => ({
          events: [...state.events, event],
        })),
      removeEvent: (eventId) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== eventId),
        })),
      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),
      setCurrentDate: (date) =>
        set({ currentDate: date }),
    }),
    {
      name: 'calendar-store',
    }
  )
);