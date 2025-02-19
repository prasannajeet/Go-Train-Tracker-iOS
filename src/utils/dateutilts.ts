/**
 * Format date to long format
 * @param date - The date to format
 * @returns The formatted date in long format
 */
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format time to 24 hour format
 * @param dateTimeString - The date time string to format
 * @returns The formatted time in 24 hour format
 */
export const formatTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString('en-CA', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
