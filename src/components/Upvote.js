import React from 'react';  

class Upvote extends React.Component  {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {

        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment} class="upvote">Like <i class="fas fa-thumbs-up"></i>
            
                </button>
                <span>{this.state.count}</span>
            </div>
        );
    }
  }

  export default Upvote;