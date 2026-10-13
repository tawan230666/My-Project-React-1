import { useState } from "react";
import User from "./User"
import "./PersonList.css"
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

export default function PersonList({ data = [], deleteUser }) {

    const [show, setShow] = useState(true);

    return (
        <>
            <h1 className="PersonList__title">Employee : {data.length}</h1>
            <button className="PersonList__toggle" onClick={() => setShow(!show)}>
                {show ? <ImEye /> : <ImEyeBlocked />}
            </button>
            <ul>
                {show && data.map((item) => (
                    <User key={item.ID} item={item} deleteUser={deleteUser} />
                ))}
            </ul>
        </>
    );
}