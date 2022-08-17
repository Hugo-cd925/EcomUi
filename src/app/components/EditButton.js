import React from 'react'
import { useNavigate } from 'react-router-dom';

function EditButton(props) {
  const navigate = useNavigate();
    const navigateToEdit = () => {
        navigate(`/Edit/${props.prodId}`)
    };
    return (
    <>
        <button className="btn btn-secondary" onClick={navigateToEdit}>Edit</button>
    </>
  )
}

export default EditButton