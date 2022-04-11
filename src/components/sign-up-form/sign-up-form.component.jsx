import FormInput from '../form-input/form-input.component';

const signupForm=()=>{
    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={()=>{}}>
                
                <FormInput type='text' label='Display Name' value='' required></FormInput>

                <FormInput type='email' label='Email'  value='' required></FormInput>

                <FormInput type='password' label='Password' value='' required></FormInput>

                <FormInput type='password' label='Confirm Password '  required></FormInput>

                <button type="submit" >Sign Up</button>
            </form>
        </div>
    )
}

export default signupForm;