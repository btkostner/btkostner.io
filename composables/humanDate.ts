export function humanDate(date: Date | string): string {
  const nativeDate = date instanceof Date ? date : new Date(date);

  return Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeZone: "America/Denver",
  }).format(nativeDate);
}
