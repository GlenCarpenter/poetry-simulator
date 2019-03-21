import React from 'react';
import '../css/Input.css';

class Input extends React.Component {

    constructor(props) {
        super(props);
      }

    state = {
        value: '',
        placeholder: 'Enter a word'
    }

    focusHandler = () => {
        this.setState({placeholder: ""});
    }

    blurHandler = () => {
        this.setState({placeholder: 'Enter a word'});
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onClickOrSubmit(this.state.value);
    }    

    render() {
        return(
            <div className="inputContainer">
                <form onSubmit={this.onFormSubmit}>
                    <input
                    className="inputField"
                    type="text"
                    placeholder={this.state.placeholder}
                    value={this.state.value}
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                    onChange={e => this.setState({ value: e.target.value })}/>
                </form>
                <div className="buttons">
                    <button className="btn-hover color-button" onClick={()=> this.props.onClickOrSubmit(this.state.value)}>Simulate a poem</button>
                </div>
            </div>
        );
    }
}

export default Input;