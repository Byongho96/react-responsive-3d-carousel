
export function isNumeric(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

/**
 * Parses a CSS unit into a numeric value to be used in three.js.
 */
export function parseCssUnit(str: string, {numericValue = 0, percentValue = 0, autoValue = 0}: {
  numericValue?: number
  percentValue?: number
  autoValue?: number
}) {
  if (isNumeric(str)) {
    return parseFloat(str) * numericValue
  }

  if (str.endsWith('px')) {
    return parseFloat(str) 
  }

  if (str.endsWith('rem')) {
    return parseFloat(str) * 16
  }

  if (str.endsWith('em')) {
    return parseFloat(str) * 16
  }

  if (str.endsWith('pt')) {
    return parseFloat(str) * 16
  }

  if (str.endsWith('vw')) {
    return parseFloat(str) / 100 * window.innerWidth
  }

  if (str.endsWith('vh')) {
    return parseFloat(str) / 100 * window.innerHeight
  }

  if (str.endsWith('%')) {
    return parseFloat(str) / 100 * percentValue
  }

  if (str === 'auto') {
    return autoValue || 0
  }

  return 0
}

/**
 * Parses a CSS shorthand property into a number object to use in three.js object.
 * Ex. '10px 20px' => { top: 10, right: 20, bottom: 10, left: 20 }
 */
export function parseCssShorthand(str: string, percentValueX: number, percentValueY: number) {
  const split = str.split(' ')

  if (split.length === 1) {
    return {
      top: parseCssUnit(split[0], {percentValue: percentValueY}),
      right: parseCssUnit(split[0], {percentValue: percentValueX}),
      bottom: parseCssUnit(split[0], {percentValue: percentValueY}),
      left: parseCssUnit(split[0], {percentValue: percentValueX}),
    }
  }

  if (split.length === 2) {
    return {
      top: parseCssUnit(split[0], {percentValue: percentValueY}),
      right: parseCssUnit(split[1], {percentValue: percentValueX}),
      bottom: parseCssUnit(split[0], {percentValue: percentValueY}),
      left: parseCssUnit(split[1], {percentValue: percentValueX}),
    }
  }

  if (split.length === 3) {
    return {
      top: parseCssUnit(split[0], {percentValue: percentValueY}),
      right: parseCssUnit(split[1], {percentValue: percentValueX}),
      bottom: parseCssUnit(split[2], {percentValue: percentValueY}),
      left: parseCssUnit(split[1], {percentValue: percentValueX}),
    }
  }

  if (split.length === 4) {
    return {
      top: parseCssUnit(split[0], {percentValue: percentValueY}),
      right: parseCssUnit(split[1], {percentValue: percentValueX}),
      bottom: parseCssUnit(split[2], {percentValue: percentValueY}),
      left: parseCssUnit(split[3], {percentValue: percentValueX}),
    }
  }

  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
}

/**
 * Formats a number from three.js into a CSS unit string.
 */
export function formatCssUnit(original: string, value: number, {numericValue = 0, percentValue = 0, autoValue = 0}: {
  numericValue?: number
  percentValue?: number
  autoValue?: number
}) {
  if (isNumeric(original)) {
    return `${(value / numericValue).toFixed(2)}`
  }
  
  if (original.endsWith('px')) {
    return `${(value).toFixed(2)}px`
  }

  if (original.endsWith('rem')) {
    return `${(value / 16).toFixed(2)}rem`
  }

  if (original.endsWith('em')) {
    return `${(value / 16).toFixed(2)}em`
  }

  if (original.endsWith('pt')) {
    return `${(value / 16).toFixed(2)}pt`
  }

  if (original.endsWith('vw')) {
    return `${(value * 100 / window.innerWidth).toFixed(2)}vw`
  }

  if (original.endsWith('vh')) {
    return `${(value * 100 / window.innerHeight).toFixed(2)}vh`
  }

  if (original.endsWith('%')) {
    return `${(value * 100 / percentValue).toFixed(2)}%`
  }

  if (original === 'auto') {
    return `${(autoValue).toFixed(2) || 0}`
  }

  return original
}