export function isOutOfDate(date: Date | string): boolean {
  const currentDate = new Date();
  const nativeDate = date instanceof Date ? date : new Date(date);

  currentDate.setFullYear(currentDate.getFullYear() - 2);
  return new Date(nativeDate) < currentDate;
}
