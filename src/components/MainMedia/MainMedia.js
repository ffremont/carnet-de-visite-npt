import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './MainMedia.module.less'

export const MainMedia = () => (
    <StaticImage
        className={styles.image}
        src="../../images/npt-banner.png"
        alt="Numérique pour toutes"
    />
)
