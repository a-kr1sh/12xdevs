import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading lable={"Sign in"}/>
                <SubHeading lable={"Enter your credentials to access your account"} />
                <InputBox placeholder={"krish@gmail.com"} lable={"Email"} />
                <InputBox placeholder={"12102006"} lable={"password"} />
                <div className="pt-4">
                    <Button lable={"Sign in"}/>
                </div>
                <BottomWarning lable={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}