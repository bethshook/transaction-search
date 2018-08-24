import React from 'react'
import { TransactionSearch } from './components/TransactionSearch';
import ReactDOM from 'react-dom';


window.React = React

ReactDOM.render(
	<TransactionSearch transactions = {[
        { id: 4, amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
        { id: 7, amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
        { id: 8, amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
        { id: 9, amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
        { id: 10, amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
        { id: 5, amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
        { id: 2, amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
        { id: 1, amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
        { id: 3, amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
        { id: 6, amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
        ].sort((a, b) => a.id > b.id)} />,

	document.getElementById('react-container')
)


