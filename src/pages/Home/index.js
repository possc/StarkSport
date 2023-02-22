import assets from '../../assets';
import './style.scss';
import { Timeline } from 'antd';
import { useNavigate } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import { route } from '../../routes/configs';
import { useEffect, useState } from 'react';

const mockData = [
    {
        id: 1,
        title: 'Arsenal',
        src: assets.images.logoFootball.as,
        nftAddress: '0x03fd9745ddc460c41c529c8d115436bd8ef03e6daf96e10fe69e113c35272d5b',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 2,
        title: 'Manchester City',
        src: assets.images.logoFootball.mc,
        nftAddress: '0x07d1cd99140a68a97bc31f4af67aa345d4954ac74f8ed5cee8aecfcf1a47aaef',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 3,
        title: 'Manchester United',
        src: assets.images.logoFootball.mu,
        nftAddress: '0x00d9f0171b08ada07093668e9469074923d4e05ada2d5f4d0ab954ad54808246',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 4,
        title: 'Newcastle  United',
        src: assets.images.logoFootball.nu,
        nftAddress: '0x016b210bdbf6d4bb969453bd4d5a4728c83d211e578ba8fcdd7fa275e608e9bf',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 5,
        title: 'Tottenham Hotspur',
        src: assets.images.logoFootball.th,
        nftAddress: '0x038f75ea8506f308836eeebfe4f16114d23e9aa3bd36a3078779d8cf51368996',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 6,
        title: 'Brighton',
        src: assets.images.logoFootball.bt,
        nftAddress: '0x07bfbf04f487afa389767c34166b6964873f1c7da7153db1caf830ddf3689c0e',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 7,
        title: 'Fulham',
        src: assets.images.logoFootball.fh,
        nftAddress: '0x50141bc7b1bd13b4df8961a4f84211256328ac7d1604269a875c0618dadcbb8',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 8,
        title: 'Brentford',
        src: assets.images.logoFootball.bf,
        nftAddress: '0x7c61a34927db89061fc15461a39cd4af189b722eb5e01c75d11a4f053a84802',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 9,
        title: 'Liverpool',
        src: assets.images.logoFootball.lp,
        nftAddress: '0x2af36f9f76d00325c778c6d61245f1f8f42a591253a7bbf235b656c16068d13',
        cost: 3,
        costInWei: '1300000000000000',
    },
    {
        id: 10,
        title: 'Chelsea',
        src: assets.images.logoFootball.cs,
        nftAddress: '0x12b5ed796d5ade77982dc49736ea61d8ac4afd7f8afc3a2e7559ac7048fa1e4',
        cost: 3,
        costInWei: '1300000000000000',
    },
];

const mockTrending = [
    {
        name: 'BTC',
        id: 'bitcoin',
        src: assets.svg.btc,
        price: 0,
        toFixed: 2,
    },
    {
        name: 'ETH',
        id: 'ethereum',
        src: assets.svg.eth,
        price: 0,
        toFixed: 2,
    },
    {
        name: 'BNB',
        id: 'binance-coin',
        src: assets.images.bnb_icon,
        price: 0,
        toFixed: 2,
    },
    {
        name: 'DOGE',
        id: 'dogecoin',
        src: assets.images.doge,
        price: 0,
        toFixed: 5,
    },
    {
        name: 'FTM',
        id: 'fantom',
        src: assets.images.ftm,
        price: 0,
        toFixed: 5,
    },
    {
        name: 'SHIB',
        id: 'shiba-inu',
        src: assets.images.shib,
        price: 0,
        toFixed: 5,
    },
    {
        name: 'ADA',
        id: 'cardano',
        src: assets.images.ada,
        price: 0,
        toFixed: 5,
    },
    {
        name: 'XRP',
        id: 'xrp',
        src: assets.images.xrp,
        price: 0,
        toFixed: 5,
    },
];

