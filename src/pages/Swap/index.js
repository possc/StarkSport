import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets';
import Footer from '../../layouts/Footer';
import { route } from '../../routes/configs';
import ModalSelectToken from './ModalSelectToken';
import './style.scss';

const FormSwap = () => {
    const [isShow, setIsShow] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="form-wrapper col gap-10" style={{ gap: 2 }}>
            <ModalSelectToken isShow={isShow} setIsShow={setIsShow} />
            <div className="row j-between" style={{ margin: '10px 0' }}>
                <div className="row gap-10" style={{ marginBottom: 10 }}>
                    <h4 className="hover-primary-color ">Swap</h4>
                    <h4
                        className="hover-primary-color title-noactive"
                        onClick={() => {
                            navigate(route.liquidity);
                        }}
                    >
                        Liquidity
                    </h4>
                </div>
                <div className="row gap-10" style={{ marginBottom: 10 }}>
                    <h3>Slippage:</h3>
                    <input className="slippage-input" placeholder="0.5" type={'number'}></input>
                    <h3>%</h3>
                </div>
                {/* <div style={{ height: 20, width: 20 }}>
                    <img src={assets.svg.setting} />
                </div> */}
            </div>

            <div className="input-wrapper">
                <div style={{ padding: 12 }}>
                    <div className="row">
                        <input placeholder="0.0" type={'number'} />
                        <div
                            className="row gap-5 option-wrapper a-center p-10"
                            onClick={() => {
                                setIsShow(true);
                            }}
                        >
                            <img src={assets.images.logo} style={{ height: 30, width: 30 }} alt="eth_icon" />
                            <h4>SFN</h4>
                            <img src={assets.svg.down_arrow} style={{ height: 20, width: 20 }} alt="down_arrow_icon" />
                        </div>
                    </div>
                    <div className="input-balance-wrapper">
                        <p>Balance: 168.56</p>
                    </div>
                </div>
            </div>

            <div
                className="center icon-swap-wrapper"
                style={{ marginTop: -20, marginBottom: -20, zIndex: 99, border: '4px solid #26193c' }}
            >
                <img src={assets.svg.swap} style={{ height: 24, width: 24 }} alt="swap_icon" />
            </div>

            <div className="input-wrapper">
                <div style={{ padding: 12 }}>
                    <div className="row">
                        <h4>~ 0.0</h4>
                        <div
                            className="row gap-5 option-wrapper a-center p-10"
                            onClick={() => {
                                setIsShow(true);
                            }}
                        >
                            <img src={assets.svg.eth} style={{ height: 30, width: 30 }} alt="eth_icon" />
                            <h4>ETH</h4>
                            <img src={assets.svg.down_arrow} style={{ height: 20, width: 20 }} alt="down_arrow_icon" />
                        </div>
                    </div>
                    <div className="input-balance-wrapper">
                        <p>Balance: 0</p>
                    </div>
                </div>
            </div>

            <div className="btn" style={{ marginTop: 20 }}>
                <h4>Swap</h4>
            </div>
        </div>
    );
};

const SwapPage = () => {
    return (
        <div className="swap-page">
            <FormSwap />
            <Footer />
        </div>
    );
};

export default SwapPage;
