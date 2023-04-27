
import React  from 'react';  

class Downvote extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }


    decrement = () => {

        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                
                <button class="downvote" onClick={this.decrement} >Disike <i class="fas fa-thumbs-down"></i>
                
                </button>
                <span>{this.state.count}</span>
            </div>
        );
    }
  }

  export default Downvote;