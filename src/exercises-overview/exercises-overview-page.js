import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ExercisesOverviewList from './exercises-overview-list';
import {fetchAllExercises} from '../actions/fetchAllExercises';

class exercisesOverviewPage extends Component {
    componentDidMount() {
        this
            .props
            .fetchAllExercises();
    }

    render() {
        return (
            <div>
                <h1>Översikt Övningar</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                                <input type="text" className="form-control" placeholder="Search for..."/>
                            </div>
                        </div>
                        <div className="col-sm-1 col-sm-offset-6">
                            <Link to="ny-uppgift">
                                <button type="button" className="btn btn-primary">Ny Ordklassar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <ExercisesOverviewList exercises={this.props.exercises}/>
            </div>
        );
    }
}

//introduce new props to this component
function mapStateToProps(state) {
    return {exercises: state.exercises}
}
//as we intoduce new props, lets document it in proptypes
exercisesOverviewPage.propTypes = {
    exercises: React.PropTypes.object.isRequired,
    fetchAllExercises: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchAllExercises})(exercisesOverviewPage);