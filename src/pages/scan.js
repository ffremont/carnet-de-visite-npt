import * as React from 'react'
import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { navigate } from '@reach/router';

const Qr = () => {
    const [data, setData] = useState('No result')

    const handleScan = (text)=>{
        navigate((new URL(text).pathname));
    }

    return (
        <>
            <QrReader
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
            />
        </>
    )
}

export default Qr
