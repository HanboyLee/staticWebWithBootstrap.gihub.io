import React from 'react';
const data = [
    {
        title: ' 成為前端需要會什麼技能',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the',
    },
    {
        title: ' 成為後端需要會什麼技能',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the',
    },
    {
        title: ' 成為架構師需要會什麼技能',
        content: 'Placeholder content for this accordion, which is intended to demonstrate the',
    },
];
const Question = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className="accordion accordion-flush " id="accordionFlushExample">
                    {data.map((item) => (
                        <AccordionItem key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Question;

const AccordionItem = ({ title, content }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button
                    className={`accordion-button collapsed ${open ? 'show' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {title}
                </button>
            </h2>
            <div
                id="flush-collapseOne"
                className={`accordion-collapse collapse h-auto ${open ? 'show' : ''}`}
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body">{content}</div>
            </div>
        </div>
    );
};
