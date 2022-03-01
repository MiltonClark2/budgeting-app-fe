// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TransactionDetails = () => {
    const [transaction, setTransaction] = useState({});
    const {index} = useParams();

    let API = process.env.REACT_APP_API_URL;

    let navigate = useNavigate();
    useEffect(() => {
        axios.get(API + "/transactions/" + index)
        .then((res) => {
            setTransaction(res.data);
        });
    }, [API, index]);

    const handleDelete = () => {
        axios
            .delete(API + "/transactions/" + index)
            .then((res) => {
                navigate("/transactions");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="transactionDetailsContainer">
            <ul>
                <li>{transaction.item_name}</li>
                <li>{transaction.amount}</li>
                <li>{transaction.date}</li>
                <li>{transaction.from}</li>
                <li>{transaction.category}</li>
            </ul>
            <Link to={'/transactions'}>
                <button>Back</button>
            </Link>
            <Link to={`/transactions/${index}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TransactionDetails;