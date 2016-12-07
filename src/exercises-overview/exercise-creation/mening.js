import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

/*
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
//*********************************************/

class Mening extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sentence: '',
            splitedSentenceArray: []
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.editSentence=this.editSentence.bind(this);
        /*this.mapSentenceArrToButtonGroup=this.mapSentenceArrToButtonGroup.bind(this);*/
    }
    onKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.onClick();
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClick(e) {
        var arr = this
            .state
            .sentence
            .split(" ");
        this.setState({sentence: ''})
        this.setState({splitedSentenceArray: arr})
    }
    mapSentenceArrToButtonGroup() {
        var counter=0;
        return this.state.splitedSentenceArray.map((word) => {
            counter+=1
                return (
                    <button key={counter} type="button" className="btn btn-default" value={word}>{word}</button>
                );
            });
    }
    editSentence(){
        this.setState({sentence:this.state.splitedSentenceArray.join(" ")})
        this.setState({splitedSentenceArray:[]})
}

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-1">
                        <h3 style={{margin: 5 + 'px'}}>Mening</h3>
                    </div>
                    <div className="col-xs-1 col-xs-offset-1">
                        <button type="button" className="btn btn-primary" onClick={this.editSentence}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </button>
                    </div>
                </div>
                <br/>
                <div className="col-xs-12">
                    <div className="col-xs-10">
                        <input
                            className="form-control"
                            name="sentence"
                            placeholder="mening"
                            type="text"
                            value={this.state.sentence}
                            onChange={this.onChange}
                            onKeyPress={this.onKeyPress}/>
                    </div>
                    <div className="col-xs-2">
                        <button type="button" className="btn btn-info" onClick={this.onClick}>
                            <span className="glyphicon glyphicon-arrow-down"></span>
                        </button>

                    </div>
                </div>
                <div>
                    <div className="col-xs-12">
                        <div className="col-xs-10">
                            <div className="btn-group" role="group" aria-label="...">
                                {this.mapSentenceArrToButtonGroup()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {sentence: state.sentence, splitedSentenceArray: state.splitedSentenceArray}
}
Mening.propTypes = {
    sentence: React.PropTypes.string,
    splitedSentenceArray: React.PropTypes.array
}

export default connect(mapStateToProps)(Mening);