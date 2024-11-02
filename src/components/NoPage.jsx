import { Link } from "react-router-dom";

function NoPage() {
    return (
    <div id="no-page">
        <h1>Page not found</h1>
        <Link to='/'>Go to home page</Link>
    </div>);
}

export default NoPage;