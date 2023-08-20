import { createContext, useLayoutEffect, useState } from "react";




//context-objext
export const CryptoContext = createContext({});

// create provider
export const CryptoProvider = ({children}) => {
    const [cryptoData,setCryptoData] = useState();
    const getCryptoData = async () =>{
        try{
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
            .then(res => res.json()).then(json => json);

            // console.log(data)
            setCryptoData(data)
            // console.log(cryptoData)
        }
        catch(e){console.log(e)}
    }
    useLayoutEffect( () => {
        getCryptoData();
    },[])


    return(
        <CryptoContext.Provider value={{ cryptoData }}>
            {/* {JSON.stringify(cryptoData)} */}
            {children}
        </CryptoContext.Provider>
    );
};