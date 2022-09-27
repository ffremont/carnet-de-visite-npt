import * as React from 'react'
import { Footer } from '../components/Footer'
import { Container } from '@mui/material'
import { MainMedia } from '../components/MainMedia'
import { PackList } from '../components/Pack'
import { MoreArea } from '../components/MoreArea'
import * as styles from './index.module.less'
import '../global.less'

const IndexPage = () => {
    return (
        <Container maxWidth="sm"  sx={{ marginBottom: '80px' }}>
             <MainMedia />
             
            <PackList />
           
            <MoreArea className={styles.morearea} />
            <Footer />
        </Container>
    )
}

export default IndexPage
