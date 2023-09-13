import React from "react";
import './Search.css';

export default function Search(){
    return (
        <div>
          <form id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter your city..."
                  class="form-control"
                  id="search-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div>
      );
}