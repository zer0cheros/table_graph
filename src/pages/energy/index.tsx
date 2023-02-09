import React from 'react'
import {db} from './database/db'

export async function getServerSideProps(){
    const sql = 'SELECT * FROM energy_consumption'
    const results = await db(sql)
    return {
        props: {data: JSON.parse(JSON.stringify(results))}
    }
}

const Energy = ({data}) => {
    console.log(data)
  return (
    <div></div>
  )
}

export default Energy