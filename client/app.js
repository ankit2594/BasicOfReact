import React from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './basic_components';
import CourseComponent from './courseComponent';
import ListOfCourses from './listOfCourses.component'
import ButtonList from './buttonList.component'
import LifeCycleComponent from './lifecycle.component'
import PostsComponent from './posts.component';
//  ReactDOM.render(<ListOfCourses/>,document.getElementById('content'));
//ReactDOM.render(<ButtonList/>,document.getElementById('content'));
//ReactDOM.render(<LifeCycleComponent/>,document.getElementById('content'));
ReactDOM.render(<PostsComponent/>,document.getElementById('content'));

