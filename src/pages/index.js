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
import { Information } from '../components/Information'

const IndexPage = () => {
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px' }}>
            <Helmet title="Accueil | Carnet de visite Numérique pour toutes"/>
            <MainMedia />   
            <MainFab/>

<div className="info-pratique">
22/11/2022 | NIORT TECH<br/>
JOURNÉE DE 10H À 17H30 | GRATUIT<br/>
AFTERWORK À PARTIR DE 19H I PAYANT SUR INSCRIPTION
</div>

            <Information />
            <PackList />

            <MoreArea className={styles.morearea} />
            <Footer />
        </Container>
    )
}

export default IndexPage
