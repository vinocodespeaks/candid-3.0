import React, { Component } from 'react';
import {fetchPosts} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
  import _ from 'lodash'
 class postIndex extends Component {
  componentDidMount(){
  this.props.fetchPosts();
//  console.log('mounted' )
  }

  postfether()
  {
    return(
    _.map(this.props.posts,(post)=>{

        return (


          <li className="list-group-item" key={post.id}>
          <Link to={'/post/'+post.id} >
          {post.title}
</Link>
</li>
        )
    })
  )
  }
  render() {
    console.log(this.props.posts.id)
  //  console.log()
    return (
      <div>
      <div className="text-xs-right">
      <Link className="btn btn-primary" to="/post/new" >
      add</Link>
      </div>
      <ul className="list-group">
      <h1>posts</h1>

      {this.postfether()}
      </ul>
      </div>
    );
  }
}
function mapStateToProps(state)
{
  return {
posts:state.posts
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(postIndex);
