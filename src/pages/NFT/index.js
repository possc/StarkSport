import assets from '../../assets';
import './home.scss';

import { useAccount, useContract, useStarknetCall, useStarknetExecute } from '@starknet-react/core';
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import Footer from '../../layouts/Footer';

const ethContractAddress = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
const sfnContractAddress = '0x00482c9ba8eac039eba45c875eeac660eb91768ca4a32cf3c5ae804cc62dccd2';

const compiledErc721 = {
    abi: [
        {
            members: [
                {
                    name: 'low',
                    offset: 0,
                    type: 'felt',
                },
                {
                    name: 'high',
                    offset: 1,
                    type: 'felt',
                },
            ],
            name: 'Uint256',
            size: 2,
            type: 'struct',
        },
        {
            data: [
                {
                    name: 'from_',
                    type: 'felt',
                },
                {
                    name: 'to',
                    type: 'felt',
                },
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            keys: [],
            name: 'Transfer',
            type: 'event',
        },
        {
            data: [
                {
                    name: 'owner',
                    type: 'felt',
                },
                {
                    name: 'approved',
                    type: 'felt',
                },
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            keys: [],
            name: 'Approval',
            type: 'event',
        },
        {
            data: [
                {
                    name: 'owner',
                    type: 'felt',
                },
                {
                    name: 'operator',
                    type: 'felt',
                },
                {
                    name: 'approved',
                    type: 'felt',
                },
            ],
            keys: [],
            name: 'ApprovalForAll',
            type: 'event',
        },
        {
            data: [
                {
                    name: 'previousOwner',
                    type: 'felt',
                },
                {
                    name: 'newOwner',
                    type: 'felt',
                },
            ],
            keys: [],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            data: [
                {
                    name: 'implementation',
                    type: 'felt',
                },
            ],
            keys: [],
            name: 'Upgraded',
            type: 'event',
        },
        {
            data: [
                {
                    name: 'previousAdmin',
                    type: 'felt',
                },
                {
                    name: 'newAdmin',
                    type: 'felt',
                },
            ],
            keys: [],
            name: 'AdminChanged',
            type: 'event',
        },
        {
            inputs: [
                {
                    name: 'name',
                    type: 'felt',
                },
                {
                    name: 'symbol',
                    type: 'felt',
                },
                {
                    name: 'owner_contract',
                    type: 'felt',
                },
                {
                    name: 'payment_token_address',
                    type: 'felt',
                },
                {
                    name: 'mint_price',
                    type: 'Uint256',
                },
                {
                    name: 'proxy_admin',
                    type: 'felt',
                },
            ],
            name: 'initializer',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'token_id',
                    type: 'Uint256',
                },
            ],
            name: 'tokenURI',
            outputs: [
                {
                    name: 'token_uri_len',
                    type: 'felt',
                },
                {
                    name: 'token_uri',
                    type: 'felt*',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [
                {
                    name: 'totalSupply',
                    type: 'Uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    name: 'owner_contract_address',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'index',
                    type: 'Uint256',
                },
            ],
            name: 'tokenByIndex',
            outputs: [
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'owner',
                    type: 'felt',
                },
                {
                    name: 'index',
                    type: 'Uint256',
                },
            ],
            name: 'tokenOfOwnerByIndex',
            outputs: [
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'interfaceId',
                    type: 'felt',
                },
            ],
            name: 'supportsInterface',
            outputs: [
                {
                    name: 'success',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [
                {
                    name: 'name',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [
                {
                    name: 'symbol',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'owner',
                    type: 'felt',
                },
            ],
            name: 'balanceOf',
            outputs: [
                {
                    name: 'balance',
                    type: 'Uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            name: 'ownerOf',
            outputs: [
                {
                    name: 'owner',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            name: 'getApproved',
            outputs: [
                {
                    name: 'approved',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'owner',
                    type: 'felt',
                },
                {
                    name: 'operator',
                    type: 'felt',
                },
            ],
            name: 'isApprovedForAll',
            outputs: [
                {
                    name: 'isApproved',
                    type: 'felt',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'contractURI',
            outputs: [
                {
                    name: 'uri_len',
                    type: 'felt',
                },
                {
                    name: 'uri',
                    type: 'felt*',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'to',
                    type: 'felt',
                },
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            name: 'approve',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'operator',
                    type: 'felt',
                },
                {
                    name: 'approved',
                    type: 'felt',
                },
            ],
            name: 'setApprovalForAll',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'from_',
                    type: 'felt',
                },
                {
                    name: 'to',
                    type: 'felt',
                },
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            name: 'transferFrom',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'from_',
                    type: 'felt',
                },
                {
                    name: 'to',
                    type: 'felt',
                },
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
                {
                    name: 'data_len',
                    type: 'felt',
                },
                {
                    name: 'data',
                    type: 'felt*',
                },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [],
            name: 'mint',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'recipient',
                    type: 'felt',
                },
            ],
            name: 'permissionedMint',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'tokenId',
                    type: 'Uint256',
                },
            ],
            name: 'burn',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'base_token_uri_len',
                    type: 'felt',
                },
                {
                    name: 'base_token_uri',
                    type: 'felt*',
                },
                {
                    name: 'token_uri_suffix',
                    type: 'felt',
                },
            ],
            name: 'setBaseURI',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'contractURI_len',
                    type: 'felt',
                },
                {
                    name: 'contractURI',
                    type: 'felt*',
                },
            ],
            name: 'setContractURI',
            outputs: [],
            type: 'function',
        },
        {
            inputs: [
                {
                    name: 'new_implementation',
                    type: 'felt',
                },
            ],
            name: 'upgrade',
            outputs: [],
            type: 'function',
        },
    ],
};
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

