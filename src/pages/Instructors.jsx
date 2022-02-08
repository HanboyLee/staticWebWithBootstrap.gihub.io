import React from "react";
const data = [
    {
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "衛斯理",
        introduce:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita tenetur earum. Aspernatur, ",
    },
    {
        img: "https://randomuser.me/api/portraits/men/12.jpg",
        name: "張大茂",
        introduce:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita tenetur earum. Aspernatur, ",
    },
    {
        img: "https://randomuser.me/api/portraits/men/13.jpg",
        name: "王五強",
        introduce:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita tenetur earum. Aspernatur, ",
    },
    {
        img: "https://randomuser.me/api/portraits/women/96.jpg",
        name: "李五眉",
        introduce:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur expedita tenetur earum. Aspernatur, ",
    },
];
const Instructors = () => {
    return (
        <section id="instructors" className=" p-5 bg-primary">
            <div className=" container">
                <div className="mb-3 lead">
                    <h2 className="text-center">中心師資</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum harum odit voluptate sequi
                        eligendi eos dolor possimus, praesentium repellendus reprehenderit sunt quidem.
                    </p>
                </div>
                <div className="row g-4">
                    {data.map((item) => (
                        <Person key={item.name} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Person = ({ img, name, introduce }) => {
    return (
        <div className=" col-md-6 col-lg-3">
            <div className=" card bg-light">
                <div className=" card-body text-center">
                    <img src={img} className=" rounded-circle img-fluid" alt="123" />
                    <h3>{name}</h3>
                    <p>{introduce}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <a href="#0">
                            <i className="bi bi-twitter text-dark mx-1"></i>
                        </a>
                        <a href="#1">
                            <i className="bi bi-facebook text-dark mx-1"></i>
                        </a>
                        <a href="#2">
                            <i className="bi bi-linkedin text-dark mx-1"></i>
                        </a>
                        <a href="#3" className=" ">
                            <i className="bi bi-whatsapp  text-dark mx-1 "></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
