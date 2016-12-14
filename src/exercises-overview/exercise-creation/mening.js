import React, {Component,PropTypes} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux'
import classnames from 'classnames';
import {selectWordIndex} from '../../actions/selectWordIndex';
import {sentenceProvided} from '../../actions/sentenceProvided';

class Mening extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sentence: '',
            splitedSentenceArray: [],
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.splitSentence = this.splitSentence.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.editSentence = this.editSentence.bind(this);
        this.selectWord = this.selectWord.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        let currentExercise=this.props.currentExercise
        if (currentExercise!==nextProps.currentExercise) {
            currentExercise=nextProps.currentExercise
            this.props.sentenceProvided(currentExercise.sentence);
            this.setState({
                splitedSentenceArray:currentExercise
                    .sentence
                    .split(" ")
            })
            var index=currentExercise.solutionGroups[0].groupParts[0].selectedWordIndex;
            this.props.selectWordIndex(index);
        }
    }


    onKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.splitSentence();
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    splitSentence() {
        let errors = {};
        if (this.state.sentence.length < 1) {
            errors.sentence = 'ingen mening tillgänglig';
            this.setState({errors})
        } else {
            this.setState({errors})
            var trimedSentence=this.state.sentence.trim();
            var arr = trimedSentence.split(" ");
            this.setState({sentence: ''});
            this.setState({splitedSentenceArray: arr});
            this.props.sentenceProvided(this.state.sentence);
        }
    }
    selectWord(e) {
        this.props.selectWordIndex(parseInt(e.target.value,[10]));
    }
    mapSentenceArrToButtonGroup() {
        var counter = -1;
        return this
            .state
            .splitedSentenceArray
            .map((word) => {
                counter += 1
                return (
                    <button
                        key={counter}
                        type="button"
                        className="btn btn-default"
                        value={counter}
                        style={this.props.index === counter ? 
                        { color:this.props.color } : {}}
                        onClick={this.selectWord}>{word}</button>
                );
            });
    }
    editSentence() {
        this.setState({
            sentence: this
                .state
                .splitedSentenceArray
                .join(" ")
        });
        this.setState({splitedSentenceArray: []});
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-xs-12 col-sm-1">
                        <h3 style={{margin: 5 + 'px'}}>Mening</h3>
                    </div>
                    <div className="col-sm-1">
                        <button type="button" className="btn btn-primary" onClick={this.editSentence}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </button>
                    </div>
                </div>
                <br/>
                <div className="col-xs-12">
                    <div
                        className={classnames('form-group col-xs-11', {'has-error': errors.sentence})}>
                        <input
                            className="form-control"
                            name="sentence"
                            placeholder="mening"
                            type="text"
                            value={this.state.sentence}
                            onChange={this.onChange}
                            onKeyPress={this.onKeyPress}/>{errors.sentence && <span className="help-block">{errors.sentence}</span>}
                    </div>
                    <div className="col-xs-1">
                        <button type="button" className="btn btn-info" onClick={this.splitSentence}>
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
function mapStateToProps(state){
    return{
        index:state.selectedWordIndex.selectedWordIndex,
        color:state.selectedCategory.color,
        selectedWordIndex:state.selectedWordIndex,
        currentExercise:state.currentExercise
    }
}
Mening.propTypes={
    selectedWordIndex:PropTypes.object,
    sentenceProvided:PropTypes.func.isRequired
}

export default connect(mapStateToProps,{selectWordIndex,sentenceProvided})(Mening);