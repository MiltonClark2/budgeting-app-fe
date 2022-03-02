// DEPENDENCIES
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const TransactionNewForm = () => {
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
            .then((res) => {
                navigate("/transactions");
            }).catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="item_name">Item Name</label>
                <input
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Transaction Name" 
                    required
                />
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="numeric"
                    onChange={handleTextChange}
                    placeholder="Transaction Amount"
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Transaction Date"
                />
                <label htmlFor="from">From</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Who the transaction is from"
                />
                <label htmlFor="category">category</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Transaction Category"
                />
                <br />
                <input type="submit" />  
            </form>
            <Link to={'/transactions'}>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default TransactionNewForm;