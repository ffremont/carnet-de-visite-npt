import * as React from 'react'

import { StoreContextProvider, memoryStore } from './store'

export const CoreContext = (props) => {
    const { store, children } = props

    return <StoreContextProvider value={store}>{children}</StoreContextProvider>
}

CoreContext.defaultProps = {
    store: memoryStore(),
};