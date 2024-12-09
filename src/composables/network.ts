import { ref } from 'vue';
import { NetworkData, NetworkLight } from '../types/network';
import { fetchNetworks, fetchNetworkData } from '../service/networkService';

const selectedNetwork = ref<NetworkData>({});
const networkList = ref<NetworkLight[]>([]);


export function useNetwork() {
    const isLoading = ref(false);
    
    
    const loadNetworks = async () => {
        isLoading.value = true;
        try {
            const res = await fetchNetworks();
            networkList.value = res;
        } catch(e) {
            console.error(e);
            throw e;
        } finally {
            isLoading.value = false;
        }
    }

    const loadNetworkData = async (networkId: string) => {
        isLoading.value = true;
        try {
            const res = await fetchNetworkData(networkId);
            selectedNetwork.value = res;
        } catch(e) {
            console.error(e);
            throw e;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isLoading,
        loadNetworks,
        loadNetworkData,
        networkList,
        selectedNetwork,
    }
};