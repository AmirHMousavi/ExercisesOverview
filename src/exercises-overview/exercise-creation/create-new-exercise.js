import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Alternativ from './alternativ';
import Mening from './mening';
import {fetchOneExercise, dismissCurrentExercise} from '../../actions/fetchOneExercise';
import {getCategories} from '../../actions/getCategories';

class createNewExercisePage extends Component {

    componentWillMount() {
        this.props.fetchOneExercise(this.props.params.id);
        this.props.getCategories();
    }

    
    constructor(props) {
        super(props);
        this.editExerciseAndBack = this
            .editExerciseAndBack
            .bind(this);
        this.goBack = this
            .goBack
            .bind(this);
    }
    editExerciseAndBack() {}
    saveAndNewExercise() {}
    goBack() {
        this
            .props
            .dismissCurrentExercise();
        this
            .context
            .router
            .push("/exercises-overview")
    }

    render() {
        const editeMode = !_.isEmpty(this.props.currentExercise);
        const editButton = (
            <button
                type="button"
                className="btn btn-success"
                onClick={this.editExerciseAndBack}>Uppdatera & Tillbaka
            </button>
        )
        const newButton = (
            <button
                type="button"
                className="btn btn-success"
                onClick={this.saveAndNewExercise()}>Spara & Ny Ordklasser
            </button>
        )
        return (
            <div>
                <h1>Redigera Ordklasser</h1>
                <hr/>
                <div className="container-fluid">
                    <form>
                        <Mening currentExercise={this.props.currentExercise}/>
                        <Alternativ categories={this.props.categories}/>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6">

                                <div className="col-xs-2">
                                    {editeMode
                                        ? editButton
                                        : newButton}</div>
                                <div className="col-xs-1 col-xs-offset-2">
                                    <button onClick={this.goBack} type="button" className="btn btn-danger">Avbryt</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {categories: state.categories,
            currentExercise: state.currentExercise}
}
createNewExercisePage.propTypes = {
    fetchOneExercise: PropTypes.func.isRequired,
    dismissCurrentExercise: PropTypes.func.isRequired,
    currentExercise: PropTypes.object.isRequired,
    categories: React.PropTypes.object.isRequired,
    getCategories: React.PropTypes.func.isRequired
}
createNewExercisePage.contextTypes = {
    router: PropTypes.object
}

export default connect(mapStateToProps, {fetchOneExercise, dismissCurrentExercise,getCategories})(createNewExercisePage);