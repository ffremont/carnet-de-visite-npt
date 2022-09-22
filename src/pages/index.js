import * as React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Container } from '@mui/material'
import { MainMedia } from './components/MainMedia'
import { AnimationPack } from './components/AnimationPack'
import { MoreArea } from './components/MoreArea'
import * as styles from './index.module.less'

const IndexPage = ({ data }) => {
    return (
        <Container maxWidth="sm" sx={{marginBottom:"80px"}}>
            <Header
                subTitle="Mon carnet de visite"
                title="Numérique pour toutes"
            />

            <MainMedia />

            <AnimationPack type="En formation" name="Se préparer" />
            
            <MoreArea className={styles.morearea}/>
            <Footer />
        </Container>
    )
}

export default IndexPage
