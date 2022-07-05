const CurrencyMap = new Map<string, string>(
  Object.entries({
    USD: "$",
    UAN: "Ұ",
    RUB: "₽",
    EUR: "€",
  })
);
const Currency = ({ currency }: { currency: string }) => {
  return <span>{CurrencyMap.get(currency.toUpperCase())}</span>;
};

export default Currency;
