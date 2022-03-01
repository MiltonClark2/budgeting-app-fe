import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    // const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const API = process.env.REACT_APP_API_URL;

        axios.get(API + "/transactions")
            .then((res) => {
                setTransactions(res.data);
            }).catch((err) => {
                throw err;
            });
    }, []);

    let allTransactions = transactions.map((transaction, index) => {
        return(
            <li key={index}>
                <Link to={`/transactions/${index}`}><h3>{transaction.item_name}</h3></Link>
                <div>
                    {transaction.date}
                </div>
                <div>
                    {transaction.amount}
                </div>
            </li>
        );
    });

    return(
        <div>
            <h1>Transactions History</h1>
            <ul>
                {allTransactions}
            </ul>
        </div>
    );
};

export default Transactions;