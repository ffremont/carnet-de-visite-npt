import * as React from 'react'

import { StoreContextProvider, memoryStore } from './store'

export const CoreContext = ({ store, children }) => <StoreContextProvider value={store}>{children}</StoreContextProvider>

CoreContext.defaultProps = {
    store: memoryStore(),
};