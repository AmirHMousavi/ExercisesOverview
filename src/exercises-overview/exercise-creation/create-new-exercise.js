import React, {Component} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import Categories from './categories';
import SentenceForm from './sentence-form';

class createNewExercisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise: {}
        }
        this.onClick = this
            .editExerciseAndBack
            .bind(this);
    }
    editExerciseAndBack() {}
    saveAndNewExercise() {}

    render() {
        const editButton = (
            <button type="button" className="btn btn-success"
                onClick={this.editExerciseAndBack}>Uppdatera & Tillbaka
            </button>
        )
        const newButton = (
            <button type="button" className="btn btn-success"
                onClick={this.saveAndNewExercise()}>Spara & Ny Ordklasser
            </button>
        )
        return (
            <div>
                <h1>Redigera Ordklasser</h1>
                <hr/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-1">
                            <h3 style={{margin: 5 + 'px'}}>Mening</h3>
                        </div>
                        <div className="col-xs-1 col-xs-offset-1">
                            <button type="button" className="btn btn-primary">
                                <span className="glyphicon glyphicon-pencil"></span>
                            </button>
                        </div>
                    </div>
                    <form>
                        <SentenceForm/>
                        <h3>Alternativ</h3>
                        <Categories/>
                        <div className="row">
                            <div className="col-xs-2">
                                {this.props.params.editMode === "true"
                                    ? editButton
                                    : newButton}</div>
                            <div className="col-xs-2">
                                <Link to="exercises-overview" type="button" className="btn btn-danger">Avbryt</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default createNewExercisePage;