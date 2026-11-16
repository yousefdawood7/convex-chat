export function formatCurrentTime(unixEpoch: number): string {
  return new Date(unixEpoch).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
