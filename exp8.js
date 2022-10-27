import './App.css';
import React from 'react'
class Car extends React.Component {
constructor(props) {
super(props);
this.state = {brand: "Ford",Year: "1994",Model: "Gtx 1050",Expired: "2024",Engine: "150cc"};
}
render() {
return (
<div>
<h1>Car Details</h1>
<h1>Brand: {this.state.brand}</h1>
<h1>Year: {this.state.Year}</h1>
<h1>Model: {this.state.Model}</h1>
<h1>Expired: {this.state.Expired}</h1>
<h1>Engine: {this.state.Engine}</h1>
</div>
);
}
}
export default Car;
