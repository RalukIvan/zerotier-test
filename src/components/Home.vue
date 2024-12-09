<template>
    <div class="container"> 
        <h2> Your networks</h2>
        <div class="content">
            <div class="network-list">
                <div v-if="!isLoading" class="network-list__item" :data-testid="`network-${index}`" v-for="(network, index) in networkList" :key="index" @click="displayNetworkData(network.id)">
                    <div>{{ network.config.name }}</div>
                    <div>></div>
                </div>
                <div v-else>Loading....</div>
            </div>
            <div class="network-data">
                <div v-if="selectedNetwork" class="network-data__container">
                    <table class="network-data__table">
                        <thead>
                            <tr>
                                <th colspan="2">Network ID</th>
                                <th colspan="2">Name</th>
                                <th colspan="2">Description</th>
                                <th colspan="2">Subnet</th>
                                <th colspan="2">Nodes</th>
                                <th colspan="2">Created</th>                          
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-testid="networkRowDetail">
                                <td>{{ selectedNetwork.id }}</td>
                                <td>{{ selectedNetwork.config.name }}</td>
                                <td>{{ selectedNetwork.config.description }}</td>
                                <td>{{ selectedNetwork.config.subnet }}</td>
                                <td>{{ selectedNetwork.config.nodes }}</td>
                                <td>{{ selectedNetwork.config.created }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>No network selected</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useNetwork } from '../composables/network';

const { networkList, loadNetworks, loadNetworkData, isLoading, selectedNetwork } = useNetwork();
onMounted(async() => {
   await loadNetworks();
});

const displayNetworkData = async (id: string) => {
    console.log('Display network data', id);
    await loadNetworkData(id);
};

</script>
<style scoped>
.container {
    /* @apply flex md:flex-row flex-col my-20 mx-auto h-full md:w-5/6 w-full; */
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    height:100%;
    max-width: 1200px;
}

.content {
    display: flex;
    flex-direction: row;
    gap: 20px;
    /* @apply flex flex-row gap-20; */
}

.network-data {
    display: flex;
    background-color: #8fa4c4;
    width: 80%;
    margin-top: 20px;
}

.network-data__table {
    width: 100%;
    
    /* @apply w-full border-collapse; */
}

.network-list {
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: left;
    margin-top: 20px;
    gap: 2px;
    /* @apply flex flex-col items-left mt-20 gap-2; */
   
}

.network-list__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.3rem;
    background-color: #d0d2d6;
    justify-content: space-between;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 1.2rem;
    /* @apply flex flex-row items-center rounded-md bg-gray-600 justify-content-between; */
}
</style>