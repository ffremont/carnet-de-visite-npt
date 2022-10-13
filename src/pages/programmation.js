
import { Container } from '@mui/material'
import * as React from 'react'
import { Footer } from '../components/Footer'
import { AnimationList } from '../components/Animation';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet';

 const ProgrammationPage = () => {
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px', marginTop:'60px' }}>
            <Helmet title="Programmation | Carnet de visite Numérique pour toutes"/>
            <Header
                subTitle="Programmation"
                title="Mon carnet de visite"
            />

            <AnimationList />
            <Footer />
        </Container>
    )
}
export default ProgrammationPage;
