import {FETCH_POSTS,FETCH_POST,DELETE_POST} from '../actions/index'

 export function PostsReducer(state={},action){
   switch (action.type) {
     case DELETE_POST:
     //console.log('sssssssssssssssssssssss',state)
     return _.omit(state,action.payload);
     case FETCH_POST:
  //   console.log(action.payload,"identia",state.title["test"],{...state})
//console.log('action',action);
//console.log('action.payload',action.payload)
//console.log('action.payload.data',action.payload.data)
//console.log('action.payload.data.id',action.payload.data.id)
//console.log('state',state);
//console.log('state.id',state[action.payload.data.id])
//console.log(state)    //console.log('feeeeeeeeeeetchhhh',state)
    // console.log('middlewarer',action.payload.data)
//console.log('id',action.payload.data.id)
     //const setState={...state}
    //console.log('setstate1',setState)
     //setState[action.payload.data.id] =action.payload.data
     //console.log('setState',setState.action.payload.data.id)

     return {[action.payload.data.id]:action.payload.data}
   case FETCH_POSTS:
   //console.log(action.payload.data[0])
   //console.log('fetchAll',action.payload.data)
//console.log('state',state)
console.log(state)
  return  _.mapKeys(action.payload.data,'id');


}
   return state;
 }
