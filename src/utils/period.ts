export type Period = {
  start?: string;
  end?: string;
};

export function formatPeriod(period?: Period, override?: string): string | null {
  if (override?.trim()) return override.trim();
  if (!period) return null;

  const start = period.start?.trim();
  const end = period.end?.trim();

  if (start && end) return `${start} - ${end}`;
  if (start) return start;
  if (end) return end;

  return null;
}
