import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets';
import { route } from '../../routes/configs';
import './style.scss';

const DrawerLayout = (props) => {
    const { mobile, isShow, setIsShow } = props;
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleDrawerToggle = () => {
        if (mobile) {
            setIsShow(!isShow);
        } else {
            setDrawerOpen(!drawerOpen);
        }
    };

    const navClick = (path) => {
        navigate(path);
        if (mobile) {
            setIsShow(false);
        }
    };

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div
            className={`drawer-layout col gap-10 ${!drawerOpen && 'drawer-layout-less'} ${!isShow && mobile && 'no-show'
                }`}
        >
            <div className="row gap-20 a-center">
                <div
                    className="icon-wrapper"
                    onClick={() => {
                        handleDrawerToggle();
                    }}
                >
                    <img src={assets.svg.menu} />
                </div>
                <div className="project-name">
                    <p>Stark Sport</p>
                </div>
            </div>

            <div style={{ height: 30 }} />

            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.home);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.home} />
                </div>
                <h4 className="title">Home</h4>
            </div>

            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.nft);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.nft} />
                </div>
                <h4 className="title">NFTs Event</h4>
            </div>

            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.airdrop);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.nft} />
                </div>
                <h4 className="title">SFN Airdrop</h4>
            </div>

            {/* <div
                className="nav-wrapper"
                onClick={() => {
                    openInNewTab('https://starksport.io');
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.sport} />
                </div>
                <h4 className="title">Sport</h4>
            </div> */}

            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.swap);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.swap} />
                </div>
                <h4 className="title">Swap</h4>
            </div>

            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.liquidity);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.liquidity} />
                </div>
                <h4 className="title">Liquidity</h4>
            </div>

            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.pools);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.pools} />
                </div>
                <h4 className="title">Pools</h4>
            </div>
            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.farms);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.icon_box} />
                </div>
                <h4 className="title">Yield Farms</h4>
            </div>
            <div
                className="nav-wrapper"
                onClick={() => {
                    navClick(route.lending);
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.icon_box} />
                </div>
                <h4 className="title">Lending network</h4>
            </div>
            <div
                className="nav-wrapper"
                onClick={() => {
                    openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                }}
            >
                <div className="icon-wrapper">
                    <img src={assets.svg.icon_box} />
                </div>
                <h4 className="title">Docs</h4>
            </div>
        </div>
    );
};

export default DrawerLayout;