const DappCard = ({ title, subTitle, bg, type, title1, title2, title3 }) => (
    <div className="dapp-card">
        <img className="image-bg" src={bg} />
        <div className="image-cover" />

        <div className="col gap-10">
            <h3 className="dapp-card-title-1">{title}</h3>
            <h3 className="dapp-card-title-2">{subTitle}</h3>
        </div>

        <div className="col gap-20">
            <div className="sub-card row a-center gap-30">
                <div className="row">
                    {type === 1 || type === 3 ? (
                        <div className="row">
                            <img style={{ height: 30, width: 30, zIndex: 1 }} src={assets.svg.eth} />
                            <img style={{ height: 30, width: 30, marginLeft: -10 }} src={assets.images.wbtc} />
                        </div>
                    ) : type == 2 ? (
                        <img style={{ height: 30, width: 30 }} src={assets.images.logo} />
                    ) : (
                        <img style={{ height: 30, width: 30 }} src={assets.images.logo} />
                    )}
                    {type !== 2 && (
                        <>
                            <img style={{ height: 30, width: 30 }} src={assets.svg.arrow_right} />
                            <img style={{ height: 30, width: 30 }} src={assets.images.usdc} />
                        </>
                    )}
                </div>

                <div>
                    <h4 style={{ fontWeight: 700 }}>{title1}</h4>
                    <h5>APR: 0%</h5>
                </div>
            </div>
            <div className="sub-card row a-center gap-30">
                <div className="row">
                    {type === 1 || type === 3 ? (
                        <div className="row">
                            <img style={{ height: 30, width: 30, zIndex: 1 }} src={assets.svg.eth} />
                            <img style={{ height: 30, width: 30, marginLeft: -10 }} src={assets.images.usdc} />
                        </div>
                    ) : type === 2 ? (
                        <img style={{ height: 30, width: 30 }} src={assets.images.usdc} />
                    ) : (
                        <img style={{ height: 30, width: 30 }} src={assets.images.logo} />
                    )}
                    {type !== 2 && (
                        <>
                            <img style={{ height: 30, width: 30 }} src={assets.svg.arrow_right} />
                            <img style={{ height: 30, width: 30 }} src={assets.images.usdt} />
                        </>
                    )}
                </div>

                <div>
                    <h4 style={{ fontWeight: 700 }}>{title2}</h4>
                    <h5>APR: 0%</h5>
                </div>
            </div>
            <div className="sub-card row a-center gap-30">
                <div className="row">
                    {type === 1 || type === 3 ? (
                        <div className="row">
                            <img style={{ height: 30, width: 30, zIndex: 1 }} src={assets.images.dai} />
                            <img style={{ height: 30, width: 30, marginLeft: -10 }} src={assets.images.usdc} />
                        </div>
                    ) : type == 2 ? (
                        <img style={{ height: 30, width: 30 }} src={assets.svg.eth} />
                    ) : (
                        <img style={{ height: 30, width: 30 }} src={assets.images.logo} />
                    )}
                    {type !== 2 && (
                        <>
                            <img style={{ height: 30, width: 30 }} src={assets.svg.arrow_right} />
                            <img style={{ height: 30, width: 30 }} src={assets.svg.eth} />
                        </>
                    )}
                </div>

                <div>
                    <h4 style={{ fontWeight: 700 }}>{title3}</h4>
                    <h5>APR: 0%</h5>
                </div>
            </div>
        </div>
    </div>
);

const mockRoadmap = [
    {
        day: 'Phase 1',
        hours: 'Jan 2023',
        image: assets.images.logo,
        content: [
            '- Website building',
            '- Partnership Development',
            '- Dapp building',
            '- Market orientation',
            '- Market platform on website and mobile are built',
        ],
    },
    {
        day: 'Phase 2',
        hours: 'Feb 2023',
        image: assets.images.logo,
        content: [
            '- More strategy, partners, ambassadors',
            '- Introduce $SFN details to partners',
            '- Dapp tester, de-bug',
            '- Contract Deployed',
            '- Tokenomic deployed',
        ],
    },
    {
        day: 'Phase 3',
        hours: 'Mar 2023',
        image: assets.images.logo,
        content: [
            '- Airdrop Event',
            '- Audit certified',
            '- Website live',
            '- Foundation building',
            '- Marketing Campaigns on all platforms',
        ],
    },
    {
        day: 'Phase 4',
        hours: 'Apr 2023',
        image: assets.images.logo,
        content: [
            '- Dapp officially released on February 20, 2023',
            '- Building up communities',
            '- Reach 10.000 holders',
            '- CEXs Listing',
            '- Community admins Recruitment',
            '- Campaign to support small-to-medium football competitions around the world',
        ],
    },
    {
        day: 'Phase 5',
        hours: 'May 2023',
        image: assets.images.logo,
        content: [
            '- Function bet early released',
            "- Matches 's liquid pool open",
            '- Release demo app on IOS and Android',
            '- Burn $SFN token',
            '- NFTs SFN rewards for winner who guess right Champion',
        ],
    },
    {
        day: 'Phase 6',
        hours: 'Jun 2023',
        image: assets.images.logo,
        content: [
            '- Yield Farm for NFTs released.',
            '- Announced strategic partners',
            '- Major CEXs listing',
            '- Multi-language support',
            '- Expanded representation in numerous nations',
            '- No-fee transactions for $SFN',
        ],
    },
    {
        day: 'Phase 7',
        hours: 'Q3-2023 and More',
        image: assets.images.logo,
        content: [
            '- SFN NFTs awarded to the victor who correctly predicts the tournaments champion',
            '- NFT P2P trading market released.',
            '- Official Discord server released',
            '- Multi-language support',
            '- Reach 1 million users',
            '- Collaborate with famous football players as representatives',
        ],
    },
];

