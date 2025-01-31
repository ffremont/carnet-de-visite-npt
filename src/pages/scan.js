import * as React from 'react'
import { useState } from 'react'
//import { QrReader } from 'react-qr-reader'
import { QrScanner } from '@yudiel/react-qr-scanner'
import { navigate } from '@reach/router'
import { QR_REDIRECT_HOSTNAME_WHITELIST } from '../components/AppConstants'
import { Helmet } from 'react-helmet'

const Qr = () => {
    const [data, setData] = useState('No result')

    const handleScan = (text) => {
        const myUrl = new URL(text)
        if (
            QR_REDIRECT_HOSTNAME_WHITELIST.indexOf(
                myUrl.hostname.toLocaleLowerCase()
            ) > -1
        ) {
            navigate(myUrl.pathname)
        } else {
            alert('QR invalide')
        }
    }

    return (
        <>
            <Helmet title="Scan QR | Carnet de visite Numérique pour toutes" />
            <QrScanner
                onDecode={(result) => {
                    console.log(result);
                    if (!!result) {
                        handleScan(result)
                    }
                }}
                onError={(error) => console.log(error?.message)}
            />
            {/*<QrReader
                constraints={{ facingMode: 'environment' }}
                videoContainerStyle={{ paddingTop: 0 }}
                videoStyle={{
                    position: 'fixed',
                    right: 0,
                    bottom: 0,
                    minWidth: '100vw',
                    minHeight: '100vh',
                }}
                onResult={(result, error) => {
                    if (!!result) {
                        handleScan(result?.text);
                    }

                    if (!!error) {
                        console.info(error)
                    }
                }}
                style={{ width: '100%', height: '100%' }}
            />*/}
        </>
    )
}

export default Qr
