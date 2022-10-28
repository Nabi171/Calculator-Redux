import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadButtons, LoadClear, LoadBackSpace, LoadAns } from '../redux/calculatorRedux/calculator.action';
import { CALCULATOR_KEY } from '../redux/calculatorRedux/calculator.reducer';


const CalcualtorApp = () => {
    const dispactch = useDispatch();

    const viewCalculator = useSelector((state) => {
        return state[CALCULATOR_KEY]
    })
    return (
        <div className='mt-2'>
            {/* <pre className='text-white'>{JSON.stringify(viewCalculator)}</pre> */}
            <div>
                <input type="text"
                    placeholder="0"
                    value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                    className="w-100 h-100 rounded border-1 p-5 bg-white text-black fw-bold text-end pe-5"
                />
            </div>
            <div className='row mt-3'>
                {/* <div className='col-lg-4'> */}
                <button onClick={() => dispactch(LoadClear())} className='text-black  w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>AC</button>
                <button onClick={() => dispactch(LoadBackSpace())} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>C</button>
                <button onClick={() => dispactch(LoadButtons('/'))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>/</button>
                <button onClick={() => dispactch(LoadButtons('+'))} className='text-black w-25 h-50 rounded fw-bold fs-2 justify-content-center align-items-center  d-flex shadow'>+</button>

                <button onClick={() => dispactch(LoadButtons(1))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>1</button>
                <button onClick={() => dispactch(LoadButtons(2))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>2</button>
                <button onClick={() => dispactch(LoadButtons(3))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>3</button>
                <button onClick={() => dispactch(LoadButtons('-'))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>-</button>

                <button onClick={() => dispactch(LoadButtons(4))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>4</button>
                <button onClick={() => dispactch(LoadButtons(5))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>5</button>
                <button onClick={() => dispactch(LoadButtons(6))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>6</button>
                <button onClick={() => dispactch(LoadButtons('*'))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>*</button>

                <button onClick={() => dispactch(LoadButtons(7))} className='text-black w-25  rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>7</button>
                <button onClick={() => dispactch(LoadButtons(8))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>8</button>
                <button onClick={() => dispactch(LoadButtons(9))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>9</button>
                <button onClick={() => dispactch(LoadButtons(0))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>0</button>
                <button onClick={() => dispactch(LoadButtons('.'))} className='text-black w-25 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>.</button>
                <button onClick={() => dispactch(LoadAns())} className='text-black w-75 h-25 rounded fw-bold fs-2 justify-content-center align-items-center d-flex shadow'>Answer</button>
                {/* </div> */}
            </div>
        </div>
    );
};

export default CalcualtorApp;