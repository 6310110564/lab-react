import React from "react";
export default
class Hint extends React.Component{
    constructor(props){
        super(props);
        this.state = { hint: ""}
      }
      showhint = () => {
        this.setState({
          hint: "โลกสีฟ้าทักทายน้ำเงิน"
        })
      }  
      render(){
        return (
        <div>
            <button type="button" onClick={this.showhint} >Hint Click!!</button>
            <p>{this.state.hint}</p>
        </div>
        );
      }
}