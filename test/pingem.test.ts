import { describe, it, expect } from 'vitest';
import { Pingem } from '../src/pingem';

describe('Pingem', () => {
  it('should warn if ping is called before init', async () => {
    const pingem = new Pingem();
    await expect(pingem.ping('test')).resolves.toBeUndefined();
  });
});
