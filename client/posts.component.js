import React from 'react';
import ReactDOM from 'react-dom';
export default class PostsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allPosts:[],
            fetchedPost:[]
        }
    }
    componentDidMount(){
        //make ajax request here
        $.get('https://jsonplaceholder.typicode.com/posts',
        (response)=>{
            console.log(response)
            this.setState({
                allPosts:response
            })
        })
    }
    addClickHandler(){
        let postInput=ReactDOM.findDOMNode(this.refs.idInput);
        if(+(postInput.value)>0)
        {
        let inputId=+(postInput.value);
        let thePost=this.state.allPosts.find(p=>p.id==postInput.value)
        this.setState({
            fetchedPost:[...this.state.fetchedPost,thePost]
        })
    }
    }
    render(){
        let postsToBeCreated=this.state.allPosts.map((p,i)=>{
            return(<li key={i*Math.random()}>
                <b>{p.id}</b> . {p.title}
            </li>)
        })
        let fetchedPostsToBeCreated=this.state.fetchedPost.map((p,i)=>{
            return(<li key={i*Math.random()}>
                <b>{p.id}</b> . {p.title}
            </li>)
        })
        return(
            <div>
                <input type="text" ref="idInput" />
                <button  onClick={this.addClickHandler.bind(this)}>Add</button>
                <h1>Your post is/are:</h1>
                {fetchedPostsToBeCreated}
                <hr/>
                <ul>
                    {postsToBeCreated}
                </ul>
            </div>
        )
    }
}