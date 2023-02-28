function SignIn({signedIn,updateSignedIn}){
    if(signedIn){
        return(
            <button id="signIn" onClick={()=>updateSignedIn()} >
                sign out
            </button>
        )
    }
    else{
        return(
            <button id="signIn" onClick={()=>updateSignedIn()} >
                sign in
            </button>
        )
    }
}

export default SignIn;