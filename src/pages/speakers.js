import * as React from 'react'
import { Footer } from '../components/Footer'
import { Container } from '@mui/material'
import { SpeakerList } from '../components/Speakers'

const SpeakerPage = () => {
    return (
        <Container maxWidth="sm" sx={{ marginBottom: '80px' }}>
            <SpeakerList />
            <Footer />
        </Container>
    )
}

export default SpeakerPage
