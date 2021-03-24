import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';


import './header.styles.scss';


const Header = ( { currentUser }) => (
    <div className='header'>
     <Link className='header-content' to='/'>
         
     </Link>

     <div className='header-content'>
     {currentUser ? (
        <div className='header-right' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='header-right' to='/signin'>
          LogOut
        </Link>
      )}
     </div>

    </div>
);
const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
  });
  
export default connect(mapStateToProps)(Header);