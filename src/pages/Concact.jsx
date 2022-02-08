import React from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import './Concact.scss';
import { AMAPKEY } from '../config/keys';
const Concact = () => {
    const [map, setMap] = React.useState();
    React.useEffect(() => {
        AMapLoader.load(AMAPKEY)
            .then((AMap) => {
                console.log(AMap);
                let map = new AMap.Map('amapContainer', {
                    viewMode: '3D',
                    zoom: 5,
                    center: [105.602725, 37.076636],
                });
                setMap(map);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    return (
        <section className="p-5 ">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-6 col-12 ">
                        <h3 className="text-center ">聯絡方式</h3>
                        <ul className="list-group list-group-flush lead">
                            <li className="list-group-item">地址：金山市厚德區不堪目路10號之1</li>
                            <li className="list-group-item">招生電話：15215266665</li>
                            <li className="list-group-item">公司電話：15215266665</li>
                            <li className="list-group-item">信箱：abc@qq.com</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-12 h-auto rounded">
                        <div id="amapContainer" className="map "></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concact;
