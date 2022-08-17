import React from 'react'
import { Table, Button } from 'react-bootstrap';
import getTableHeader from './TableHeader';
const ProductTable = (products) => {
    return (
        <>
        <Table>
            <thead>
            <tr>
                {products.map(product => {
                    return (
                        <th key={product.id}>{getTableHeader(Object.keys(products[0]))}</th>
                    )
                })}
            {/* {products.map((id,name, price) => {
                return(
        <th key={id}>{getTableHeader(name)}</th>
                )
            })} */}
            </tr>
            </thead>
           
            <tbody>
                {
                    products.map(product => {
                        return(
                            <tr ley={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.active}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.img}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    Header
                </tr>
                {products.map(({id, name, price, img,description,active}) =>(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        {/* {products.map(product => {
            return (
                <Table>
                    <thead>
                        <tr>
                            <th>{product.name}</th>
                          
                        </tr>
                    </thead>
                </Table>
            )
        })} */}
        </>
      
    )
}

export default ProductTable;