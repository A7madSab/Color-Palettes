import chroma from "chroma-js"
const levels = [50, 100, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1100]

const getRange = hexColor => {
    const end = "#fff"
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ]
}

const getScale = (hexColor, numberOfColors) => {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}

const generatePalette = (startPalette) => {
    let newPalette = {
        paletteName: startPalette.paletteName,
        id: startPalette.id,
        emoji: startPalette.emoji,
        colors: {}
    }

    for (let level of levels) {
        newPalette.colors[level] = []
    }
    for (let color of startPalette.colors) {
        let scale = getScale(color.color, 13).reverse()
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }
    return newPalette
}

export const gatherShades = (colors, colorToFilterBy) => {
    let shades = []
    let allColors = colors

    for (let key in allColors) {
        shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
        )
    }
    return shades
}

export default generatePalette