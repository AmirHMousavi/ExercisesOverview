import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PARTS_OF_SPEECH_CATEGORY_LIST} from '../../category/category-list-for-exercises';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CategoriesList:PARTS_OF_SPEECH_CATEGORY_LIST
        }
    }

    render() {
        let {CategoriesList}=this.props
        if(!Categories)return(<div>
            Loading...
        </div>)
        return (
            <div>
{CategoriesList}
                
            </div>
        );
    }
}

function mapStatetoProps(state){
    return{
        CategoriesList:state.CategoriesList
    }
}
Categories.propType={
    CategoriesList:React.PropTypes.array.isRequired,
    PARTS_OF_SPEECH_CATEGORY_LIST:React.PropTypes.array.isRequired
}

export default connect(mapStatetoProps,{PARTS_OF_SPEECH_CATEGORY_LIST})(Categories);