import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getReactRepositories, handleToggleBtnClick } from "../../actions/repository";
import RepositoryListHeader from "../../components/Repository/RepositoryListHeader/RepositoryListHeader";
import RepositoryListBody from "../../components/Repository/RepositoryListBody/RepositoryListBody";
import ToggleButton from "../../components/ToggleButton/ToggleButton"
import {NUM_ITEMS_COLLAPSE_MODE} from "../../constants";

class RepositoryList extends Component {
    
    componentDidMount() {
        this.props.getReactRepositories();
    }

    /**  
      *  On click of button, expand or collapse the list of respositories by change the state "toggleBtn"
      *  depending on the obj coming from the "ToggleButton" component.
      *  
      **/
    toggleRepositoryList(obj) {
        this.props.handleToggleBtnClick(obj);
    }

    render() {

        return (
            <div>
                <ul>
                    <RepositoryListHeader />
                    <li className="repository-row">
                        <RepositoryListBody repositories={this.props.repositories} mode={this.props.toggleBtn.mode} items={NUM_ITEMS_COLLAPSE_MODE}/>
                    </li>
                </ul>
                <ToggleButton toggleRepositoryList={this.toggleRepositoryList.bind(this)} toggleBtnText={this.props.toggleBtn.text} mode={this.props.toggleBtn.mode} />
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        repositories: state.RepositoriesListReducer,
        toggleBtn: state.BtnTextReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getReactRepositories, handleToggleBtnClick }, dispatch)

}

export default connect(mapStatetoProps, mapDispatchToProps)(RepositoryList);