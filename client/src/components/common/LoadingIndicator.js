import React, { Component } from 'react'

const LoadingIndicator = ( props ) => {
  return (
    <div>
    {
      props.error != null &&
    <div className="alert alert-danger">
      <strong>Error!</strong> {props.error}
    </div>
}
  {
    props.loading&&
    <div className="alert alert-warning">
      <strong>Loading!</strong>
    </div>
  }
    </div>
  )
}

export default LoadingIndicator

LoadingIndicator.defaultProps = {
  error:null,
  loading:false
}