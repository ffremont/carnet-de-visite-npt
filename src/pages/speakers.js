import * as React from 'react'
import { Container } from '@mui/material'
import { Footer } from '../components/Footer'
import { SpeakerList } from '../components/Speakers'
import { Header } from '../components/Header'
import { Helmet } from 'react-helmet'

const SpeakerPage = () => {
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px', marginTop:'60px' }}>
            <Helmet title="Intervenants | Carnet de visite Numérique pour toutes"/>
             <Header
                subTitle="Intervenants"
                title="Mon carnet de visite"
            />

            <SpeakerList />
            <Footer />
        </Container>
    )
}

export default SpeakerPage
