import React, { Component } from 'react'
import loginMutation from '../../mutations/LoginMutation'
import registrationMutation from '../../mutations/RegistrationMutation'
import { Link } from 'react-router-dom'
class Register extends Component {
  constructor(props){
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      password:'',
      error:null,
      loading: false,
    }
  }
  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleRegister(event){
    this.setState({loading:true})
    event.preventDefault();
    registrationMutation(this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      (err,output) => {
      if ( err ){
        this.setState({error: err[0].message, loading: false})
        console.log(err[0].message)
      }else{
        this.setState({error: null, loading: false})
        this.props.history.push('/login')
      }
    })
  }
  render() {
    return (
      <div>
      <div className="container">
        {
          this.state.error != null &&
          <div className="alert alert-danger">
            <strong>Error!</strong> {this.state.error}
          </div>
        }
        {
          this.state.loading&&
          <div className="alert alert-warning">
            <strong>Loading!</strong> Saving Data
          </div>
        }
        <div className="row" style={{marginTop: 80}}>
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.handleRegister}>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                  <input min={2} type="text" onChange={this.handleInput}  className="form-control" name="firstName" id="firstName" value={this.state.firstName} />
                </div>
              </div><div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                  <input min={2} type="text" onChange={this.handleInput}  className="form-control" name="lastName" id="lastName" value={this.state.lastName} />
                </div>
              </div><div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" onChange={this.handleInput}  className="form-control" name="email" id="email" value={this.state.email} />
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
                <input className="btn btn-primary" style={{textAlign: 'center'}} type="submit" value={"REGISTER"}/>
              </div>
              </div>
            </form>
            <div className="row" style={{marginTop: 30}}>
              <div className="col-md-4 offset-md-4">
            Already Registered ? <Link to="/login" className="btn btn-danger">Login</Link>
              </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}





export default Register

