import React from 'react';
const LearnSection = ({ img, isTransformPosition, styles, ...rest }) => {
    return (
        <section className={`p-5 ${styles.bg}`}>
            <div className="container ">
                <div className="  justify-content-md-around  text-center align-items-center row">
                    {!isTransformPosition ? (
                        <>
                            <Image img={img} />
                            <Contain {...rest} />
                        </>
                    ) : (
                        <>
                            <Contain {...rest} {...styles} />
                            <Image img={img} />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const Image = ({ img }) => {
    return (
        <div className="col-md">
            <img className="img-fluid w-50" src={img} alt="123" />
        </div>
    );
};
const Contain = ({ title, sectext, content, textColor }) => {
    return (
        <div className="col-md">
            <h1 className={`${textColor}`}>{title}</h1>
            <h4 className={`${textColor}`}>{sectext}</h4>
            <p className={`lead ${textColor}`}>{content}</p>
            <a href="#front" className="btn btn-primary mb-3">
                閱讀資訊
            </a>
        </div>
    );
};
export default LearnSection;
