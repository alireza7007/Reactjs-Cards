import React, { Component } from "react";
export default class BuyClass extends Component {
    constructor(props){
        super(props);

        this.showAlert=this.showAlert.bind(this);
        this.handelClick=this.handelClick.bind(this);
    }

    showAlert(){
        alert(this.props.name)
    }
     handelClick(){
        setTimeout(this.showAlert,2000);
    }
    render(){
        return(
            <div>
            <span className="badge" onClick={this.handelClick}>Buy</span>
            <p>Class</p>
            </div>
        )
    }
}