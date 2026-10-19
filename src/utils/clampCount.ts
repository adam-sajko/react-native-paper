export function clampCount(count: number, max: number) {
  return count >= max ? `${max}+` : String(count);
}
