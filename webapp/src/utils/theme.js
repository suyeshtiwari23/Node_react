const theme =   {
    headerBg: '#000',
    headerTextColor: '#FFF',
    textColor: '#333',
    LinkColor: '#0082c8',
    btnColor: '#0082c8',
    btnDefaultColor: '#111'
}

let colors = [];
for (var key in theme) {
    colors.push({ type: key, color: theme[key] })
}
    
export { colors }

export default theme

