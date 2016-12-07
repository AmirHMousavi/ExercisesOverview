import React, {Component,PropTypes} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Alternativ from './alternativ';
import Mening from './mening';
import {fetchOneExercise} from '../../actions/fetchOneExercise';

class createNewExercisePage extends Component {

    componentDidMount(){
        this.props.fetchOneExercise(this.props.params.id);
    }
    constructor(props) {
        super(props);
        this.editExerciseAndBack = this.editExerciseAndBack.bind(this);
        this.goBack=this.goBack.bind(this);
    }
    editExerciseAndBack() {}
    saveAndNewExercise() {}
    goBack(){this.setState({currentExercise:{}});this.context.router.push("/exercises-overview")}

    render() {
        let{editMode}=this.props.params;
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
                    <form>
                        <Mening/>
                        <Alternativ/>
                        <br/>
                        <div className="row">
                            <div className="col-xs-2">
                                {editMode === "true"
                                    ? editButton
                                    : newButton}</div>
                            <div className="col-xs-2">
                                <button onClick={this.goBack} type="button" className="btn btn-danger">Avbryt</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        currentExercise:state.currentExercise
    }
}
createNewExercisePage.propTypes={
    fetchOneExercise:PropTypes.func.isRequired,
    currentExercise:PropTypes.object.isRequired
}
createNewExercisePage.contextTypes = {
    router: PropTypes.object
}

export default connect(mapStateToProps,{fetchOneExercise})(createNewExercisePage);