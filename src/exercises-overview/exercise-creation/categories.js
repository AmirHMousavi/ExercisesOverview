import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../../actions/getCategories';

class Categories extends Component {
    componentDidMount() {
        this.props.getCategories();
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
                        style={{color:category._color,fontWeight:'bold'}}
                        value={category._value}>{category._value}</button>
                );
            });
    }

    render() {
        return (
            <div>
                <div className="col-xs-12">
                    <div className=" col-xs-10 col-xs-offset-1 btn-group" role="group" aria-label="...">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {categories: state.categories}
}
Categories.propType = {
    categories: React.PropTypes.object.isRequired,
    getCategories: React.PropTypes.func.isRequired
}

export default connect(mapStatetoProps, {getCategories})(Categories);