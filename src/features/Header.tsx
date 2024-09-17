import useSWR from "swr";

import { fetchCurrency } from "../lib/data";
import CurrencyItem from "../ui/CurrencyItem";
import logoSvg from '../assets/logo.svg';

export default function Header() {
  const { data, error, isLoading } = useSWR('currencies/uah', () => fetchCurrency('uah'));
  
  return (
    <header className="h-16 bg-foreground border-b border-divider">
      <div className="container h-full flex items-center justify-between">
        <img className="size-10" src={logoSvg} alt="" />
        {(isLoading || error) ? <Skeleton /> : (
          <ul className="flex items-center gap-3">
            <li><CurrencyItem key={1} name={"usd"} value={1/data.usd} /></li>
            <li><CurrencyItem key={2} name={"eur"} value={1/data.eur} /></li>
          </ul>
        )}
      </div>
    </header>
  );
};

function Skeleton() {
  return (
    <ul className="flex items-center gap-3">
      <li><div role="status" className="w-16 h-6 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700" /></li>
      <li><div role="status" className="w-16 h-6 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700" /></li>
    </ul>
  );
};
