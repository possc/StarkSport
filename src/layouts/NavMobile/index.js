import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets';
import { route } from '../../routes/configs';
import DrawerLayout from '../Drawer';
import './style.scss';

const NavMobileLayout = (props) => {
    const { isShow } = props;
    const navigate = useNavigate();
    const [isShowDrawer, setIsShowDrawer] = useState(false);

    const navClick = (path) => {
        navigate(path);
    };

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <>
            {isShow && (
                <div className="nav-mobile-layout">
                    <div className="draw-w">
                        <DrawerLayout mobile isShow={isShowDrawer} setIsShow={setIsShowDrawer} />
                    </div>

                    <div
                        className="icon-wrapper col gap-5"
                        onClick={() => {
                            setIsShowDrawer(!isShowDrawer);
                        }}
                    >
                        <img src={assets.svg.menu} />
                        <h5>Menu</h5>
                    </div>

                    <div
                        className="icon-wrapper col gap-5"
                        onClick={() => {
                            navClick(route.nft);
                        }}
                    >
                        <img src={assets.svg.nft} />
                        <h5>NFTs</h5>
                    </div>

                    <div
                        className="icon-wrapper col gap-5"
                        onClick={() => {
                            navClick(route.swap);
                        }}
                    >
                        <img src={assets.svg.swap} />
                        <h5>Swap</h5>
                    </div>

                    <div
                        className="icon-wrapper col gap-5"
                        onClick={() => {
                            navClick(route.pools);
                        }}
                    >
                        <img src={assets.svg.pools} />
                        <h5>Pools</h5>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavMobileLayout;
