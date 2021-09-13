import React from "react";

const Pagination = ({prev, next, onPrevius, onNext}) => {

    const handlePrevius = () =>{
        onPrevius();
    }

    const handleNext = () =>{
        onNext();
    }

    return(
        <div>
            <nav>
                <ul className="pagination justify-content-center my-5">
                    {prev ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handlePrevius}>Anterior</button>
                        </li>
                    ): null}
                    {next ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handleNext}>Siguiente</button>
                        </li>
                    ): null}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;