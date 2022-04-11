import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom"
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import {userSignout}  from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
const Navigation=()=>{
    const {currentUser}=useContext(UserContext);

    const signOutUser=async ()=>{
      await userSignout();
    }
   
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo"></Logo>
                    
                </Link>
                
                <div className="nav-links-container">
                    <h2>{currentUser?.displayName}</h2>
                    <Link className="nav-link" to='/shop'>Shop </Link>
                    { currentUser  ? (<span className="nav-link" onClick={signOutUser}> SignOut</span> )
                       : (<Link className="nav-link" to='/auth'>SIGN IN </Link>)
                    }
                </div>
               
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;