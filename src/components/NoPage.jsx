import { Link } from "react-router-dom";

function NoPage() {
    return (<>
    <h1>Page not found</h1>
    <Link to='/'>Go to home page</Link></>);
}

export default NoPage;