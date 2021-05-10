import React from 'react'
import Pins from '../Pins/Pins'
import {Main, Container} from './HomeStyle'

function Home() {
    return (
        <Main>
            <Container>
               <Pins />
            </Container>
        </Main>
    )
}

export default Home
