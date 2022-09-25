import * as React from 'react'
import { AppBar, Box, Hidden, Toolbar, Typography } from '@mui/material'
import * as styles from './Header.module.less'

export const Header = ({ title, subTitle }) => (
    <div className={styles.container}>
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    <Hidden mdDown><span className={styles.title}>{title}</span></Hidden>
                    <Hidden mdUp><span className={styles.title}>NPT</span></Hidden>
                    <span className={styles.separator}>/</span>
                    <span className={styles.subTitle}>{subTitle}</span>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)
