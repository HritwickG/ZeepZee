// import React from 'react'

// const Login =() =>{
//     return(
//         <div></div>
//     )
// }
// export default Login;
import React, { useEffect, useState } from 'react'
import styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"
import Card from '../../components/card/Card'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils'
import Loader from '../../components/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_AUTH, login } from '../../redux/features/auth/authSlice'

const Login = () => {

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    // const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const{isLoading,isLoggedIn,isSuccess} = useSelector((state) =>state.auth)

    const loginUser = async(e) => {
        e.preventDefault();
        if (!email || !phone) {
            return toast.error("All feilds are require")
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email")
        }


        const userData = {

            email,
            phone,
            // password,
        }
        console.log(userData)
         await dispatch(login(userData))
    }

    useEffect(() =>{
        if(isSuccess && isLoggedIn){
            navigate("/")
        }

        dispatch(RESET_AUTH())
    },[isSuccess, isLoggedIn,dispatch,navigate])


    return (

        <>

            {isLoading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={loginImg} alt="Login" width="400" />
                </div>
                <Card>
                    <div className={styles.form}>
                        <h2>Register</h2>
                        <form onSubmit={loginUser}>
                            <input
                                type="text"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {/* <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /> */}
                            <button type="submit" className="--btn --btn-primary --btn-block">
                                Register
                            </button>
                        </form>
                        <span className={styles.register}>
                            <p>Go to the home page</p>
                            <Link to="/">--Home--</Link>
                        </span>

                    </div>
                </Card>


            </section>
        </>
    )
}
export default Login;
// --btn--btn-primary --btn-block