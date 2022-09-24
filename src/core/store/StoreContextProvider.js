import * as React from 'react'
import { useEffect } from 'react'
import { StoreContext } from './StoreContext'

export const StoreContextProvider = ({ value: Store, children }) => {
    useEffect(() => {
        Store.setup()
        return () => {
            Store.teardown()
        }
    }, [Store])

    return (
        <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
    )
}
