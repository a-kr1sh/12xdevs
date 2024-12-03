import { useState } from "react"
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom"
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";

export const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading lable={"Sign up"} />

                <SubHeading lable={"Enter your information"}></SubHeading>

                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} placeholder="Jhon" lable={"First Name"}/>
                

                <InputBox onChange={e => {
                    setLastName(e.target.value);
                }} placeholder="Doe" lable={"Last Name"}/>
                

                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} placeholder="krish@gmail.com" lable={"Email"}/>
                

                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="12102006" lable={"password"}/>
                
                <div>
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        });

                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                    }} lable={"Sign up"}/>
                    <BottomWarning lable={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    </div>
}