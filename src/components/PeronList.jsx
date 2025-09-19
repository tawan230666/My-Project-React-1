import { useState } from "react";
import User from "./User"
import "./PeronList.css"
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

export default function PeronList({ data = [], deleteUser }) {

    const [show, setShow] = useState(true);

    return (
        <>
            <h1 className="PeronList__title">Employee : {data.length}</h1>
            <button className="PeronList__toggle" onClick={() => setShow(!show)}>
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