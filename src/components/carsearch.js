// src/components/CarSearch.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store/slice/carsslice';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (event) => {
    const { value } = event.target;
    dispatch(changeSearchTerm(value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Search</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
                placeholder="Search Cars"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarSearch;
