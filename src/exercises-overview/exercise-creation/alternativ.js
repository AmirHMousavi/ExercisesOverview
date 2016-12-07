import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../../actions/getCategories';

class Alternativ extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedCategory:{}
        }
    }

    componentDidMount() {
        this.props.getCategories();
    }
    categorySelected(category){
        console.log('selected -> ', category);
        this.setState({selectedCategory:category})
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
                        value={category._value}
                        color={category._color}
                        onClick={()=>this.categorySelected(category)}>{category._value}</button>
                );
            });
    }

    render() {
        console.log('state selected', this.state.selectedCategory)
        return (
            <div>
                <h3>Alternativ</h3>
            
            <div className="container">
                <div className="col-xs-12">
                    <div className="btn-group" role="group" aria-label="...">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {categories: state.categories,
            selectedCategory:state.selectedCategory}
}
Alternativ.propType = {
    selectedCategory:React.PropTypes.object.isRequired,
    categories: React.PropTypes.object.isRequired,
    getCategories: React.PropTypes.func.isRequired
}

export default connect(mapStatetoProps, {getCategories})(Alternativ);