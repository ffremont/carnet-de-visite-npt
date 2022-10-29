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
import { Information, Pratique } from '../components/Information'
import { isBrowser } from '../components/AppConstants'

const IndexPage = () => {
    React.useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.navigator.serviceWorker.getRegistrations().then(registrations => {
              registrations.forEach(r => r.unregister())
            })
          }
    },[]);
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px' }}>
            <Helmet>
                <title>
                Accueil | Carnet de visite Numérique pour toutes
                </title>
                <meta property="og:title" content="Carnet de visite | Numérique pour toutes" />
                <meta
                    property="og:description"
                    content={`22/11/2022 à NIORT TECH, TOUTE LA JOURNÉE DE 10H À 17H30.
                    AFTERWORK GRATUIT À PARTIR DE 19H SUR INSCRIPTION`}
                />
                <meta property="og:site_name" content="Carnet de visite | Numérique pour toutes" />
                <meta property="og:url" content={isBrowser() ? window.location.href: '/'} />
                <meta
                    property="og:image"
                    content="/banner.jpg"
                />
            </Helmet>
            <MainMedia />
            <MainFab />

            <Pratique />

            <Information />
            <PackList />

            <MoreArea className={styles.morearea} />
            <Footer />
        </Container>
    )
}

export default IndexPage
