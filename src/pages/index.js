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
            window.navigator.serviceWorker
                .getRegistrations()
                .then((registrations) => {
                    registrations.forEach((r) => r.unregister())
                })
        }
    }, [])
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px' }}>
            <Helmet>
                <title>Accueil | Carnet de visite Numérique pour toutes</title>
                <meta
                    property="og:title"
                    content="Carnet de visite | Numérique pour toutes"
                />
                <meta
                    property="og:description"
                    content={`22/11/2022 à NIORT TECH, TOUTE LA JOURNÉE DE 10H À 17H30.
                    AFTERWORK GRATUIT À PARTIR DE 19H SUR INSCRIPTION`}
                />
                <meta
                    property="og:site_name"
                    content="Carnet de visite | Numérique pour toutes"
                />
                <meta
                    property="og:url"
                    content={isBrowser() ? window.location.href : '/'}
                />
                <meta property="og:image" content="/npt-2024.png" />

                <link
                    rel="stylesheet"
                    href="https://cdn.plyr.io/3.7.8/plyr.css"
                />
                <script src="https://cdn.plyr.io/3.7.8/plyr.js"></script>
            </Helmet>
            <MainMedia />
            <MainFab />

            <Pratique />

            <Information />
            {/*<PackList />*/}

            <MoreArea className={styles.morearea} />

            {/*<dialog className="modal-window">
                <video controls autoPlay muted >
                    <source src="/video-evenement.mp4" type="video/mp4" />
                    Télécharger le
                    <a href="/video-evenement.mp4">MP4</a>.
                </video>

                <form method="dialog">
                    <button>Fermer</button>
                </form>
    </dialog>*/}

            <Footer />
        </Container>
    )
}

export default IndexPage
