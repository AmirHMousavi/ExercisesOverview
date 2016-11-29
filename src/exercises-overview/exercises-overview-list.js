import React, {Component} from 'react';
import {Link} from 'react-router';

class ExercisesOverviewList extends Component {
    checkExeType(type){
        switch(type){
            case 'PART_OF_SPEECH': return 'OrdKlassar';
            default:return undefined;
        }
    }

    renderExercises() {
        return Object
            .keys(this.props.exercises)
            .map(key => {
                let exercise = this.props.exercises[key];
                return (
                    <tr key={key}>
                        <td>{this.checkExeType(exercise.exerciseType)}</td>
                        <td>
                            -
                        </td>
                        <td>{exercise.sentence}</td>
                        <td>{exercise.rightAnswersNumber}</td>
                        <td>{exercise.wrongAnswersNumber}</td>
                        <td>{exercise.rightAnswersNumber + exercise.wrongAnswersNumber}</td>
                        <td>0 %</td>
                        <td>
                            <Link to="#">
                                <button type="button" className="btn btn-primary">
                                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                            </Link>
                            <button type="button" className="btn btn-danger">
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

export default ExercisesOverviewList;