import React from 'react';
import '../stylesheets/ui.scss';
import Transaction from './Transaction';

export class TransactionSearch extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "before state change"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage() {
        this.setState({
            message: "after state change"
        });
    }

    render() {
        return (
            <div>
                <p>test</p>
                <h3>Hello {this.state.message}!</h3>

                <input id="search-text" type="text" onKeyPress={this.updateMessage}/>
                <ul>
                    {this.props.transactions.map((transaction)=> {
                       return <Transaction transaction={transaction} />
                       //the first transaction refers to this.props.contact from Contact component
                    }) }
                </ul>
            </div>
        )
    }
}

