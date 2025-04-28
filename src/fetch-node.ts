export async function fetchNode(url: string, options: any) {
  const { fetch } = await import('undici');
  return fetch(url, options);
}
