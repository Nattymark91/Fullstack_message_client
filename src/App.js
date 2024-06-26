import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            if (data) {
            user.setUser(data)
            user.setIsAuth(true)
        }}).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return 
    }
        return (
            <Router>
                <NavBar />
                <AppRouter />
            </Router>
        );
});

export default App;