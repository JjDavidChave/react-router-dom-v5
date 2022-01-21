import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutPages from "../pages/AboutPages"
import ContactPage from "../pages/ContactPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"



export default function AppRouter() {
    return (


        <Router>
            <Navbar />
            <Switch>
                <Route path="/about">
                   <AboutPages />
                </Route>
                <Route path="/contact">
                   <ContactPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>


    );
}

