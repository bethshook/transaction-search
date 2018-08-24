import React from 'react';
import '../stylesheets/search.css';
import Transaction from './Transaction';

export class TransactionSearch extends React.Component {

    constructor(){
        super();
        this.state = {
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
    }
    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        let filteredTransactions = this.props.transactions.filter(
            (transaction) => {
                return (transaction.date.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1)
                    || (transaction.amount.toString().indexOf(this.state.search) !== -1)
                    || (transaction.card_last_four.indexOf(this.state.search) !== -1);
            }
        );
        return (
            <div>
                <input id="search-text" type="text" value={this.state.search} onChange={this.updateSearch} />
                <br />
                <div className={'search-container'}>
                    <div className={'heading'}>
                        <div>Amount</div>
                        <div>Date and Time</div>
                        <div>Last Four Digits</div>
                    </div>

                    {filteredTransactions.map((transaction)=> {
                       return <Transaction transaction={transaction} key={transaction.id} />
                       //the first transaction refers to this.props.contact from Contact component
                    }) }
                </div>
            </div>
        )
    }
}

