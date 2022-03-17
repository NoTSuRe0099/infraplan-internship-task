import { useEffect, useState } from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import Card from "./Components/CardComponent/Card";
import "./App.css";
import logo from "./logo.svg";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [FilterdData, setFilterdData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [info, setInfo] = useState(true);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=15")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.results);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setFilterdData(users);
    }, [users]);

    setTimeout(() => {
        setInfo(false);
    }, 5000);

    const getSearchValues = (value) => {
        if (value !== "") {
            const newData = users.filter((user) => {
                return (
                    user.name.first
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                    user.name.last.toLowerCase().includes(value.toLowerCase())
                );
            });

            if (newData.length === 0) {
                setNotFound(true);
            } else {
                setFilterdData(newData);
                setNotFound(false);
            }
        } else {
            setFilterdData(users);
            setNotFound(false);
        }
    };

    const cards = FilterdData.map((user, key) => {
        return <Card user={user} key={key} />;
    });

    return (
        <>
            {info && (
                <div className="info">
                    Search Users By First or last Name of the user
                    <span onClick={() => setInfo(false)}>X</span>
                </div>
            )}
            <Navbar getSearchValues={getSearchValues} />

            {loading ? (
                <div className="loader">
                    <img src={logo} className="App-logo" alt="logo" />;
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="card-container container">
                    {notFound ? <h1>User Not Found..</h1> : cards}
                </div>
            )}
        </>
    );
}

export default App;
