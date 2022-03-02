// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TransactionEditForm = () => {
    let { index } = useParams();

    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
            .then((res) => {
                setTransaction(res.data);
            }).catch((err) => {
                navigate("/not-found");
            });
    }, [index]);

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
            .then((res) => {
                navigate("/transactions");
            }).catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="date"
                />
                <label htmlFor="item_name">Name</label>
                <input
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="name" 
                    required
                />
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="numeric"
                    onChange={handleTextChange}
                    placeholder="amount"
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
                    placeholder="category"
                />
                <br />
                <input type="submit" />  
            </form>
            <Link to={`/transactions/${index}`}>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default TransactionEditForm;