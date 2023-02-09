import React, {useState, useEffect} from 'react'
import { Table, TableBody, Paper, Box, TableCell, TableHead, TableContainer, TableRow } from '@mui/material'


type Order = {
    createdAt: number,
    item: string,
    price: number
}

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const fetchOrders = async () =>{
        const res = await fetch('http://localhost:8000/api/orders')
        const data = await res.json()
        setOrders(data.orders)
    }
    useEffect(()=>{
        fetchOrders()
    },[])
    return (
    <TableContainer component={Paper}>
        <Table size='medium'>
            <TableHead sx={{backgroundColor: '#888'}}>
                <TableRow>
                    <TableCell>Order Created</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(order=>(
                    <TableRow>
                        <TableCell>{order.createdAt}</TableCell>
                        <TableCell>{order.item}</TableCell>
                        <TableCell>{order.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>  
  )
}

export default Orders