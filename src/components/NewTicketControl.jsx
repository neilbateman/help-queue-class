import React, { Component } from 'react'
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConformation = this.handleTroubleshootingConformation.bind(this);
        
        }
        handleTroubleshootingConformation(){
            this.setState({formVisibleOnPage: true});
        }
       

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage){
            currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConformation}/>;
        }
        return (
           <div>{currentlyVisibleContent}</div>
        );
    }
}

NewTicketControl.propTypes = {
    onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
