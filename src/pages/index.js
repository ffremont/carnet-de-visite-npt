import * as React from 'react'
import { Footer } from '../components/Footer'
import { Container } from '@mui/material'
import { MainMedia } from '../components/MainMedia'
import { PackList } from '../components/Pack'
import { MoreArea } from '../components/MoreArea'
import * as styles from './index.module.less'
import '../global.less'
import { MainFab } from '../components/MainFab'

const IndexPage = () => {
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px' }}>
            <MainMedia />
            <MainFab/>
            <PackList />

            <MoreArea className={styles.morearea} />
            <Footer />
        </Container>
    )
}

export default IndexPage
