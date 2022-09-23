import * as React from 'react'
import { Box, Typography } from '@mui/material'
import * as styles from './Header.module.less';

export const Header = ({ title, subTitle }) => (
    <Box className={styles.container}>
        <Typography variant="h6" gutterBottom>
            {subTitle}
        </Typography>
        <Typography variant="h5" gutterBottom>
            {title}
        </Typography>
    </Box>
)
