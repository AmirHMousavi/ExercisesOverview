import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ExercisesOverviewList from './exercises-overview-list';
import {fetchAllExercises} from '../actions/fetchAllExercises';
import {setEditeMode} from '../actions/mode';

class exercisesOverviewPage extends Component {
    componentWillMount() {
        this.props.fetchAllExercises();
    }
    setEditeMode(){
        this.props.setEditeMode(false);
    }

    render() {
        return (
            <div className="container">
                <h1>Översikt Övningar</h1>
                <div className="row row-content">
                    <div className="col-xs-12">
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
                            <div className="dropdown">
                            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Ny uppgift
                                <span className="caret" style={{margin:5+'px'}}></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><Link to="ny-uppgift/-1" onClick={this.setEditeMode.bind(this)}>Ny Ordklassar</Link></li>
                                <li className="disabled"><a href="#">another type1</a></li>
                                <li className="disabled"><a href="#">another type 2</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <ExercisesOverviewList/>
            </div>
        );
    }
}


//as we intoduce new props, lets document it in proptypes
exercisesOverviewPage.propTypes = {
    fetchAllExercises: PropTypes.func.isRequired,
    setEditeMode: PropTypes.func.isRequired

}

export default connect(null,{fetchAllExercises,setEditeMode})(exercisesOverviewPage);