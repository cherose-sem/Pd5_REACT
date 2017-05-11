import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Grades from "./Grades";
import Musicians from "./Musicians";
import './index.css';


let musicians= [
      {id: 1, name: "James Hetfield", stars: 8},
      {id: 2, name: "Tina Turner", stars: 6},
      {id: 3, name: "Chris Martin", stars: 8},
      {id: 4, name: "Madonna", stars: 5},
      {id: 5, name: "Lady Gaga", stars: 1}  
 ]

ReactDOM.render(
  <Musicians data = {musicians}/>,
  document.getElementById('root')
);

let students = [
      {id: 1, name: "student-A", grade: 7},
      {id: 2, name: "student-B", grade: 10},
      {id: 3, name: "student-C", grade: 4},
      {id: 4, name: "student-D", grade: 12},
      {id: 5, name: "student-E", grade: 2},
      {id: 6, name: "student-F", grade: 0},
    ]

//ReactDOM.render(
//  <Grades data = {students}/>,
//  document.getElementById('root') // fetching the id from the index.html
//);
