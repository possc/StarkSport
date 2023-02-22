import assets from '../../assets';
import './style.scss';

import { route } from '../../routes/configs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../../redux/action';
import { useAccount, useConnectors, useNetwork } from '@starknet-react/core';

const HeaderLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { disconnect } = useConnectors();
    const { address, status } = useAccount();
    const { chain } = useNetwork();

    const navClick = (path) => {
        navigate(path);
    };

    const showSelectModal = () => {
        dispatch(actions.showModalWallet(true));
    };

    // Handle short address type
    const shortAddress = () => {
        if (address) {
            console.log('Current address:', address);
            const firstDigits = address.slice(0, 6);
            const lastDigits = address.slice(-4);

            const resultAddress = firstDigits + '...' + lastDigits;
            return resultAddress;
        }
    };

    return (
        <div>
            {status == 'connected' ? (
                <div className="header-layout row j-between a-center ">
                    <div className="row a-center gap-10">
                        <div style={{ height: 55, width: 55 }}>
                            <img src={assets.images.logo} />
                        </div>
                    </div>
                    <div
                        className="btn"
                        onClick={() => {
                            disconnect();
                        }}
                    >
                        <h5>{shortAddress()}</h5>
                    </div>
                </div>
            ) : (
                <div className="header-layout row j-between a-center">
                    <div className="row a-center gap-10">
                        <div style={{ height: 55, width: 55 }}>
                            <img src={assets.images.logo} />
                        </div>
                    </div>
                    <div
                        className="btn"
                        onClick={() => {
                            showSelectModal();
                        }}
                    >
                        <h5>Connect Wallet</h5>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderLayout;
