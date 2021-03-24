import React from 'react';
//import MenuItem from '../menu-item/menuitem'; 
import './directory.styles.scss'; 
import kochiImage from '../../assets/12.jpg'; 
import bangaloreImage from '../../assets/11.jpg';
import hyderabadImage from '../../assets/student2.jpg';

import {Link} from 'react-router-dom';
const Directory = () => (

<div classname='row' >
    <div className='column'>
   <div className='card'>
       <img src={kochiImage} alt='kochi' style={{width:'100%', height:'100%' }} />
      
       <Link to='/kochi' className='link' >
           <div className='container'>
               
           <h3><b>Hanoch Jacob</b></h3>
           </div>   
       </Link>
       </div>
       </div>
       <div className='column'>
   <div className='card'>
       <img src={bangaloreImage} alt='bangalore' style={{width:'100%',height:'100%'}} />
      
       <Link to='/bangalore' className='link' >
           <div className='container'>
           <h3><b>Dia Philip</b></h3>
           </div>   
       </Link>
       </div>
       </div>



       
       <div className='column'>
   <div className='card'>
       <img src={hyderabadImage} alt='kochi' style={{width:'100%'}} />
      
       <Link to='/hyderabad' className='link' >
           <div className='container'>
           <h3><b>Yemma Jackson</b></h3>
           </div>   
       </Link>
       </div>
       </div>


</div>



);




export default Directory;