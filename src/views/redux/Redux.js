import React, { useState } from 'react'
import { useEffect } from 'react'
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

const Redux = () => {
    const [records, setRecords] = useState([])
    useEffect(
        () => {
            getProducts();
            getAxiosproducts();
        }, []
    )
    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products')
        let dataR = await res.json();
        setRecords(dataR);
    }
    async function getAxiosproducts() {
        let axiosRes = await axios.get('https://fakestoreapi.com/products');
    }
    
    return (
        <>
            {records.length <= 0 && <CSpinner color="primary" />}
            <CTable bordered>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col" className="text-center" style={{ width: '3rem' }}>Title</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className="text-end">Price</CTableHeaderCell>
                        <CTableHeaderCell scope="col" className="text-center">Image</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {records.map(item => <RecordItem key={item.id} item={item} />)}
                </CTableBody>
            </CTable>
            
            <div>
                <h5 className='mt-3 mb-3'>API By AXIOS</h5>
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
            </div>
        </>        
    )
}

const RecordItem = (props) => {
    // console.log(props.item)
    return (
        <>
            <CTableRow>
                <CTableHeaderCell scope="col" className="text-center">{props.item.id}</CTableHeaderCell>
                <CTableDataCell>{props.item.title}</CTableDataCell>
                <CTableDataCell className="text-end">{props.item.price}</CTableDataCell>
                <CTableDataCell className="text-center"><CImage src={props.item.image} width="30"/></CTableDataCell>
            </CTableRow>
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

export default Redux