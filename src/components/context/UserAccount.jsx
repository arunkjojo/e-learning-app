import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

const UserAccount = () => {
    const [context] = useContext(Context);
    return (
        <>
            {context.name} | {context.email} | <Link to="/edit-user">Edit</Link>
        </>
    );
};
export default UserAccount;
