import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", paddingTop:"150px" }}> Lemon Gautam </h1>
            <h2 style={{ textAlign: "center"}}> Error 404 </h2>
            <p style = {{textAlign: "center"}}><Link to="/">Back to home</Link></p>
            
        </>

    );
}

export default ErrorPage;