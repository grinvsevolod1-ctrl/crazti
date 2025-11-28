const OUTCOMES = ['1','2','5','10','20','coinflip','pachinko','cashhunt','crazytime'];

export function bayesPredict(last: string[], alpha = 1.0, decay = 0.995) {
  const weights = Array.from({ length: last.length }, (_, i) => decay ** i).reverse();
  const counts: Record<string, number> = Object.fromEntries(OUTCOMES.map(o => [o, alpha]));

  last.forEach((o, i) => {
    if (counts[o]) counts[o] += weights[i];
  });

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return Object.fromEntries(OUTCOMES.map(o => [o, counts[o] / total]));
}
