import assets from '../../assets';
import './style.scss';

const Footer = () => {
    const contactData = {
        telegram: 'https://t.me/starksportglobal',
        telegramChannel: 'https://t.me/starksportchanel',
        twitter: 'https://twitter.com/starkfinance?s=21&t=mYOANC7ZpixnNnYAW14NEQ',
        discord: 'https://discord.gg/Z2Z8BwHy6k',
    };

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="footer-layout row">
            <div className="col gap-20">
                <div className="row a-center gap-20">
                    <img src={assets.images.logo} style={{ height: 100, width: 100 }} />
                    <h1 className="project-name">STARK SPORT</h1>
                </div>
                <h4 style={{ maxWidth: 500 }}>
                    Blockchain is a key tool for determining the direction of finance in the future. The two most
                    talked-about issues in the emerging virtual asset market are DeFi and NFT. Upgrading constantly,
                    we'll provide services for our clients until the decentralized financial market allows for the
                    unrestricted exchange of all digital assets.
                </h4>

                <div className=" row gap-30 j-center">
                    <img
                        src={assets.svg.discord}
                        style={{ height: 40, width: 40 }}
                        onClick={() => {
                            openInNewTab(contactData.discord);
                        }}
                    />
                    <img
                        src={assets.svg.twitter}
                        style={{ height: 40, width: 40 }}
                        onClick={() => {
                            openInNewTab(contactData.twitter);
                        }}
                    />
                    <img
                        src={assets.svg.telegram}
                        style={{ height: 40, width: 40 }}
                        onClick={() => {
                            openInNewTab(contactData.telegram);
                        }}
                    />
                    <img
                        src={assets.svg.telegram}
                        style={{ height: 40, width: 40 }}
                        onClick={() => {
                            openInNewTab(contactData.telegramChannel);
                        }}
                    />
                </div>

                <h4 style={{ textAlign: 'center' }}>©2023 STARKSPORT ALL RIGHTS RESERVED</h4>
            </div>

            <div className="row gap-50 flex-wrap">
                <div className="col gap-20">
                    <h1 className="footer-title">Support</h1>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        FAQ
                    </h4>
                    <h4
                        onClick={() => {
                            openInNewTab('https://discord.gg/Z2Z8BwHy6k');
                        }}
                    >
                        Discord
                    </h4>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        Tokenomics
                    </h4>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        Audits
                    </h4>
                </div>
                <div className="col gap-20">
                    <h1 className="footer-title">Access</h1>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        Docs
                    </h4>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        Merch
                    </h4>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        Starksport
                    </h4>
                    <h4
                        onClick={() => {
                            openInNewTab('https://stark-sport-whitepaper.gitbook.io/untitled/');
                        }}
                    >
                        Github
                    </h4>
                </div>
            </div>

            {/* <div className=" row gap-30">
                <img
                    src={assets.svg.discord}
                    style={{ height: 40, width: 40 }}
                    onClick={() => {
                        openInNewTab(contactData.discord);
                    }}
                />
                <img
                    src={assets.svg.twitter}
                    style={{ height: 40, width: 40 }}
                    onClick={() => {
                        openInNewTab(contactData.twitter);
                    }}
                />
                <img
                    src={assets.svg.telegram}
                    style={{ height: 40, width: 40 }}
                    onClick={() => {
                        openInNewTab(contactData.telegram);
                    }}
                />
                <img
                    src={assets.svg.telegram}
                    style={{ height: 40, width: 40 }}
                    onClick={() => {
                        openInNewTab(contactData.telegramChannel);
                    }}
                />
            </div> */}
        </div>
    );
};

export default Footer;
