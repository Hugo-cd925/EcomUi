import React from 'react'
import FormItem from '../forms/InputForms';
import FormItemDropdown from '../forms/SelectForm';
import usStates from '../forms/State';
const EditProfile = () => {

    const [user, setUser] = React.useState({
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''

    });
    const [errors, setErrors] = React.useState({
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''

    });

    const sendProfile = () => {
        console.log(user);

        //PutUser(setUser, id, setApiError)
    };

    const onChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };
    return (
        <div className='py-2 bg-info'>

            <div className='container'>
                <div className='container mt-3'>
                   <p  className='fs-5'>Profile</p>
                </div>
               
            </div>
            <div>
                <FormItem
                    type="text"
                    id="streetAddress"
                    label="Street Address:"
                    onChange={onChange}
                    // value={user?.streetAddress}
                    hasErrors={Boolean(errors.streetAddress)}

                />
                <span>{errors.streetAddress}</span>
            </div>
            <div>
                <FormItem
                    type="text"
                    id="streetAddress2"
                    label="Street Address 2:"
                    onChange={onChange}
                    // value={user?.streetAddress}
                    hasErrors={Boolean(errors.streetAddress)}

                />
                <span>{errors.streetAddress2}</span>
            </div>
            <div>
                <FormItem
                    type="text"
                    id="city"
                    label="City:"
                    onChange={onChange}
                    // value={user?.city}
                    hasErrors={Boolean(errors.city)}

                />
                <span>{errors.city}</span>
            </div>

            <div>
                {/* <FormItemDropdown 
                id="state"
                label='State'
                onClick={onChange}
                onChange={onChange}
                value={user?.state}
                options={usStates}
                /> */}
                        <FormItem
                    type="text"
                    id="state"
                    label="State:"
                    onChange={onChange}
                    // value={user?.state}
                    hasErrors={Boolean(errors.state)} />
            </div>
            <div>
                <FormItem
                    type="text"
                    id="zipCode"
                    onChange={onChange}
                    // value={user?.zipCode}
                    hasErrors={Boolean(errors.zipCode)}

                />
                <span>{errors.zipCode}</span>
            </div>
            <div>
                <FormItem
                    type="text"
                    id="phoneNumber"
                    label="Phone"
                    onChange={onChange}
                    // value={user?.phoneNumber}
                    hasErrors={Boolean(errors.phoneNumber)}

                />
                <span>{errors.phoneNumber}</span>
            </div>
            <div>
                <button type='submit' onClick={sendProfile}
                >Confirm</button>
            </div>

        </div>
    )
}

export default EditProfile