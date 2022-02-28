import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
            <h1>Budget App</h1>
            <button>
                <Link to="/transactions">All Transactions</Link>
            </button>
            <h3>
                <Link to="/">Home</Link>
            </h3>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
            <h4>
                Account Total: $1000.00
            </h4>
        </nav>
    );
};
