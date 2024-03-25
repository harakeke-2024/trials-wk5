// used just to get random number
export function randomInt(min: number, max: number): number {
  const random = Math.floor(Math.random() * max + min)
  return random
}
