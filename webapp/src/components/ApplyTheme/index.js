import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../../utils/theme'

export default function ApplyTheme(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <ThemeProvider theme={theme}><Component {...this.props} /></ThemeProvider>
          }

    }
}