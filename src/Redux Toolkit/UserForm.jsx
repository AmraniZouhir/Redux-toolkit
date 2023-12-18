
import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser, updateUser } from './Features/UsersSlice';
import { selector } from './Store/UserSelector';

export default function UserForm() {

    const name = useRef(null)
    const prenom = useRef(null)
    const age  = useRef(null)
    const country = useRef(null)
    const user = useSelector(selector)


    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const dispatche = useDispatch()

    const deletUser = (e) => {
        dispatche(resetUser())
        alert("Profail Delated")

    }

    const handleSaveChanges = (e) => {
       


        dispatche(updateUser({
            name: name.current.value,
            prenom: prenom.current.value,
            age: age.current.value,
            country: country.current.value,
        }
            
        ))
        handleClose();
    }


    return (
        <>
            <div className="container">
                <div className="d-grid gap-2 d-flex justify-content-center mb-5">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleShow}>
                        Update Your profile
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-lg px-4" data-bs-toggle="modal" onClick={deletUser}>Delete
                        Your profile
                    </button>
                </div>
            </div>




            <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update user</h5>
                            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 row">
                                <label htmlFor="fullName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="fullName" name="fullName" ref={name} defaultValue={user?.name}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="fullName" className="col-sm-2 col-form-label">Prenom</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="fullPrenom" name="fullPrenom" ref={prenom}  defaultValue={user?.prenom}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="age" name="age" ref={age} defaultValue={user?.age}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                                <div className="col-sm-10">
                                    <select id='country' name='country' className="form-select" ref={country} defaultValue={user?.country}
                                    >  
                                        <option value=''>Select your country</option>
                                        <option value="ma">Morocco</option>
                                        <option value="dz">Algeria</option>
                                        <option value="tn">Tunisia</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges} data-bs-dismiss="modal">
                                Save changes
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}







