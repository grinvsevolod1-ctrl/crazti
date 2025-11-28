'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [probs, setProbs] = useState<Record<string, number>>({});
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/predict');
      const data = await res.json();
      setProbs(data.probs);
      setLastUpdated(new Date().toLocaleTimeString());
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // обновление каждые 10 сек
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎲 Crazy Time — прогноз</h1>
      <p className="text-sm text-gray-500 mb-4">Обновлено: {lastUpdated}</p>
      <ul className="space-y-2">
        {Object.entries(probs).map(([key, val]) => (
          <li key={key} className="flex justify-between border-b pb-1">
            <span>{key}</span>
            <span>{(val * 100).toFixed(1)}%</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
