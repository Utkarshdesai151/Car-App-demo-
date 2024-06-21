import React from 'react';
import { useDispatch } from 'react-redux';
import { addcar } from '../store/slice/carsslice';

const CarForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const car = {
            id: new Date().getTime(),
            name: event.target.name.value,
            cost: event.target.cost.value,
        };
        dispatch(addcar(car));
    };

    return (
        <form onSubmit={handleSubmit} className="box">
            <div className="field">
                <label className="label">Car Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" placeholder="Car Name" required />
                </div>
            </div>

            <div className="field">
                <label className="label">Car Cost</label>
                <div className="control">
                    <input className="input" type="number" name="cost" placeholder="Car Cost" required />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-primary" type="submit">Add Car</button>
                </div>
            </div>
        </form>
    );
};

export default CarForm;
