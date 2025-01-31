import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import Modal from '../Modal';
import { useCart } from './contextReducer';


export default function Navbar() {
    let navigate = useNavigate();
    const [cartView, setCartView]=useState(false)
    let data=useCart();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login')
    }
    // const authToken = localStorage.getItem("token");
    // if (!authToken) {
    //     console.log("No authToken found, not rendering My Orders link");
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className='nav-item'>
                                <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                !localStorage.getItem("token") ?
                                    (
                                        <li className='nav-item'  key="myOrder">
                                            <Link className="nav-link active fs-5" aria-current="page" to="/MyOrders">
                                                My Orders
                                            </Link>
                                        </li>
                                    )
                                    : ""

                            }

                        </ul>
                        <div>
                            {(localStorage.getItem("token")) ?
                                <div className='d-flex'>

                                    <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
                                    <Link className="btn bg-white text-success mx-1" to="/Signup">Signup</Link>

                                </div>
                                : <div>
                                    <div className="btn bg-white text-success mx-2" onClick={()=>setCartView(true)}>My Cart {" "}
                                    <Badge pill bg="danger">{data.length}</Badge></div>
                                    {cartView? <Modal onClose={()=>setCartView(false)}></Modal>:null}
                                    <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>LogOut</div>
                                </div>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
