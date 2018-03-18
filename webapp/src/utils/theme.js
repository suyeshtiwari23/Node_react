const theme =   {
    header_bg: 'red',
    black: '#000'
}

let colors = [];
for (var key in theme) {
    colors.push({ type: key, color: theme[key] })
}
    
export { colors }

export default theme

