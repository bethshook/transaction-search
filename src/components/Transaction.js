import React from 'react';

class Transaction extends React.Component{
    render(){
        return (
                <li>{this.props.transaction.amount}</li>
        )
    }
}

export default Transaction;