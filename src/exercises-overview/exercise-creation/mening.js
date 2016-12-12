import React, {Component} from 'react';
import _ from 'lodash';
import classnames from 'classnames';

class Mening extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sentence: '',
            splitedSentenceArray: [],
            selectedWordIndex: -1,
            selectedWordColor:'',
            errors: {}
        }
        this.onChange = this
            .onChange
            .bind(this);
        this.splitSentence = this
            .splitSentence
            .bind(this);
        this.onKeyPress = this
            .onKeyPress
            .bind(this);
        this.editSentence = this
            .editSentence
            .bind(this);
        this.selectWord = this
            .selectWord
            .bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.currentExercise)) {
            let currentExercise=nextProps.currentExercise
            this.setState({
                splitedSentenceArray:currentExercise
                    .sentence
                    .split(" ")
            })
            var index=currentExercise.solutionGroups[0].groupParts[0].selectedWordIndex;
            var color=currentExercise.solutionGroups[0].category.color;
            this.paintTheWord(index,color);
        }
    }
    paintTheWord(index,color){
        console.log('index&color ->',index,color)
        this.setState({selectedWordIndex:index});
        this.setState({selectedWordColor:color});
        
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
            var arr = this
                .state
                .sentence
                .split(" ");
            this.setState({sentence: ''});
            this.setState({splitedSentenceArray: arr});
        }
    }
    selectWord(e) {
        this.setState({selectedWordIndex: e.target.value});
        e.target

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
                        style={this.state.selectedWordIndex === counter ? 
                        { color:this.state.selectedWordColor } : {}}
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
        console.log('selectedWordIndex->', this.state.selectedWordIndex)
        console.log('from paint ->',this.state.selectedWordIndex,' & ',this.state.selectedWordColor);
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

export default Mening;