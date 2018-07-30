import React ,{Component}from  'react'
import {connect} from 'react-redux';
import {fetchPost} from '../actions'
import {Link} from 'react-router-dom'
import {deletePost} from '../actions'

 class  Show extends Component{

   componentDidMount(){
  //  this.props.match.prams.id;
     this.props.fetchPost(this.props.match.params.id);
   }
ondelete(){
   this.props.deletePost(this.props.match.params.id,()=>{
     this.props.history.push('/')
   });
}
  render(){
    const {post}=this.props;
    if(!post)
    {
      return <div>nothing </div>
    }
    return(
      <div>
      <Link to='/'>leave!</Link>
      <button className="btn btn-primary" onClick={this.ondelete.bind(this)}>delete!</button>
      <h1>{post.title}</h1>  
      <h2>{post.categories}</h2>
      <p>{post.content}</p>
      </div>
    )
  }
}
function mapStateToProps({posts},ownProps){
////  console.log(posts,'eeee',posts[ownProps.match.params.id ])
  return {post:posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps,{fetchPost,deletePost})(Show)
