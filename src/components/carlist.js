import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removecar } from '../store/slice/carsslice'; // Ensure the correct path

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.list);

  const handleRemove = (id) => {
    dispatch(removecar(id));
  };

  return (
     <div className="container">
      <div className="columns is-multiline">
        {cars.map((car) => (
          <div key={car.id} className="column is-4">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <p><strong>{car.name}</strong> - ${car.cost}</p>
                </div>
                <footer className="card-footer">
                  <button className="button is-danger card-footer-item" onClick={() => handleRemove(car.id)}>Remove</button>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
