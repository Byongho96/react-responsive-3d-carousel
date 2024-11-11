import { round } from './math'

describe('round', () => {
  it('should round to the specified decimal places', () => {
    expect(round(1.2345, 2)).toBe(1.23)
    expect(round(1.2367, 2)).toBe(1.24)
    expect(round(123.456789, 4)).toBe(123.4568)
  })

  it('should handle rounding with no decimal places', () => {
    expect(round(1.9, 0)).toBe(2)
    expect(round(1.4, 0)).toBe(1)
  })

  it('should handle negative numbers', () => {
    expect(round(-1.2345, 2)).toBe(-1.23)
    expect(round(-1.2367, 2)).toBe(-1.24)
  })

  it('should return the original number when decimal is 0', () => {
    expect(round(123.456, 0)).toBe(123)
    expect(round(-123.456, 0)).toBe(-123)
  })

  it('should handle rounding to more decimal places than the number has', () => {
    expect(round(1.2, 3)).toBe(1.2)
    expect(round(1.2345, 6)).toBe(1.2345)
  })
})
