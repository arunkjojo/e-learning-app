import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './HOC';

const StocksData = [
    {
        id: 1,
        name: 'TCS'

    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
];
const UsersData = [
    {
        id: 1,
        name: 'Arun'

    },
    {
        id: 2,
        name: 'Alphy'
    },
    {
        id: 3,
        name: 'Abel'
    }
];

const Stocks = Hoc(
    StockList,
    StocksData
);

const Users = Hoc(
    UserList,
    UsersData
);


export default class HigherOrderComponent extends Component {
    render() {
        return (
            <>
                <h3>HOC - Higher Order Component</h3>
                <div style={{background:'pink'}}>
                    <h3>User List</h3>
                    <Users />

                </div>
                <div style={{background:'palegreen'}}>
                    <h3>Stock List</h3>
                    <Stocks />
                </div>
            </>
        )
    }
}