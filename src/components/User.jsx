import boy from "../assets/boy.svg"
import girl from "../assets/girl.svg"
import "./User.css"
import { FaDeleteLeft } from "react-icons/fa6";

export default function User({ item, deleteUser }) {
    return (
        <>
            <li>
                <h3 className="User__row">
                    <img className="User__avatar" src={item.Gender === "ชาย" ? boy : girl} width={50} height={50} />
                    {item.Name} | {item.Age} | {item.Gender}
                    <button className="User__del" onClick={() => deleteUser(item.ID)}><FaDeleteLeft /></button>
                </h3>
            </li>
        </>
    );
}