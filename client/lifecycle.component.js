import React from 'react';
import ReactDOM from 'react-dom'
class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props);
        console.log('within constructor');
    }
    componentWillMount(){
        //set the initial state
        this.state={companyName:'Mindtree'};
        console.log('Within componentWillMount')
    }
    componentDidMount(){
        //Access Dom, make ajaxified request
        console.log('within componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('within shouldComponentUpdate');
        if(arguments[1].companyName.length>5){
            console.log(arguments[1].companyName);
            return false;
        }
        return true;
    }
    onChangeEventHandler(){
        let txtInput=ReactDOM.findDOMNode(this.refs.txtCompany);
        this.setState({companyName:txtInput.value});
    }
    componentWillUpdate(){
        console.log('within componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('within componentDidUpdate')
    }
    render(){
        console.log('within render')
        return(
            <div>
             Enter company name:
             <input onChange={this.onChangeEventHandler.bind(this)} ref='txtCompany' type="text" /> 
             {this.state.companyName}
            </div>
        )
    }
}
export default LifeCycleComponent;