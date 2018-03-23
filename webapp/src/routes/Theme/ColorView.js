import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

const Text = styled.div`
    width: 100px;
`

const ColorBox = styled('div')`
    height: 50px;
    width: 100px;
    background-color: ${props => props.color ? props.color : ''};
    margin: 0 20px;
    border: 1px solid #DDD;
`

export default ({type, color}) => <Container>
        <Text>{type}</Text> 
        <ColorBox color={color}/> 
        <Text>{color}</Text> 
    </Container>