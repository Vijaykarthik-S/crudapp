import React, {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";
import Department from "./Departmentcrud";


export default function Login(){
    const [username, setUsername] = useState("");
    const [userRole, setUserRole] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "testuser" && password === "testpassword" && userRole==="FSD"){
            login();
            navigate("/departments");

        }
        else{
            alert("Invalid Credentials");
        }
    }
    return(
        <>
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input className="form-control" type="text" 
                        value={username} 
                        onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text" value={password} 
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input className="form-control" type="text" value={userRole} 
                        onChange={(e)=>setUserRole(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>

                </form>
            </div>
            
            
        </>
    )
}































