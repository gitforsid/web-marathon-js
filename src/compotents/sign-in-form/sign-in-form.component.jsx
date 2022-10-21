import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.compotents';
import Button from '../button/button.compotents';

import {
  singInWithGooglePopup,
  createUserDocumentFormAuth,
  signInAuthUserWithEmailAndPassword
 } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFieles = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
   await singInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);

      resetFormFieles();
    } catch(error){
      if (error.code == 'auth/wrong-password'){
        alert("incorect password")
      }
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value })
  }

  return (
    <div className='sign-in-container'>
      <h2>Aleready have an acount?</h2>
      <span>sign in with email and passwod</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='password'
          type='password'
          required onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'> sing in </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
           google sing in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;
