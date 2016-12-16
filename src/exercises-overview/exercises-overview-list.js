import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {deleteOneExercise} from '../actions/fetchOneExercise';
import {setEditeMode} from '../actions/mode';

class ExercisesOverviewList extends Component {
    checkExeType(type){
        switch(type){
            case 'PART_OF_SPEECH': return 'OrdKlassar';
            default:return undefined;
        }
    }

    onDeleteButton=(key)=>{
        this.props.deleteOneExercise(key);
    }
    sliceTheSentence(sentence,index) {
        var splitedSentece = sentence.split(" ");
        var slice1=splitedSentece.slice(0,index);
        var slice2=splitedSentece.slice(index,index+1);
        var slice3=splitedSentece.slice(index+1,splitedSentece.length);
        return [slice1.join(" "),slice2.join(" "),slice3.join(" ")];    
}
setEditeMode(e){
    console.log('pencile clicked',e.target)
    this.props.setEditeMode(true);
}

    renderExercises() {
        return Object
            .keys(this.props.exercises)
            .map(theKey => {
                let exercise = this.props.exercises[theKey];
                let boldWordIndex=exercise.solutionGroups[0].groupParts[0].selectedWordIndex;
                let slicedSentence=this.sliceTheSentence(exercise.sentence,boldWordIndex);
                return (
                    <tr key={theKey}>
                        <td>{exercise.id}</td>
                        <td>{this.checkExeType(exercise.exerciseType)}</td>
                        <td>
                            -
                        </td>
                        <td>{slicedSentence[0]}<b>&nbsp;{slicedSentence[1]}</b>&nbsp;{slicedSentence[2]}</td>
                        <td>{exercise.rightAnswersNumber}</td>
                        <td>{exercise.wrongAnswersNumber}</td>
                        <td>{exercise.rightAnswersNumber + exercise.wrongAnswersNumber}</td>
                        <td>0 %</td>
                        <td>
                            <Link to={`ny-uppgift/${theKey}`}>
                                <button type="button" className="btn btn-primary" onClick={this.setEditeMode.bind(this)}>
                                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                            </Link>
                            <button type="button" className="btn btn-danger" onClick={this.onDeleteButton.bind(this,theKey)}>
                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                );
            });
    }

    render() {
        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Typ</th>
                            <th>Svårighet</th>
                            <th>Mening</th>
                            <th>Rätt</th>
                            <th>Fel</th>
                            <th>Total</th>
                            <th>Svårighet för studenter</th>
                            <th>Aktiviteter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderExercises()}
                    </tbody>
                </table>

            </div>
        );
    }
}


//introduce new props to this component
function mapStateToProps(state) {
    return {exercises: state.exercises,mode:state.mode}
}
//as we intoduce new props, lets document it in proptypes
ExercisesOverviewList.propTypes = {
    exercises: PropTypes.object.isRequired,
    deleteOneExercise: PropTypes.func.isRequired,
    setEditeMode: PropTypes.func.isRequired
}


export default connect(mapStateToProps,{deleteOneExercise,setEditeMode})(ExercisesOverviewList);