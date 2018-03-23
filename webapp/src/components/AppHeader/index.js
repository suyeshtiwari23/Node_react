import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    height: 60px;
    color: ${({theme}) => theme.headerTextColor};
    background-color: ${({theme}) => theme.headerBg};
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`

export default () => <Header>Header</Header>