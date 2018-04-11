import React from 'react';
class CourseComponent extends React.Component{
    render(){
        return(
            <div>
                <b>title: </b>{this.props.courseDetails.title}<br/>
                <b>Duration: </b>{this.props.courseDetails.duration}<br/>
                <b>price: </b>{this.props.courseDetails.price}<br/>
                <br/>
            </div>
        )
    }
}
export default CourseComponent;