import { useState } from "react";
import "./AddForm.css"

export default function AddForm(props) {

    const { data, setData } = props;

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("ชาย");

    const savedata = (e) => {
        e.preventDefault()
        const user = {
            ID: crypto.randomUUID(),
            Name: name,
            Age: Number(age),
            Gender: gender
        }
        setData([...data,user]);
        setName("");
        setAge();
        setGender("ชาย");
    }

    return (
        <>
            <section>
                <form onSubmit={savedata}>
                    <label>ใส่ข้อมูล : </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option>ชาย</option>
                        <option>หญิง</option>
                    </select>
                    <button className="btnHeader" type="submit" disabled={name.trim() === "" || age===""}>บันทึก</button>
                </form>
            </section>
        </>
    );
}