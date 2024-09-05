import React, { useState } from 'react'
import { useEffect } from 'react'
import Websocket from 'ws'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CSpinner,
    CImage,
    CFormInput,
    CForm,
    CCol,
    CButton,
    CFormLabel,
} from '@coreui/react'
import axios from 'axios';

const OrderBook = () => {
    const [records, setRecords] = useState([{id:1}])
    useEffect(
        () => {
            getProducts();
        }, []
    )
    async function getProducts(){
        
        const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        wss.onmessage = (msg) =>
        {
            console.log(msg.data);
            setRecords(msg.data);
        }
            
        wss.onopen = () => {
            // API keys setup here (See "Authenticated Channels")
        }
      
    }

    function getData() {
          const myPromise = new Promise((resolve, reject) => {
               setTimeout(() => {         
                resolve(getProducts);
            }, 300);
        });
    }
    

    return (
        <>
            {records.length <= 0 && <CSpinner color="primary" />}
            
            
                <div className='mt-3'>
                    <CTable bordered>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col" className="text-center" style={{ width: '3rem' }}>S.No.</CTableHeaderCell>
                                <CTableHeaderCell scope="col">category</CTableHeaderCell>
                                <CTableHeaderCell scope="col" className="text-center">Rating</CTableHeaderCell>
                                <CTableHeaderCell scope="col" className="text-end">Price</CTableHeaderCell>
                                <CTableHeaderCell scope="col" className="text-center">Image</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {records.map(item => <AxiosRecordItem key={item.id} item={item} />)}
                        </CTableBody>
                    </CTable>
                </div>
        </>        
    )
}

const AxiosRecordItem = (axiosProps) => {
    return (
        <>
            <CTableRow>
                <CTableHeaderCell scope="col" className="text-center">{axiosProps.item.id}</CTableHeaderCell>
                <CTableDataCell>{axiosProps.item.category}</CTableDataCell>
                <CTableDataCell className="text-center">{axiosProps.item.rating.rate}</CTableDataCell>
                <CTableDataCell className="text-end">{axiosProps.item.price}</CTableDataCell>
                <CTableDataCell className="text-center"><CImage src={axiosProps.item.image} width="30"/></CTableDataCell>
            </CTableRow>
        </>
    )
}




export default OrderBook;