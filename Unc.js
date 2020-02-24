import React from 'react'

class Unc extends React.Component{
    constructor(){
        super();
        this.state={
            Email:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            Email: e.target.value
        })
        if(e.target.value.length === 0 || e.target.value.length < 5){
            this.setState({
                error: " bct "
            })
        } else {
            this.setState({
                error:''
            })
        }
    }
    render(){
        return(
                <form>
                <label>
                Email:
                <input
                name="Email"
                type="Email"
                value={this.state.Email}
                onChange={this.handleChange}
                />
                {this.state.error && <span style={{color: "red"}}>{this.state.error}</span>}
            </label>
            </form>
        )
    }
}

export default Unc;