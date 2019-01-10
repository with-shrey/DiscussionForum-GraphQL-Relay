import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddQuestionMutation from '../../mutations/AddQuestionMutation'
import LoadingIndicator from '../common/LoadingIndicator'
import QuestionQuery from '../../queries/QuestionQuery'
import EditQuestionMutation from '../../mutations/EditQuestionMutation'
import DeleteQuestionMutation from '../../mutations/DeleteQuestionMutation'

class QuestionPage extends Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleOutput = this.handleOutput.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)
    this.state={
      _id:null,
      query:'',
      description:'',
      loading:false,
      error:null,
      edit:false
    }
  }
  componentDidMount(){
    if ( this.props.match.params.id ){
      this.setState({edit: true,loading:true})
      QuestionQuery(this.props.match.params.id).then(data => {
        this.setState({...data.question})
        this.setState({error: null, loading: false})
      }).catch(err => {
        this.setState({error:err[0].message, loading: false})
      })
    }
  }
  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleOutput( err, question ) {
  if ( err ) {
    this.setState( { error: err[ 0 ].message, loading: false } )
    console.log( err[ 0 ].message )
  } else {
  console.log( question )
  this.setState( { error: null, loading: false } )
  this.props.history.push( '/' )
}
}
  handleClick(event){
    event.preventDefault()
    this.setState({loading: true})
    if ( !this.state.edit ) {
      AddQuestionMutation(
        this.state.query,
        this.state.description,
        this.handleOutput
      )
    }else{
      EditQuestionMutation(
        this.state._id,
        this.state.query,
        this.state.description,
        this.handleOutput
      )
    }
  }
  deleteQuestion(event){
    event.preventDefault()
    DeleteQuestionMutation(
      this.state._id,
      ( err, status ) => {
        if ( err ) {
          this.setState( { error: err[ 0 ].message, loading: false } )
          console.log( err[ 0 ].message )
        } else {
          console.log( status )
          this.setState( { error: null, loading: false } )
          this.props.history.push( '/' )
        }
      }
    )
  }
  render() {
    return (
      <div className="container">
        <LoadingIndicator
          loading={this.state.loading}
          error={this.state.error}
        />
        <div className="row" style={{marginTop: 80}}>
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.handleClick}>
              <h1 className="display-4" style={{margin: 32}}>{this.state.edit? `Edit Question`:`Add Question`}</h1>
  
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Question</label>
                <div className="col-sm-10">
                  <input min={2} type="text" onChange={this.handleInput}  className="form-control" name="query" id="firstName" value={this.state.query} />
                </div>
              </div>
              <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea  onChange={this.handleInput}  className="form-control" name="description" id="lastName" value={this.state.description} />
              </div>
            </div>
              <div className="row">
                <div className="col-md-8 offset-md-5">
                  <input className="btn btn-primary" style={{textAlign: 'center'}} type="submit" value={"SAVE"}/>
                </div>
                {
                  this.state.edit&&
                  <div className="col-md-8 offset-md-5">
                    <button onClick={this.deleteQuestion} className="btn btn-primary" style={{textAlign: 'center'}} >Delete</button>
                  </div>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
  }
}

export default QuestionPage

