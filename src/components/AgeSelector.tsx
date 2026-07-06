"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  label: string;
  description?: string;
}

interface AgeSelectorProps {
  options: Option[];
  selected: string | null;
  onSelect: (id: string) => void;
  label?: string;
}

export function AgeSelector({
  options,
  selected,
  onSelect,
  label = "How old is your child?",
}: AgeSelectorProps) {
  return (
    <div>
      <h3 className="mb-4 font-heading text-lg font-bold text-foreground">{label}</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <motion.button
            key={option.id}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.id)}
            className={cn(
              "rounded-2xl border-2 p-4 text-left transition-all",
              selected === option.id
                ? "border-flip-blue bg-flip-blue/5 shadow-md"
                : "border-border bg-card hover:border-flip-blue/40 hover:shadow-sm",
            )}
          >
            <span className="font-heading font-bold text-foreground">{option.label}</span>
            {option.description && (
              <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
