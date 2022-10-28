import React from 'react';

const CalcualtorApp = () => {
    return (
        <div className='mt-2'>
            <div>
                <input type="text"
                    placeholder="0"
                    className="w-100 h-100 rounded border-1 p-5 bg-white text-black fw-bold text-end pe-5"
                />
            </div>
            <div className='row mt-3'>
                {/* <div className='col-lg-4'> */}
                <button className='text-black  w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>.</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>C</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>/</button>
                <button className='text-black w-25 h-50 rounded fw-bold fs-2 justify-content-center align-items-center  d-flex shadow'>+</button>

                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>1</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>2</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>3</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>-</button>

                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>4</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>5</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>6</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>*</button>

                <button className='text-black w-25  rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>7</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>8</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>9</button>
                <button className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>0</button>
                <button className='text-black w-100 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>AC</button>
                {/* </div> */}
            </div>
        </div>
    );
};

export default CalcualtorApp;