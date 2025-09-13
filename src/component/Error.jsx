import { Link } from "react-router-dom";

function Error() {
    return (
        <>
        <div className="w-100 vh-100 p-5 bg-black text-white">
            <h3>This Route Not Found</h3>
            <Link to='/' className="btn btn-info mt-3">Back to Home</Link>
        </div>
        </>
    )
}

export default Error;