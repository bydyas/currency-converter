import useSWR from "swr";
import { fetchCurrency } from "./lib/data";

export default function App() {
  const { data, error, isLoading } = useSWR('currencies/uah', () => fetchCurrency('uah'));

  console.log('data: ', data);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <h1 className="text-3xl font-bold underline">
      ${(1/data.usd).toFixed(4)} / €{(1/data.eur).toFixed(4)}
    </h1>
  )
}
