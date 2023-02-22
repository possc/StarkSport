import 'antd/dist/antd.css';
import './style.scss';
import Modal from 'antd/lib/modal/Modal';
import assets from '../../../assets';
import React, { useEffect } from 'react';

const ModalSelectToken = (props) => {
    const { isShow, setIsShow } = props;

    const mockDataToken = [
        {
            name: 'BTC',
            icon: assets.svg.btc,
            select: true,
        },
        {
            name: 'ETH',
            icon: assets.svg.eth,
            select: true,
        },
        {
            name: 'Starknet',
            icon: assets.images.starknet_logo,
            select: true,
        },
        {
            name: 'SFN',
            icon: assets.images.logo,
            select: true,
        },
    ];

    return (
        <Modal
            open={isShow}
            footer={null}
            centered
            bodyStyle={{
                backgroundColor: '#000',
                overflow: 'auto',
                gap: 20,
            }}
            onCancel={() => {
                setIsShow(false);
            }}
        >
            <div className="select-token-modal">
                <div className="header-modal-wrapper">
                    <h3>Select a token</h3>

                    <div className="search-wrapper">
                        <img src={assets.svg.search} alt="search" />
                        <input placeholder="Search name" />
                    </div>
                </div>

                <div className="line"></div>

                <div className="list-wrapper">
                    {mockDataToken.map((item, index) => (
                        <div className="row gap-10 a-center item-wrapper ">
                            <img src={item.icon} alt={item.name} style={{ height: 30, width: 30 }} />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default ModalSelectToken;
