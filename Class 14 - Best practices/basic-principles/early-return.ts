function calculateSquareRoot(num: number): string | number {
  let result;

  if (num >= 0) {
    result = Math.sqrt(num);
  } else {
    result = "Invalid number";
  }
  return result;
}

// Simplified version
function calculateSquareRootSimplified(num: number): string | number {
  if (num < 0) {
    return "Invalid number";
  }
  return Math.sqrt(num);
}
