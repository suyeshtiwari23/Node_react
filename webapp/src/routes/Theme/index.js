import React from 'react'
import styled from 'styled-components'

import ColorView from './ColorView'
import { colors } from '../../utils/theme'

const Wrapper = styled.div``

export default () => <Wrapper>
    {colors.map( (item, key) => 
        <ColorView type={item.type} color={item.color} key={key} />
    )}
</Wrapper>
