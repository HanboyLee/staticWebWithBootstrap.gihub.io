import React from 'react';

const data = [
    {
        title: '學習成果',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia?',
        icon: 'bi bi-laptop',
        btntext: '更多資訊',
        classes: {
            bgColor: 'bg-dark text-light',
            btnColor: 'btn-primary',
        },
    },
    {
        title: '成果發表',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia?',
        icon: 'bi bi-award-fill',
        btntext: '更多資訊',
        classes: {
            bgColor: 'bg-light text-dark',
            btnColor: 'btn-secondary',
        },
    },
    {
        title: '廠商面試',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia?',
        icon: 'bi bi-people-fill',
        btntext: '更多資訊',
        classes: {
            bgColor: 'bg-dark text-light',
            btnColor: 'btn-primary',
        },
    },
];
const Boxes = () => {
    return (
        <section id="how" className=" p-5">
            <div className="continer">
                <div className="row text-center gap-3 gap-lg-0">
                    {data.map((item) => (
                        <CardItem key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CardItem = ({ title, text, icon, btntext, classes }) => {
    return (
        <div className="col-md">
            <div className={`card ${classes.bgColor}`}>
                <div className="card-body">
                    <h1 className="mb-3">
                        <i className={icon} />
                    </h1>
                    <h3 className=" card-title mb-3">{title}</h3>
                    <p className=" card-text">{text}</p>
                    <a href={`#${title}`} className={`btn ${classes.btnColor}`}>
                        {btntext}
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Boxes;
