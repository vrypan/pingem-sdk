export async function fetchNode(url: string, options: RequestInit) {
  const undici = (await import("undici")) as typeof import("undici");
  return undici.fetch(url, options);
}
