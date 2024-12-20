export type EventType = "traffic" | "topic" | "opinion" | "conversion";
export type PlatformType = "twitter" | "facebook" | "instagram" | "email";

export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  type: EventType;
  platforms: PlatformType[];
}