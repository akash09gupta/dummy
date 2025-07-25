import { Link } from "react-router-dom";

function Error() {
    return (
        <>
        <div className="w-50 h-50 p-5">
            <h3>Work in Progress</h3>
            <Link to='/' className="btn btn-info mt-3">Back to Home</Link>
        </div>
        </>
    )
}

export default Error;