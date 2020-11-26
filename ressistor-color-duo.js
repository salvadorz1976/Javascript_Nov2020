// 1. map [String] -> [Number]
// 2. join [Number] -> [String]
// 3. slice String -> String
// 4. parse String -> Number

export const value = colorValues => {
    return Number(colorValues
        .map(colorValue => COLORS.indexOf(colorValue))
        .join('')
        .slice(0,2));
    };

export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]

