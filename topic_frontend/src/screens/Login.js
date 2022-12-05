import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import './Login.css'
const Login = ({ history, location }) => {
  console.log('value of history', history)
  console.log('value of location', location)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [toggle, setToggle] = useState(false)
  const redirect = location.search ? location.search.split('=')[1] : '/'
  console.log('value of redirect is', redirect)
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userCred } = userLogin
  const toggleVisibility = () => {
    setToggle(!toggle)
  }
  const hideShow = () => { }

  useEffect(() => {
    if (userCred) {
      console.log(userCred)
      history.push(redirect)
    }
  }, [history, userCred, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password, role))
  }
  const onChangeValue=(event)=>{
    setRole(event.target.value);
  }
  return (
    <div className='container'>
      <div className='layout'>
        <h1>Sign In</h1>
        {error && <Message variant='danger ' message={error} />}
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <div onChange={onChangeValue}>
              <input type="radio" value="student" name="student" /> Student
              <input type="radio" value="teacher" name="teacher" /> Teacher
              <input type="radio" value="manager" name="manager" /> Manager
              <input type="radio" value="admin" name="admin" /> Admin
            </div>
            <input
              className='form-field'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
            <div className='password-eye'>
              <input
                className='form-field '
                type={toggle ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
              />
              {toggle ? (
                <i
                  id='eye'
                  className='fas fa-eye'
                  onClick={toggleVisibility}
                ></i>
              ) : (
                <i
                  className='fas fa-eye-slash'
                  id='eye'
                  onClick={toggleVisibility}
                ></i>
              )}
            </div>
            <div className='remember-me'>
              <input type='checkbox' id='check' />
              <label htmlFor='check'>Remember me</label>
            </div>
            <button className='btn' type='submit'>
              Login
            </button>
          </form>
        )}

        {/* {} */}
      </div>
    </div>
  )
}

export default Login
