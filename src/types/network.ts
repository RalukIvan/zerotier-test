export type NetworkLight = {
        id: string;
        clock: number;
        config: Config;
        description: string;
        rulesSource: string;
        permissions: Permission;
        ownerId: string;
        onlineMemberCount: number;
        authorizedMemberCount: number;
        totalMemberCount: number;   
        capabilitiesByName: Capabilities;
        tagsByName: Tags;
}

type Config = {
    id: string;
    creationTime: number;
    capabilities: {
        [key: string]: string;
    }[];
    dns: {
        domain: string;
        servers: string[];
    };
    enableBroadcast: boolean;
    ipAssignmentPools: {
        ipRangeStart: string;
        ipRangeEnd: string;
    }[];
    lastModified: number;
    mtu: number;
    multicastLimit: number;
    name: string;
    private: boolean;
    routes: {
        target: string;
        via: string | null;
    }[];
    rules: {
        [key:string]: string;
    }[];
    ssoConfig: {
        enabled: boolean;
        mode: string;
        clientId: string;
        issuer: string;
        provider: string;
        authorizationEndpoint: string;
        allowList: string[];
    };
    tags: {
        [key:string]: string;
    }[];
    v4AssignMode: {
        zt: boolean;
    };
    v6AssignMode: {
        "6plane": boolean;
        rfc4193: boolean;
        zt: boolean;
    };
};

export type NetworkData = {
    id: string;
    clock: number;
    config: Config;
    description: string,
    rulesSource: string;
    permissions: Permission;
    ownerId: string;
    onlineMemberCount: number;
    authorizedMemberCount: number;
    totalMemberCount: number;
    capabilitiesByName: Capabilities;
    tagsByName: Tags;   
};

type Permission = {
    [key: string]: {
        a: boolean;
        d: boolean;
        m: boolean;
        r: boolean;
      }
}

type Capabilities = {
    [key:string]: string;
}

type Tags = {
    [key:string]: string;
}