import React, { Component } from 'react'
import loginMutation from '../../mutations/LoginMutation'
import LoadingIndicator from '../common/LoadingIndicator'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      email:'',
      password:'',
      error:null,
      loading:false
    }
  }
  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleLogin(event){
    this.setState({loading:true})
    event.preventDefault();
    loginMutation(this.state.email,this.state.password,(err,output) => {
      if ( err ){
        this.setState({error: err[0].message, loading: false})
        console.log(err[0].message)
      }else{
        console.log(output)
        const{login:{token,user}} = output
        this.setState({error: null, loading: false})
        localStorage.setItem('USER', JSON.stringify(user))
        localStorage.setItem('TOKEN', token)
        console.log(token)
        console.log(user)
        this.props.history.push('/')
      }
    })
  }
  render() {
    return (
     <div className="container">
       <LoadingIndicator
       loading={this.state.loading}
       error={this.state.error}
       />
       <div className="row" style={{marginTop: 80}}>
         <div className="col-md-6 offset-md-3">
           <form onSubmit={this.handleLogin}>
             <div className="form-group row">
               <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
               <div className="col-sm-10">
                 <input type="text" onChange={this.handleInput}  className="form-control" name="email" id="staticEmail" value={this.state.email} />
               </div>
             </div>
             <div className="form-group row">
               <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
               <div className="col-sm-10">
                 <input type="password" onChange={this.handleInput} name="password"  className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} />
               </div>
             </div>
  
             <div className="row">
               <div className="col-md-8 offset-md-5">
             <input className="btn btn-primary" style={{textAlign: 'center'}} type="submit" value={"LOGIN"}/>
             </div>
             </div>
           </form>
           <div className="row" style={{marginTop:30}}>
             <div className="col-md-8 offset-md-4">
           Do not have a account ? <Link to="/register" className="btn btn-danger">Register</Link>
             </div>
           </div>
         </div>
       </div>
     </div>
    
  )
  }
}





export default Login

