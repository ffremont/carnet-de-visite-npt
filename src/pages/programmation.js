
import { Container } from '@mui/material'
import * as React from 'react'
import { Footer } from '../components/Footer'
import { AnimationList } from '../components/Animation';
import { Header } from '../components/Header';

 const ProgrammationPage = () => {
    return (
        <Container maxWidth="sm" sx={{ marginBottom: '80px', marginTop:'60px' }}>
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
