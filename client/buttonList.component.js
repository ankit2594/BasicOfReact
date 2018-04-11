import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from './customButton.component';
class ButtonList extends React.Component{
    constructor(){
        super();
        this.state={
            buttonValues:[10,20,30,40,50]
        }
    }
    addClickHandler(){
        //make chage to array
        let inputValueFromUser=ReactDOM.findDOMNode(this.refs.inputtxt)
        this.setState({buttonValues:[...this.state.buttonValues,+(inputValueFromUser.value)]})
    }
    render(){
        let buttonsToBeCreated=this.state.buttonValues.map((b)=>{
            return  <CustomButton buttonValue={b}/>
        })
        return(
            <div>
                <input ref="inputtxt" type="text"/>
                <button type="button" onClick={this.addClickHandler.bind(this)}>Add</button><br/>
                {buttonsToBeCreated}
               
            </div>
        )
    }
}
export default ButtonList;