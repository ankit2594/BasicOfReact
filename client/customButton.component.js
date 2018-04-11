import React from 'react';
class CustomButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            theCount:this.props.buttonValue
        }
    }
    buttonClicked(){
        this.setState({theCount:this.state.theCount+1});
    }
    render(){
        return(
            <div style={{display:'inline-block', margin:'10px'}}>
                <button onClick={this.buttonClicked.bind(this)} style={{padding:'10px 30px 10px 30px', borderRadius:'10px',backgroundColor:'brown', color:'white', cursor:'pointer'}}><b>{this.state.theCount}</b></button>
            </div>
        )
    }
}
export default CustomButton;