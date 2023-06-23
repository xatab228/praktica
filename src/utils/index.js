export const getLayerColor = (value) => {
    // 0 <= value <= 1
    const errorColor = 'black'
    if (!value || value < 0 || typeof value !== 'number') return errorColor
    const localValue = value * 1000;
    if (localValue >= 0 && localValue < 100) return 'red'
    else if (localValue >= 100 && localValue < 200) return 'blue'
    else if (localValue >= 200 && localValue < 300) return 'blue'
    else if (localValue >= 300 && localValue < 400) return 'blue'
    else if (localValue >= 400 && localValue < 500) return 'blue'
    else if (localValue >= 500 && localValue < 600) return 'blue'
    else if (localValue >= 600 && localValue < 700) return 'cian'
    else if (localValue >= 700 && localValue < 800) return 'aqua'
    else if (localValue >= 800 && localValue < 900) return 'yellow'
    else if (localValue >= 900 && localValue <= 1000) return 'green'
    else if (localValue > 1000) return errorColor
}