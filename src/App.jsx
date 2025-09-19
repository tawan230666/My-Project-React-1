import PeronList from "./components/PeronList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import { useEffect, useState } from "react";
import "./App.css"

export default function App() {

  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("data");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  const deleteUser = (ID) => {
    const result = data.filter((user) => user.ID !== ID);
    setData(result);
  }

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light")

  useEffect(() => {
    localStorage.setItem("mode", theme)
  }, [theme]);

  return (
    <div className={theme}>
      <div className="containerApp">
        <Header theme={theme} setTheme={setTheme} />
        <AddForm data={data} setData={setData} />
        <PeronList data={data} deleteUser={deleteUser} />
      </div>
    </div>
  );
}