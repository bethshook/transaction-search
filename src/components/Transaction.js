import React from 'react';

class Transaction extends React.Component{
    render(){
        return (
                <div className={'transaction'}>
                    <div>${Number.parseFloat(this.props.transaction.amount).toFixed(2)}</div>
                    <div>{this.props.transaction.date}</div>
                    <div>{this.props.transaction.card_last_four}</div>
                </div>
        )
    }
}

export default Transaction;