import React from 'react';
import engine from '../asset/images/engine.jpeg';
import BtnTriggerModal from '../components/BtnTriggerModal';

const ShowCase = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <section id="frondend" className=" bg-dark text-light p-5 text-center ">
                <div className="container">
                    <div className=" d-sm-flex justify-content-between ">
                        <div className=" pb-2">
                            <h1>
                                成為 <span className="text-warning">前端</span> 工程師
                            </h1>
                            <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, exercitationem inventore.
                            </p>
                            <button
                                type="button"
                                className="btn btn-info"
                                data-bs-target="#exampleModal"
                                onClick={() => setShow((prev) => !prev)}
                            >
                                加入行列
                            </button>
                        </div>
                        <img src={engine} alt="123" className=" w-50 img-fluid d-none d-sm-block" />
                    </div>
                </div>
            </section>
            <BtnTriggerModal show={show} handleClose={() => setShow(false)} />
        </>
    );
};

export default ShowCase;
