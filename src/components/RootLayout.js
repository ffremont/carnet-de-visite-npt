import * as React from 'react'
import { CoreContext } from '../core/CoreContext'
import { localStorageStore } from '../core/store'

export default function RootLayout({ children }) {
    return (
        <>
            <CoreContext store={localStorageStore()}>{children}</CoreContext>
        </>
    )
}
