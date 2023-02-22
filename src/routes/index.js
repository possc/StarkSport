import { ComingSoonPage, FarmsPage, LiquidityPage, NFTPage, PoolsPage, SwapPage, LendingPage, AirdropPage } from '../pages';
import HomePage from '../pages/Home';
import { route } from './configs';

const publicRoutes = [
    { path: route.home, element: HomePage },
    { path: route.nft, element: NFTPage },
    { path: route.airdrop, element: AirdropPage },
    { path: route.swap, element: SwapPage },
    { path: route.liquidity, element: LiquidityPage },
    { path: route.pools, element: PoolsPage },
    { path: route.lending, element: LendingPage },
    { path: route.farms, element: FarmsPage },
    { path: '*', element: ComingSoonPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
