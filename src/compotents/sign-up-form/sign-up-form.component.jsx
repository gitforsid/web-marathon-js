import { useState } from 'react';

import FormInput from '../form-input/form-input.compotents';
import Button from '../button/button.compotents'

import { createAuthUserWithEmailAndPassword, createUserDocumentFormAuth } from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [ formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log('hit');

  const resetFormFieles = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(password != confirmPassword) {
      alert("password do ton match")
    }
    try {
      const {user} = createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFormAuth(user, {displayName});
      resetFormFieles();
    } catch(error){
      if(error.code == "auth/email-already-in-use"){
        alert("Email already in use")
      }
      else {
        console.log('useer creation acount an error ', error)
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value })
  }

  return (
    <div className='sign-up-container'>
      <h2>don't have an acount?</h2>
      <span>sign up with email and passwod</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='display name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label='confirm password'
          type='password'
          required onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'> sing up </Button>
      </form>
    </div>
  )
}

export default SignUpForm;
