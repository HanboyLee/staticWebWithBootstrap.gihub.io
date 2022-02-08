import React from 'react';
import './ShowCase.scss';
const NewLetter = () => {
    return (
        <section className="bg-primary text-light p-5">
            <div className="container">
                <div className="d-md-flex justify-content-between justify-content-md-center  align-items-center">
                    <label htmlFor="inputctl">
                        <h3 className="mb-3 me-md-3 mb-md-0">輸入信箱與我們聯繫</h3>
                    </label>
                    <div className=" input-group news-input ">
                        <input id="inputctl" type="text" className="form-control " placeholder="輸入信箱" />
                        <button type="button" name="" id="" className="btn btn-dark btn-lg ">
                            送出
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewLetter;
