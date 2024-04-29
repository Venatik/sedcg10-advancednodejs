function convertDenarsToEuro(amount: number): number {
  return amount / 61.5;
}

function convertEuroToDenars(amount: number): number {
  return amount * 61.5;
}

// DRY Code
function convertCurrency(amount: number, toCurrency: string): number {
  if (toCurrency === "euro") return amount / 61.5;
  if (toCurrency === "denars") return amount * 61.5;
  return 0;
}
