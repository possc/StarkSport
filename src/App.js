import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './layouts/Header';
import { publicRoutes } from './routes';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import React, { useState } from 'react';
import DrawerLayout from './layouts/Drawer';
import NavMobileLayout from './layouts/NavMobile';
import ModalConnectWallet from './layouts/Header/ModalConnectWallet';
import { useEffect } from 'react';

// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

const App = () => {
    const size = useWindowSize();
    const connectors = [
        new InjectedConnector({ options: { id: 'braavos' } }),
        new InjectedConnector({ options: { id: 'argentX' } }),
    ];

    return (
        <StarknetConfig connectors={connectors}>
            <Router>
                <ModalConnectWallet />
                <div className="layout-wrapper">
                    <div className="drawer-content">
                        <DrawerLayout />
                    </div>
                    <div className="content-wrapper">
                        <HeaderLayout />

                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.element;
                                return <Route key={index} path={route.path} element={<Page />}></Route>;
                            })}
                        </Routes>
                    </div>
                    <NavMobileLayout isShow={size.width < 768 ? true : false} />
                </div>
            </Router>
        </StarknetConfig>
    );
};

export default App;
