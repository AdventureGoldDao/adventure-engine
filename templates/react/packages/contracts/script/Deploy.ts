import { exec } from 'child_process';
import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get PRIVATE_KEY from environment variables
const publicAddress = process.env.PUBLIC_ADDRESS?.replace(/^0x/, '');

// Execute deployment command and capture output
exec('pnpm mud deploy', (error, stdout, stderr) => {
    try {
        console.log('Command executed: pnpm mud deploy');
        console.log('stdout:', stdout);

        if (error) {
            console.error(`Error executing deploy: ${error.message}`);
            return;
        }
        if (stderr) {
            console.warn(`Warning: ${stderr}`);
        }

        console.log('Start to send request to rpcUrl');
        // Extract worldAddress and rpcUrl from stdout
        const worldAddressMatch = stdout.match(/worldAddress:\s*'0x[a-fA-F0-9]+'/);
        const rpcUrlMatch = stdout.match(/--rpc-url (\S+)/);
        console.log('worldAddressMatch:', worldAddressMatch);
        console.log('rpcUrlMatch:', rpcUrlMatch);

        if (worldAddressMatch && rpcUrlMatch) {
            const worldAddress = worldAddressMatch[0]?.match(/0x[a-fA-F0-9]+/)?.[0];
            const rpcUrl = rpcUrlMatch[1];
            console.log('worldAddress:', worldAddress);
            console.log('rpcUrl:', rpcUrl);

            // Construct request data
            const requestData = {
                jsonrpc: "2.0",
                method: "eth_manageContractTask",
                params: [
                    worldAddress,
                    publicAddress,
                    30000,
                    true
                ],
                id: 1
            };
           
            console.log('requestData:', requestData);
            // Send POST request
            axios.post(rpcUrl, requestData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            console.error('Could not find worldAddress in deploy output.');
        }
    } catch (exception) {
        console.error('Exception caught:', exception);
    }
});
