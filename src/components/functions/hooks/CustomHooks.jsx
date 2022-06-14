import React from 'react'
import useNetwork from './useNetwork';

const NetworkInfoTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Connection Property</th>
                    <th>Connection Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value?.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const CustomHooks = () => {

    const networkState = useNetwork();
    const {
        online,
        since,
        downLink,
        downLinkMax,
        effectiveType,
        rtt,
        saveData,
        type,
    } = networkState;
    return (
        <container>
            <div>
                <div>
                    <h1>Network Stats:</h1>
                    <NetworkInfoTable data={networkState} />
                </div>
            </div>
        </container>
    );
}

export default CustomHooks