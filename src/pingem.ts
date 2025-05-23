// src/pingem.ts

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

export class Pingem {
  private sdk: PingemSDK | null = null;
  private domain: string | null = null;
  private endpoint = "https://analytics.pingem.xyz/api/ping";

  async init(sdk: PingemSDK, domain: string) {
    if (!sdk || !domain) {
      console.error("Pingem: Missing sdk or domain");
      return;
    }

    await sdk.actions.ready();
    this.sdk = sdk;
    this.domain = domain;

    console.log("Pingem: Initialized with Domain", domain);
  }

  async ping(eventName: string) {
    if (!this.sdk || !this.domain) {
      console.warn("Pingem: Not initialized.");
      return;
    }

    const context = await this.sdk.context;

    if (!context?.client?.clientFid) {
      console.warn("Pingem: context.client.clientFid not available yet");
      return;
    }

    const payload: PingPayload = {
      domain: this.domain,
      event: eventName,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : undefined,
      context: structuredClone(context),
    };

    try {
      const crossFetch = (await import("cross-fetch")).default;
      await crossFetch(this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("Pingem: Sent event", eventName);
    } catch (err) {
      console.error("Pingem: Failed to send ping", err);
    }
  }
}
