import React,{Component} from 'react'
import {Field} from 'redux-form'
import {Link} from 'react-router-dom'
import {createPost } from '../actions'
import {connect} from 'react-redux'
var reduxForm = require('redux-form').reduxForm;
class postsNew extends Component{
  constructor(props){
    super(props)
this.onSubmit=this.onSubmit.bind(this)
  }
  formfunction(field){
    const { meta: { touched, error ,active} } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return(

      <div className={className}>
      <lable>{field.lable}</lable>
      <input className="form-control" type="text"
      {...field.input} />
      <div className="text-help">
      {field.meta.touched?field.meta.error:'  '}

      </div>

      </div>
    )
  }
  onSubmit(values)
  {
    //console.log(values)
    this.props.createPost(values,()=>{
    this.props.history.push('/')
    }
    )

//     console.log("inga illa")

  }

  render(){
    const { handleSubmit}=this.props
    return(

      <div>
      <form onSubmit={handleSubmit(this.onSubmit)}>
<Field name="title" lable="title" component={this.formfunction}></Field>
<Field name="categories" lable="tag" component={this.formfunction}></Field>
<Field name="content" lable="content" component={this.formfunction}></Field>
<button  type="submit"className="btn btn-seondary">click!</button>
<Link className="btn btn-secondary" to="/">home</Link>
</form>
      </div>
    )
  }
}
function validate(values){

  const error={};
  if(!values.title)
  {
    error.title="enter title"
  }
  if(!values.tag)
  {
    error.tag="enter tag"
  }
  if(!values.con)
  {
    error.con="enter content"
  }
  return error;
}
export default reduxForm({
  validate,
  form:'reduxform'
})(
  connect(null,{createPost})(postsNew)
);