const ItemMar = ({ item }) => {
    const [price, setPrice] = useState(0);

    const getPrice = async (id, fixed) => {
        await fetch(`https://api.coincap.io/v2/assets/${id}`)
            .then((response) => response.json())
            .then((data) => {
                let priceTemp = data.data.priceUsd;

                setPrice(Number.parseFloat(priceTemp).toFixed(fixed));
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getPrice(item.id, item.toFixed);
    }, []);

    return (
        <div className="token-div row a-center gap-10">
            <img src={item.src} />
            <div className="col a-center">
                <h5 style={{ fontWeight: 300 }}>{item.name}</h5>
                <h4 style={{ fontWeight: 700 }}>${price}</h4>
            </div>
        </div>
    );
};

const HomePage = () => {
    const navigate = useNavigate();
    const [dataTrending, setDataTrending] = useState(mockTrending);

    const navClick = (path) => {
        navigate(path);
    };

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="home-page col gap-30">
            <div className="banner-wrapper row">
                <img className="image-banner" src={assets.images.banner2} />
                <div className="black-cover"></div>
                <div className="banner-content">
                    <div>
                        <h1 className="banner-title">Decentralized finance platform</h1>
                        <h1 className="banner-title"> pioneer in the field of cryptocurrency</h1>
                    </div>
                    <h4 style={{ maxWidth: 500 }} className="banner-sub-title">
                        An innovative asset distribution management service that utilizes blockchain to connect the
                        world's major sporting events with Defi and NFT market services
                    </h4>
                    <div className="row gap-20">
                        <div
                            className="btn btn-banner"
                            onClick={() => {
                                navClick(route.nft);
                            }}
                        >
                            <h4>MINT NOW</h4>
                        </div>
                        <div
                            className="btn-learnmore"
                            onClick={() => {
                                openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                            }}
                        >
                            <h4>LEARN MORE</h4>
                        </div>
                    </div>
                </div>

                <div className="card-div">
                    <div className="banner-card">
                        <img className="card-icon" src={assets.svg.icon_box} />
                        <h5>Total Value Locked</h5>
                        <h2>$0.00</h2>
                    </div>
                    <div className="banner-card">
                        <img className="card-icon" src={assets.svg.icon_box} />
                        <h5>Total Trade Volume</h5>
                        <h2>$0.00</h2>
                    </div>
                    <div className="banner-card">
                        <img className="card-icon" src={assets.svg.icon_box} />
                        <h5>Market Cap</h5>
                        <h2>$0.00</h2>
                    </div>
                    <div className="banner-card">
                        <img className="card-icon" src={assets.svg.icon_box} />
                        <h5>Partners</h5>
                        <h2>1</h2>
                    </div>
                </div>

                <div className="trending-token-div gap-30">
                    <h3>Trending</h3>
                    <marquee className="marquee-container">
                        <div className="row">
                            {dataTrending.map((e) => {
                                return <ItemMar item={e} />;
                            })}
                        </div>
                    </marquee>
                </div>
            </div>

            <div className="nft-wrapper-div col gap-30">
                <div className="col gap-5 center">
                    <h1 className="list-title-1">NFTs COLLECTION</h1>
                </div>
                <div className="list-nft-wrapper">
                    {mockData.map((item) => (
                        <div className="item-nft">
                            <img src={item.src} />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="dapp-wrapper">
                <DappCard
                    bg={assets.images.daap1}
                    title="Staking Pools"
                    subTitle="Earn partner tokens by staking SFN"
                    type={0}
                    title1={'WBTC'}
                    title2={'USDT'}
                    title3={'ETH'}
                />
                <DappCard
                    bg={assets.images.daap2}
                    title="Yield Farms"
                    subTitle="Earn SFN or partner tokens by staking LP tokens"
                    type={1}
                    title1={'ETH-WBTC'}
                    title2={'ETH-USDC'}
                    title3={'DAI-USDC'}
                />
                <DappCard
                    bg={assets.images.daap3}
                    title="Lending Network"
                    subTitle="Earn interest by supplying popular tokens"
                    type={2}
                    title1={'Supply SFN'}
                    title2={'Supply USDC'}
                    title3={'Supply ETH'}
                />
                <DappCard
                    bg={assets.images.daap4}
                    title="Treasury Bills"
                    subTitle="Create protocol-owned liquidity with yield-generating NFTs"
                    type={3}
                    title1={'ETH-WBTC'}
                    title2={'ETH-USDC'}
                    title3={'DAI-USDC'}
                />
            </div>

            {/* <div className="timeline-wrapper col">
                <div className="col gap-5 center">
                    <h1 className="list-title-1">ROADMAP</h1>
                </div>

                <div className="list-roadmap-wrapper">
                    {mockRoadmap.map((item, index) => (
                        <div>
                            <div className="roadmap-card">
                                <h2 className="roadmap-card-title" style={{ fontWeight: 700 }}>
                                    {item.day}
                                </h2>
                                <h5>{item.hours}</h5>
                                <img src={item.image} />
                                <div>
                                    {item.content.map((ele, index) => (
                                        <h5>{ele}</h5>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="our-value col gap-30">
                <div className="col gap-5 center">
                    <h1 className="list-title-1">Out Value</h1>
                </div>

                <div className="our-value-wrapper">
                    <div className="our-card col">
                        <img src={assets.images.acc} style={{ width: 250, height: 250 }} />
                        <div className="gap-20 col a-center flex-1">
                            <h2
                                className="hover-primary-color"
                                style={{ fontWeight: 700 }}
                                onClick={() => {
                                    openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                                }}
                            >
                                Accessibility
                            </h2>
                            <h4 style={{ textAlign: 'center' }}>
                                We create tools for users to leverage DeFi opportunities, regardless of location,
                                background, wealth, or experience.
                            </h4>
                        </div>
                    </div>
                    <div className="our-card col">
                        <img src={assets.images.trans} style={{ width: 250, height: 250 }} />
                        <div className="gap-20 col a-center flex-1">
                            <h2
                                className="hover-primary-color"
                                style={{ fontWeight: 700 }}
                                onClick={() => {
                                    openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                                }}
                            >
                                Transparency
                            </h2>
                            <h4 style={{ textAlign: 'center' }}>
                                We build together through transparent governance and processes that ensure our community
                                understands our goals.
                            </h4>
                        </div>
                    </div>
                    <div className="our-card col">
                        <img src={assets.images.sec} style={{ width: 250, height: 250 }} />
                        <div className="gap-20 col a-center flex-1">
                            <h2
                                className="hover-primary-color"
                                style={{ fontWeight: 700 }}
                                onClick={() => {
                                    openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                                }}
                            >
                                Security
                            </h2>
                            <h4 style={{ textAlign: 'center' }}>
                                We ensure that the safety of the funds of our users and partners is our highest
                                priority.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tokennomic-wrapper row">
                {/* <img className="banner-token" src={assets.images.tokenomics_banner} style={{ opacity: 0.3 }} /> */}
                {/* <div className="flex-1"></div> */}
                <div className="flex-1 center col p-20 gap-20">
                    <div className="col gap-5 center">
                        <h1 className="list-title-1">TOKENOMICS</h1>
                    </div>
                    <img className="tokenomic-banner" src={assets.images.tokenomics} />
                </div>
            </div>

            <div className="partner-wrapper col gap-30">
                <div className="col gap-5 center">
                    <h1 className="list-title-1">PARTNERS & SUPPORTS</h1>
                </div>

                <div className="center col gap-10 ">
                    <img src={assets.images.starknet_logo} style={{ height: 200, width: 200 }} />
                    <h3 style={{ textAlign: 'center' }}>STARKNET NETWORK </h3>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
