import React from 'react'
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const ProductTable = (props) => {
    //{ products, column }
    const products = props.prodList;
    const column = props.column;
    console.log(props.prodList);
    const Navigate = useNavigate();
    
    const viewProduct=(id)=>{
        Navigate(`../Products/${id}`, { replace: true });
    };
    if (products.length > 0){
        return (
            <>
  
                <Table  striped bordered hover variant="dark">
                    <thead>
                        <tr>
                           {column && column.map((item, index) => <TableHeadItem item={item}/>)}
    
                        </tr>
                    </thead>
    
                    <tbody>
                        
                        {props.prodList && props.prodList.map((product) => {
                            
                            return (
                                <tr>
                                    <td>
                                        {product.id}
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.description}
                                    </td>
                                    <td>
                                        {product.active}
                                    </td>
                                    <td>
                                        {product.price}
                                    </td>
                                    <td>
                                        <Button  variant="info" onClick={() => viewProduct(product.id)}>View</Button>
                                    </td>

                                </tr>
                            )
                        })}
                        {/* {products && products.map((item, index) => <TableRow item={item} column={column} />)} */}
                    </tbody>
                </Table>
               
            </>
    
        )
    }
    return (
        <>
        <h1 className="m-5 text-center">Products Page</h1>
                  <h3>No Products to load!</h3>
        </>
        
    )
};
  
  
   

const TableHeadItem = ({item}) => <th>{item.heading}</th>

const TableRow =({item, column}) =>{
    console.log(item);
    return <tr></tr>
}
export default ProductTable;

// (
//     <tr>

//         {column && column.map((columnItem,index) => {
//            // if(columnItem.value)
//             return <td >{item[`${columnItem.value}`]}</td>
//         }