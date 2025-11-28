'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [probs, setProbs] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch('/api/predict')
      .then(res => res.json())
      .then(data => setProbs(data.probs));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">🎲 Crazy Time Прогноз</h1>
      <ul className="space-y-2">
        {Object.entries(probs).map(([key, val]) => (
          <li key={key}>
            <strong>{key}</strong>: {(val * 100).toFixed(1)}%
          </li>
        ))}
      </ul>
    </main>
  );
}
