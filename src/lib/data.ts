export async function fetchCurrency(currency: string) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/currencies/${currency}.json`);

  if (!response.ok) {
    throw new Error(`Failed fetching currency (${currency}).`);
  }

  const data = await response.json();

  return data[currency];
}
