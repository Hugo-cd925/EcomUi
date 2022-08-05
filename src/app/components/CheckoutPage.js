import React from 'react'

function CheckoutPage() {
  return (
    <div>
        <div className='py-2 bg-info'>
            <div className='container'>
                <h4>Checkout</h4>
            </div>
        </div>
        <div className=''>
            <div className='container mt-3'>
                <p className='fs-5'>Review Your Order Details</p>
            </div>
        </div>
        <div className='py-4'>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-7'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>Basic Information</h5>
                            </div>
                            <div className='card-body'>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <label>First Name</label>
                                            <input type="text" name='FirstName' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <label>Last Name</label>
                                            <input type="text" name='LastName' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <label>Phone Number</label>
                                            <input type="text" name='PhoneNumber' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <label>Email Address</label>
                                            <input type="email" name='Email' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='form-group mb-3'>
                                            <label>Street Address</label>
                                            <input type="text" name='StreetAddress' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group mb-3'>
                                            <label>City</label>
                                            <input type="text" name='City' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group mb-3'>
                                            <label>State</label>
                                            <input type="text" name='State' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group mb-3'>
                                            <label>Zip</label>
                                            <input type="text" name='ZipCode' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                            <h5>Payment Information</h5>
                                        
                                            <div className='col-md-12'>
                                                <div className='form-group mb-3'>
                                                    <label>Card Holder Name</label>
                                                    <input type="text" name='CardHolder' className='form-control'/>
                                                </div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='form-group mb-3'>
                                                    <label>Credit Card Number</label>
                                                    <input type="text" name='CardNumber' className='form-control'/>
                                                </div>
                                            </div>
                                            <div className='col-md-2'>
                                                <div className='form-group mb-3'>
                                                    <label>Expiration</label>
                                                    <input type="text" name='CardNumber' className='form-control'/>
                                                </div>
                                            </div>
                                            <div className='col-md-2'>
                                                <div className='form-group mb-3'>
                                                    <label>CVV</label>
                                                    <input type="text" name='CVV' className='form-control'/>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group text-end'>
                                                <button type='button' className='btn btn-primary'>Place Order</button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* this is start of cart details */}
                    <div className='col-md-5'>
                        <table className='table table-border'>
                            <thead>
                                <tr>
                                    <th width="50%">Product</th>
                                    <th >Price</th>
                                    <th >Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shampoo</td>
                                    <td>8.99</td>
                                    <td>2</td>
                                    <td>17.98</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        

    </div>
  )
}

export default CheckoutPage