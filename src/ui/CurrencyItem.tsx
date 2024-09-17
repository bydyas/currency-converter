import { currencyList } from "../lib/placeholders";

interface Props {
  name: string;
  value: number;
}

export default function CurrencyItem({ name, value }: Props) {
  const symbol: string | undefined = currencyList.find((currency) => currency.name === name)?.symbol;
  const fractionDigits: number = 4;

  return (
    <div className="flex items-center gap-1 text-primary font-semibold">
      <span>{symbol}</span>
      <em className="not-italic">{(value).toFixed(fractionDigits)}</em>
    </div>
  );
};
