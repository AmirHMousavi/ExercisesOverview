import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchAllCategories} from '../../actions/fetchAllCategories';
import {selectCategory} from '../../actions/selectCategory';

class Alternativ extends Component {
    componentWillMount() {
        this
            .props
            .fetchAllCategories();
    }

    categorySelected(category) {
        this
            .props
            .selectCategory(category)
    }
    componentWillReceiveProps(nextProps) {
        let currentExercise = this.props.currentExercise
        if (currentExercise !== nextProps.currentExercise) {
            currentExercise = nextProps.currentExercise
            var category = currentExercise.solutionGroups[0].category;
            this
                .props
                .selectCategory(category);
        }
    }

    renderCategories() {
        return Object
            .keys(this.props.categories)
            .map(theKey => {
                let category = this.props.categories[theKey];
                return (
                    <button
                        key={theKey}
                        type="button"
                        className="btn btn-default col-xs-2"
                        style={{
                        color: category.color,
                        fontWeight: 'bold'
                    }}
                        value={category.value}
                        color={category.color}
                        onClick={() => this.categorySelected(category)}>{category.value}</button>
                );
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">

                    <div className="col-xs-12 col-sm-1">
                        <h3>Alternativ</h3>

                        <div className="container">
                            <div className="col-xs-12">
                                <div className="btn-group" role="group" aria-label="...">
                                    {this.renderCategories()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {currentExercise: state.currentExercise, selectedCategory: state.selectedCategory, categories: state.categories}
}
Alternativ.propTypes = {
    fetchAllCategories: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {selectCategory, fetchAllCategories})(Alternativ)