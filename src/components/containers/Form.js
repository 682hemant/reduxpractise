import React,{useState} from 'react'
import ContactForm from '../../components/Form'
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {Link,Redirect} from 'react-router-dom';


// import {onLoggingIn} from '../../redux/actions/AuthActions'

const ContactPage =(props)=> {
  const [state,setState]=useState(false);
   const submit=(values)=>{
          if(values.firstName && values.lastName)
                  setState(true);
   }
  return(
    <div>
    <ContactForm onSubmit={submit} />
   {
     state? <Redirect to="/dashboard"/>:''
  }
       
    </div>
  )
}

export default ContactPage