const mockRandomBoxData = [
    {
        src: assets.images.logoFootball.mb,
        nftAddress: '',
        costInWei: '1300000000000000',
    },
];

const randomNftAddressArray = [
    '0x03fd9745ddc460c41c529c8d115436bd8ef03e6daf96e10fe69e113c35272d5b',
    '0x07d1cd99140a68a97bc31f4af67aa345d4954ac74f8ed5cee8aecfcf1a47aaef',
    '0x00d9f0171b08ada07093668e9469074923d4e05ada2d5f4d0ab954ad54808246',
    '0x016b210bdbf6d4bb969453bd4d5a4728c83d211e578ba8fcdd7fa275e608e9bf',
    '0x038f75ea8506f308836eeebfe4f16114d23e9aa3bd36a3078779d8cf51368996',
    '0x07bfbf04f487afa389767c34166b6964873f1c7da7153db1caf830ddf3689c0e',
    '0x12b5ed796d5ade77982dc49736ea61d8ac4afd7f8afc3a2e7559ac7048fa1e4',
    '0x2af36f9f76d00325c778c6d61245f1f8f42a591253a7bbf235b656c16068d13',
    '0x7c61a34927db89061fc15461a39cd4af189b722eb5e01c75d11a4f053a84802',
    '0x50141bc7b1bd13b4df8961a4f84211256328ac7d1604269a875c0618dadcbb8',
];

const RandomBoxNFT = ({ datas }) => {
    const { src, costInWei } = datas;
    const { status } = useAccount();
    let supplyData;
    const random = Math.floor(Math.random() * randomNftAddressArray.length);
    let nftAddress = randomNftAddressArray[random];
    const { contract } = useContract({
        address: nftAddress,
        abi: compiledErc721.abi,
    });

    let { data, loading, error, refresh } = useStarknetCall({
        contract,
        method: 'totalSupply',
        args: [[0]],
        options: {
            watch: false,
        },
    });
    if (status == 'connected' && data != undefined) {
        supplyData = <h4 className="list-title-2">Minted: {data.totalSupply.low.words[0]}</h4>;
    } else {
        supplyData = null;
    }

    const calls = [
        {
            contractAddress: ethContractAddress,
            entrypoint: 'approve',
            calldata: [nftAddress, costInWei, 0],
        },
        {
            contractAddress: nftAddress,
            entrypoint: 'mint',
            calldata: [],
        },
    ];

    const handleMint = () => {
        if (status == 'connected') {
            execute();
        } else {
            alert('Please connect wallet');
        }
    };

    const { execute } = useStarknetExecute({ calls });

    return (
        <div style={{ 'background-color': 'rgb(255 255 255 / 0%)' }} className="nft-wrapper col gap-15">
            <div style={{ height: '77%' }}>
                <img style={{ borderRadius: '10px' }} src={src} />
            </div>
            <br></br>
            <div style={{ height: '56px' }} className="btn" onClick={() => handleMint()}>
                <h3>MINT</h3>
            </div>
        </div>
    );
};

