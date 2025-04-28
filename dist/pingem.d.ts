export interface PingemSDK {
    actions: {
        ready: () => Promise<void>;
    };
    context: any;
}
export interface PingPayload {
    domain: string;
    event: string;
    timestamp: string;
    url?: string;
    context: any;
}
export declare class Pingem {
    private sdk;
    private domain;
    private endpoint;
    init(sdk: PingemSDK, domain: string): Promise<void>;
    ping(eventName: string): Promise<void>;
    private fetchSafe;
}
//# sourceMappingURL=pingem.d.ts.map