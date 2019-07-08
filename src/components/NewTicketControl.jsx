import React, { Component } from 'react'
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

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
            currentlyVisibleContent = <NewTicketForm />;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConformation}/>;
        }
        return (
           <div>{currentlyVisibleContent}</div>
        );
    }
}

export default NewTicketControl;
