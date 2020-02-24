import React from 'react';
import './App.css'

class App extends React.Component{
    constructor(){
        super();
        this.state= {
                Email:'',
                Password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    validate = (e) => {
        const Password = this.state.Password
        if(e.target.value.lenght === 0 || e.target.value.lenght < 8 ){
            this.setState({
                error:"Minimal  digit"
            })
        }else{
            this.setState({
                error: "DahLah"
            })
        }
    }
    render(){
        return(
            <div className="flex-container">
                <form>
                    <label className="Email">Email</label>
                    <br />
                    <input className="Input1" 
                        type="email" 
                        required autoComplete="off" 
                        onChange={this.handleChange} />
                    <br />
                        <label className="Pass">Password</label>
                     <br />
                     <input className="Input2"
                        type="password" 
                        required autoComplete="off" 
                        onKeyPress={this.validate} 
                        name="Password" 
                        onChange={this.handleChange} 
                        value={this.state.Password} />
                    {this.state.error && <span style={{color:"red"}}>{this.state.error}</span>}
                    {this.state.name}
                    <br />
                    <button className="Btn"> Sign in </button>
                </form>
            </div>
        )
    }
}

export default App;