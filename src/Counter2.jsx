import React from 'react';

class Counter2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    Increment =()=>{
        this.setState({ count : this.state.count +1})
    } 

    decriment =()=>{
        this.setState({ count : this.state.count -1})
    } 

    reset =()=>{
        this.setState({ count : 0})
    } 


    render(){
        return(
            <>
        <div className='main'>
            <div className='mainclass'>
                <div className='centerclass'>
                        <div className='head'>
                            <h1> BY CLASS COMPONENT</h1>
                            <h1>{this.state.count}</h1>

                        </div>
                        <div className='btn_div'>
                            <button  className='btn1' onClick={this.Increment}>+</button>
                            <button className='btn2' onClick={this.decriment}>-</button>
                            <br/>
                            <br/>
                            <button className='reset' onClick={this.reset}>RESET</button>
                            
                        </div>
                        
            </div>
        </div>
        </div>
        </>
        );
    }
}
export default Counter2;