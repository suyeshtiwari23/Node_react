import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.div`
    width: 100px;
`

const ColorBox = styled.div`
    height: 50px;
    width: 100px;
    background-color: #0082C8;
    margin: 0 20px;
`

export default (props) => <Wrapper>
    <Container>
        {console.log(props)}
        <Text>Header Color:</Text> 
        <ColorBox/> 
        <Text>#0082C8</Text> 
    </Container> 
</Wrapper>
