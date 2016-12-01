import React, {Component} from 'react';
import Validator from 'validator';
import _ from 'lodash';

function validateInput(data) { 
    let errors = {};
    if (Validator.isEmpty(data.sentence)) {
        errors.email = 'ingen mening införas';
    }
    if (Validator.isEmpty(data.question)) {
        errors.email = 'ingen mening införas';
    }
    if (Validator.isEmpty(data.answer)) {
        errors.email = 'ingen mening införas';
    }
    return {errors, isValid: _.isEmpty(errors)}
}
//*********************************************

class SentenceForm extends Component {
    constructor(props){
        super(props)
        this.state={
            sentence:''
        }
        this.onChange=this.onChange.bind(this);
    }
        onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <input
                    className="form-control"
                    name="sentence"
                    placeholder="mening"
                    type="text"
                    value={this.state.sentence}
                    onChange={this.onChange}/>
            </div>
        );
    }
}

export default SentenceForm;