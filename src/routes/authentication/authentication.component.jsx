
import SignUpForm from '../../compotents/sign-up-form/sign-up-form.component';
import SignInForm from '../../compotents/sign-in-form/sign-in-form.component'

import './authentication.styles.scss'

const Authentication = () => {



  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication;
