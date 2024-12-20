"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useCalendarStore } from "@/hooks/use-calendar-store";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FilterDialog({ open, onOpenChange }: FilterDialogProps) {
  const { filters, setFilters } = useCalendarStore();
  
  const platformOptions = ["twitter", "facebook", "instagram", "email"];
  const typeOptions = ["traffic", "topic", "opinion", "conversion"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Events</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              {platformOptions.map((platform) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox
                    id={platform}
                    checked={filters.platforms.includes(platform)}
                    onCheckedChange={(checked) => {
                      const newPlatforms = checked
                        ? [...filters.platforms, platform]
                        : filters.platforms.filter((p) => p !== platform);
                      setFilters({ platforms: newPlatforms });
                    }}
                  />
                  <Label htmlFor={platform} className="capitalize">
                    {platform}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Event Types</h3>
            <div className="grid grid-cols-2 gap-4">
              {typeOptions.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.types.includes(type)}
                    onCheckedChange={(checked) => {
                      const newTypes = checked
                        ? [...filters.types, type]
                        : filters.types.filter((t) => t !== type);
                      setFilters({ types: newTypes });
                    }}
                  />
                  <Label htmlFor={type} className="capitalize">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}