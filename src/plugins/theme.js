// 得到需要修改的一系类颜色值

const getThemeCluster = (theme) => {
  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(getTintColor(theme, Number(i / 10).toFixed(2)))
  }
  clusters.push(getShadeColor(theme, 0.1))
  return clusters
}
// 得到色调颜色
const getTintColor = (color, tint) => {
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)

  if (tint === 0) {
    return [red, green, blue].join(',')
  } else {
    red += Math.round((255 - red) * tint)
    green += Math.round((255 - green) * tint)
    blue += Math.round((255 - blue) * tint)
    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)
    return `#${red}${green}${blue}`
  }
}

// 获取阴影色调颜色
const getShadeColor = (color, shade) => {
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)
  red = Math.round((1 - shade) * red)
  green = Math.round((1 - shade) * green)
  blue = Math.round((1 - shade) * blue)
  red = red.toString(16)
  green = green.toString(16)
  blue = blue.toString(16)
  return `#${red}${green}${blue}`
}
const updateStyle = (stylecon, oldCulster, newCluster) => {
  let newStyleCon = stylecon
  oldCulster.forEach((color, index) => {
    let regexp = ''
    if (color.split(',').length > 1) {
      const rgbArr = color.split(',')
      regexp = new RegExp(
        '\\s*' + rgbArr[0] + '\\s*,\\s*' + rgbArr[1] + '\\s*,\\s*' + rgbArr[2] + '\\s*',
        'ig'
      )
    } else {
      regexp = new RegExp(color, 'ig')
    }
    newStyleCon = newStyleCon.replace(regexp, newCluster[index])
  })
  return newStyleCon
}
const initThemeCss = (data) => {
  const styles = [].slice.call(document.querySelectorAll('style')).filter((style) => {
    const text = style.innerText
    return new RegExp(data, 'i').test(text)
  })
  return styles
}
// function getCssBlock() {
//     const cssBlock = document.styleSheets
//     const styleData = [...cssBlock].reverse().find(({ cssRules }) => {
//         return [...cssRules].find((rule) => {
//             return ['.voucher_head'].includes(rule.selectorText)
//         })
//     })
//     return styleData.ownerNode.innerText
// }
export { getThemeCluster, updateStyle, initThemeCss }
