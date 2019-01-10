import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props){
    super(props)
    this.state= {
      user: null
    }
  }
  componentWillMount(){
    let user=localStorage.getItem('USER')
    if ( user ){
      this.setState({user: JSON.parse(user)})
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Discussion Forum</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
            {
              this.state.user !==null &&
              <Link className="nav-item nav-link" to={'/new'}>Add Question</Link>
          
            }
            {
              this.state.user ===null &&
              <React.Fragment>
                <Link className="nav-item nav-link" to={'/login'}>Login</Link>
                <Link className="nav-item nav-link" to={'/register'}>Register</Link>
              </React.Fragment>
            }
            {
              this.state.user !==null &&
              <div className="nav-item  btn btn-danger pull-right" onClick={() => {localStorage.clear();
                this.props.history.push('/login');
              }}>{`Logout, ${this.state.user.firstName}`}</div>
            }
      
          </div>
        </div>
      </nav>
    
  )
  }
}

export default Nav

