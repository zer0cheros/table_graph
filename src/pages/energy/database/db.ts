import mysql from 'serverless-mysql'

const db = async (query:string)=>{
   const con = mysql({
    config: {
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD
        }
    })
    try {
        const data = await con.query(query)
        return data
    } catch (error) {
        console.log(error)
    }
} 

export {db}