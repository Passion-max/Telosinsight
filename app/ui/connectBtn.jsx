"use client"
import { useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export default function ConnectBtn() {
    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();
    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        // This will be executed only once when the component mounts
        setClientSide(true);
    }, []);

    function shortenAddress(address) {
        if (!address) return '';
        return `${address.slice(0, 4)}..${address.slice(-4)}`;
    }

    if (!clientSide || !isConnected) {
        return <div><button type="button" className="mybtn-main" onClick={() => open()}>Connect Wallet</button></div>
    }

    return <div><button type="button" className="mybtn-main" onClick={() => open()}>{shortenAddress(address)}</button></div>
}
