export const round = (num: number, decimal: number): number => {
  return Math.round(num * Math.pow(10, decimal)) / Math.pow(10, decimal)
}
