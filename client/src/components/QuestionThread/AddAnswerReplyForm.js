import React,{Component} from 'react'
import LoadingIndicator from '../common/LoadingIndicator'
import AddAnswerMutation from '../../mutations/AddAnswerMutation'

class AddAnswerReplyForm extends  Component{
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleAddAnswer = this.handleAddAnswer.bind(this)
    this.state = {
      solution:'',
      error:null,
      loading:false
    }
  }
  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleAddAnswer(event){
    event.preventDefault()
    AddAnswerMutation(this.props.type,
      this.state.solution,
     this.props.questionId,
      this.props.answerId,
      (err,state) => {
        if ( err ){
          this.setState({error: err[0].message, loading: false})
          console.log(err[0].message)
        }else{
          console.log(state)
          this.setState({error: null, loading: false,solution:''})
        }
      }
    )
  }
  render(){
    return(
      <form onSubmit={this.handleAddAnswer} className={"col-md-12"} style={{marginTop: 10}}>
        <LoadingIndicator
          loading={this.state.loading}
          error={this.state.error}
        />
        <div className="form-group row">
          <div className="col-sm-12 col-md-12">
            <textarea onChange={this.handleInput} name="solution"  className="form-control" placeholder="Solution" value={this.state.solution} />
          </div>
        </div>
    
        <div className="row">
          <div className="col-md-12">
            <input className="btn btn-primary" style={{textAlign: 'center'}} type="submit" value={"SUBMIT"}/>
          </div>
        </div>
      </form>
    )
  }
}

export default AddAnswerReplyForm

AddAnswerReplyForm.defaultProps={
  questionId:"",
  answerId:""
}