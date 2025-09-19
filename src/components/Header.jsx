import "./Header.css"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function Header(props) {

    const { theme, setTheme } = props;

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <>
            <div className="Header">
                <h1>My Application</h1>
                <span onClick={toggleTheme}>
                    {theme === "light" ? <FaMoon size={30} /> : <FaSun size={30} color="red" />}
                </span>
            </div>
            <hr />
        </>
    );
}