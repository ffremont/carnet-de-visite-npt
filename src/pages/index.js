import * as React from 'react'
import { Footer } from '../components/Footer'
import { Container } from '@mui/material'
import { MainMedia } from '../components/MainMedia'
import { PackList } from '../components/Pack'
import { MoreArea } from '../components/MoreArea'
import * as styles from './index.module.less'
import '../global.less'
import { MainFab } from '../components/MainFab'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px' }}>
            <Helmet title="Accueil | Carnet de visite Numérique pour toutes"/>
            <MainMedia />   
            <MainFab/>
            <PackList />

            <MoreArea className={styles.morearea} />
            <Footer />
        </Container>
    )
}

export default IndexPage
