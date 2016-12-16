import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Alternativ from './alternativ';
import Mening from './mening';
import {fetchOneExercise, dismissCurrentExercise} from '../../actions/fetchOneExercise';
import {fetchAllCategories} from '../../actions/fetchAllCategories';
import {selectCategory, dismissSelectedCategory} from '../../actions/selectCategory';
import {selectWordIndex, dismissSelectedWordIndex} from '../../actions/selectWordIndex';
import {updateCurrentSentence, updateCurrentWordIndex, updateCurrentCategory,updateCurrentExercise} from '../../actions/updateCurrentExersice';
import {dismissProvidedSentence} from '../../actions/sentenceProvided';

class createNewExercisePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invalid: false
        }
        this.editExerciseAndBack = this.editExerciseAndBack.bind(this);
        this.saveAndNewExercise = this.saveAndNewExercise.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    componentDidMount() {
        var id = this.props.params.id;
        if (id !== '-1') {
            this.props.fetchOneExercise(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.selectedCategory!==nextProps.selectedCategory){
            this.props.updateCurrentCategory(nextProps.selectedCategory);
        }
        if(this.props.providedSentence!==nextProps.providedSentence){
            this.props.updateCurrentSentence(nextProps.providedSentence.sentence);
        }
        if(this.props.selectedWordIndex!==nextProps.selectedWordIndex){
           this.props.updateCurrentWordIndex(nextProps.selectedWordIndex.selectedWordIndex);
        }
    }
    editExerciseAndBack(){
        this.setState({isLoading:true}); 
        this.props.updateCurrentExercise(this.props.currentExercise);
        this.goBack()
    }
    saveAndNewExercise() {
        this.setState({isLoading:true})
    }

    goBack() {
        this.props.dismissCurrentExercise();
        this.props.dismissSelectedCategory();
        this.props.dismissSelectedWordIndex();
        this.props.dismissProvidedSentence();
        this.context.router.push("/exercises-overview");
    }

    render() {
        let {editeMode} = this.props.mode;
        console.log('editemode ->',editeMode);
        const editButton = (
            <button
                type="button"
                className="btn btn-success"
                onClick={this.editExerciseAndBack}
                disabled={ this.state.invalid}>Uppdatera & Tillbaka
            </button>
        )
        const newButton = (
            <button
                type="button"
                className="btn btn-success"
                onClick={this.saveAndNewExercise}
                disabled={ this.state.invalid}>Spara & Ny Ordklasser
            </button>
        )
        return (
            <div>
                <h1>Redigera Ordklasser</h1>
                <hr/>
                <div className="container-fluid">
                        <Mening invalid={this.state.invalid}/>
                        <Alternativ invalid={this.state.invalid}/>
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
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {categories: state.categories, currentExercise: state.currentExercise, selectedCategory: state.selectedCategory, selectedWordIndex: state.selectedWordIndex, providedSentence: state.providedSentence, mode:state.mode}
}
createNewExercisePage.propTypes = {
    currentExercise: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    selectedCategory: PropTypes.object.isRequired,
    selectedWordIndex: PropTypes.object.isRequired,
    providedSentence: PropTypes.object.isRequired,
    /*-------------------------------------------*/
    dismissSelectedWordIndex: PropTypes.func.isRequired,
    dismissSelectedCategory: PropTypes.func.isRequired,
    selectWordIndex: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    fetchOneExercise: PropTypes.func.isRequired,
    fetchAllCategories: PropTypes.func.isRequired,
    dismissCurrentExercise: PropTypes.func.isRequired,
    updateCurrentSentence: PropTypes.func.isRequired,
    updateCurrentWordIndex: PropTypes.func.isRequired,
    updateCurrentCategory: PropTypes.func.isRequired,
    dismissProvidedSentence: PropTypes.func.isRequired,
    updateCurrentExercise: PropTypes.func.isRequired

}
createNewExercisePage.contextTypes = {
    router: PropTypes.object
}

export default connect(mapStateToProps, {
    fetchOneExercise,
    dismissCurrentExercise,
    fetchAllCategories,
    dismissSelectedCategory,
    dismissSelectedWordIndex,
    dismissProvidedSentence,
    selectCategory,
    selectWordIndex,
    updateCurrentSentence,
    updateCurrentWordIndex,
    updateCurrentCategory,
    updateCurrentExercise
})(createNewExercisePage);