import { Link } from "react-router-dom";

export function BottomWarning({label, buttonText, to}){
    return <div>
        <div>
            { label }
        </div>
        <Link>
            { buttonText }
        </Link>
    </div>
}