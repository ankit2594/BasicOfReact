import React from 'react';
import CourseComponent from './courseComponent';
class ListOfCourses extends React.Component{
    constructor(){
        super();
        this.courses=[
            {title:'React', duration:'3 days', price:5000},
            {title:'Node', duration:'4 days', price:3000},
            {title:'Mongo', duration:'5 days', price:6000},
            {title:'Angular', duration:'6 days', price:1000}       
        ];
    }
    render(){
        let coursesToBeCreated=this.courses.map((c)=>{
            return  <CourseComponent courseDetails={c}/>
        })
        return(
            <div>
                {coursesToBeCreated}
               
            </div>
        )
    }
}
export default ListOfCourses;