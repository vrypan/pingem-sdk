# Pingem SDK

Lightweight event tracking for Farcaster-connected apps.

## Register your Mini App

Assuming you have a working Farcaster Mini App, 
visit https://analytics.pingem.xyz and register your Mini App domain.

## Install

```bash
npm install pingem-sdk
```

## Quickstart

```typescript
import { Pingem } from 'pingem-sdk';
import { sdk } from '@farcaster/frame-sdk';

const pingem = new Pingem();
await sdk.actions.ready();
await pingem.init(sdk, 'your-mini-app-domain');
await sdk.actions.addFrame();
await pingem.ping('view');
```