const ItemNFT = ({ datas, mintedData, setMintedData }) => {
    const { id, title, src, nftAddress, cost, costInWei, minted } = datas;
    const { status } = useAccount();
    let supplyData;

    const { contract } = useContract({
        address: nftAddress,
        abi: compiledErc721.abi,
    });

    let { data, loading, error, refresh } = useStarknetCall({
        contract,
        method: 'totalSupply',
        args: [[0]],
        options: {
            watch: false,
        },
    });
    if (status == 'connected' && data != undefined) {
        supplyData = <h4 className="list-title-2">Minted: {data.totalSupply.low.words[0]}</h4>;
    } else {
        supplyData = null;
    }

    const calls = [
        {
            contractAddress: ethContractAddress,
            entrypoint: 'approve',
            calldata: [nftAddress, costInWei, 0],
        },
        {
            contractAddress: nftAddress,
            entrypoint: 'mint',
            calldata: [],
        },
    ];

    const handleMint = () => {
        if (status == 'connected') {
            execute();
        } else {
            alert('Please connect wallet');
        }
    };

    useEffect(() => {
        if (status === 'connected' && data !== undefined) {
            const minted_num = data.totalSupply.low.words[0];
            let temp = mintedData;
            temp[id - 1].minted = minted_num;
            setMintedData([...temp]);
        }
    }, [data]);

    const { execute } = useStarknetExecute({ calls });

    return (
        <div className="nft-wrapper col gap-15">
            <div style={{ height: '100%' }}>
                <img style={{ borderRadius: '10px' }} src={src} />
            </div>
            <div className="">
                <h3 style={{ textAlign: 'center' }}>{title} NFT</h3>
            </div>
        </div>
    );
};

const NFTPage = () => {
    // Need help count total value of {data.totalSupply.low.words[0]} in ItemNFT component
    const [totalMinted, setTotalMinted] = useState(0);

    const { status } = useAccount();

    var totalSupplyData;
    if (status == 'connected') {
        totalSupplyData = <h4 className="list-title-2">Total Minted: {totalMinted}</h4>;
    }

    const mockMinted = [
        {
            id: 1,
            minted: 0,
        },
        {
            id: 2,
            minted: 0,
        },
        {
            id: 3,
            minted: 0,
        },
        {
            id: 4,
            minted: 0,
        },
        {
            id: 5,
            minted: 0,
        },
        {
            id: 6,
            minted: 0,
        },
        {
            id: 7,
            minted: 0,
        },
        {
            id: 8,
            minted: 0,
        },
        {
            id: 9,
            minted: 0,
        },
        {
            id: 10,
            minted: 0,
        },
    ];
    const [mintedData, setMintedData] = useState(mockMinted);

    useEffect(() => {
        let total = 0;

        if (mintedData.length > 0) {
            mintedData.forEach((element) => {
                total += element.minted;
            });

            console.log(mintedData);

            setTotalMinted(total);
        }
    }, [mintedData]);

    return (
        <div className="nft-page">
            <div className="list-wrapper col a-center">
                <div className="col gap-5 center">
                    <h1 className="list-title-1">NFTs Event</h1>
                    <h4 className="list-title-2">
                        Random NFT with your favorite team's logo is inside the box, open to receive a reward.
                    </h4>
                    {totalSupplyData}
                    <br />
                </div>

                <div style={{ height: 30 }}></div>

                <div className="list-nft">
                    {mockRandomBoxData.map((item, index) => (
                        <RandomBoxNFT key={index} datas={item} />
                    ))}
                </div>

                <br />
                <br />
                <br />

                <div className="list-nft">
                    {mockData.map((item, index) => (
                        <ItemNFT key={index} datas={item} mintedData={mintedData} setMintedData={setMintedData} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NFTPage;
