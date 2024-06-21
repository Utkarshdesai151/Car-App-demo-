import React from 'react';
import CarForm from "./components/carform";
import CarList from "./components/carlist";
import CarSearch from "./components/carsearch";
import CarValue from "./components/carvalue";

function App() {
    return (
        <div className="container is-fluid">
            <section className="section">
                <CarForm />
            </section>
            <section className="section">
                <CarSearch />
            </section>
            <section className="section">
                <CarList />
            </section>
            <section className="section">
                <CarValue />
            </section>
        </div>
    );
}

export default App;
