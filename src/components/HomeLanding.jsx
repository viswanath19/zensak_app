import React from 'react';
import props from 'prop-types'

export default class HomeLanding extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result:'',
            txt1:'',
            txt2:''
        }
        this.handleTextOneChanges = this.handleTextOneChanges.bind(this);
        this.handleTextTwoChanges = this.handleTextTwoChanges.bind(this);
        this.handleButtonOne = this.handleButtonOne.bind(this);
    }

    handleTextOneChanges = (e) => {
        console.log("text1 changes",e.target.value);
        this.setState({
            txt1:e.target.value
        })
    }

    handleTextTwoChanges = (e) => {
        this.setState({
            txt2:e.target.value
        })
    }

    handleButtonOne = () => {
        this.setState({
            result:this.state.txt1
        })
    }

    handleButtonTwo = () => {
        this.setState({
            result:this.state.txt2
        })
    }

    concatenateResult = () => {
        this.setState({
            result:this.state.txt1.concat(this.state.txt2)
        })
    }

    render(){
        return (
            <div>
                <input type="text" className={"inpText1"} onChange={(e)=>this.handleTextOneChanges(e)}/>

                <input type="text" className={"inpText2"} onChange={(e)=>this.handleTextTwoChanges(e)}/>

                <button onClick={this.handleButtonOne}>Submit 1</button>
                <button onClick={this.handleButtonTwo}>Submit 2</button>
                <button onClick={this.concatenateResult}>Submit 3</button>

        <div>Result as:{this.state.result}</div>

            </div>
        )
    }
}