import React, { useContext } from 'react'
import { CryptoProvider } from '../context/CryptoContext'

const Table = () => {
  let cryptoData = useContext(CryptoProvider) ?? 0
  console.log(cryptoData)

  return (
    <div className='flex flex-col mt-0 border border-gray-100 rounded'>
      <table className='w-full table-auto'>
        <thead className='capitalize text-base text-gray-100 font-medium border-b border-gray-100'>
            <tr>
                <th className='py-1'>Asset</th>
                <th className='py-1'>Name</th>
                <th className='py-1'>Price</th>
                <th className='py-1'>Total Volume</th>
                <th className='py-1'>Market Cap change</th>
                <th className='py-1'>1H</th>
                <th className='py-1'>DAY</th>
                <th className='py-1'>WEEK</th>
            </tr>
        </thead>
        <tbody>
          {
            cryptoData.map( (data) => {
              return(
                <tr className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                  <button className='outline-0 border-0 bg-none cursor-pointer'>
                    <img className='w-[1.2rem] h-[1.2rem' src={data.image} alt={data.name} />
                    <span>{data.symbol}</span>
                  </button>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                  <td className='py-4'>{data.name}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
