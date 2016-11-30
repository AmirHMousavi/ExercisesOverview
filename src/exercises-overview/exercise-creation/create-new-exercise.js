import React, {Component} from 'react';
import {Link} from 'react-router';
import lgaCategories from '../utils/lga-categories';

class createNewExercisePage extends Component {
    editExerciseAndBack(){}
    saveAndNewExercise(){}

    render() {
        const editbutton = (
            <button
                type="button"
                className="btn btn-success"
                onclick={this.editExerciseAndBack()}
                disabled={!this.state.solution.hasValidGroups()}>
                Uppdatera & Tillbaka
            </button>
        )
        const newButton = (
            <button
                type="button"
                className="btn btn-success"
                onclick={this.saveAndNewExercise()}
                disabled={this.state.solution.hasValidGroups()}>
                Spara & Ny Ordklasser
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
                        <input
                            className="form-control"
                            name="sentence-input"
                            type="text"
                            placeholder="Mening"/>
                    </form>
                    <h3>Alternativ</h3>
                    <lgaCategories
                        categoryList={this.exercise.categoryList}
                        solution={this.solution}
                        isSelectable="true"
                        checkResult={this.result}></lgaCategories>
                    <div className="row">
                        <div className="col-xs-2">
                        {this.props.editMode
                            ? editbutton
                            : newButton}</div>
                        <div className="col-xs-2">
                            <Link to="exercises-overview" type="button" className="btn btn-danger">
                            Avbryt</Link>
                        </div>    
                    </div>
                </div>

            </div>
        );
    }
}

export default createNewExercisePage;