import { NetworkLight, NetworkData } from '../types/network.ts';

export const fetchNetworks = (): Promise<NetworkLight[]> => {
  return fetch('/api/network', {
    method: 'GET',
    headers: {
      Authorization: `token ${import.meta.env.VITE_API_TOKEN}`,
    },
  })
    .then((res) => res.json());
}

export const fetchNetworkData = (networkId: string): Promise<NetworkData> => {
    return fetch(`/api/network/${networkId}`, {
       method: 'GET',
        headers: {
          Authorization: `token ${import.meta.env.VITE_API_TOKEN}`,
        },
    })
    .then((res) => res.json());
}