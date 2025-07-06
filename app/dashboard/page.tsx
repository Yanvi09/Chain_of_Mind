"use client";


import { useState } from 'react';
import AgentCard from '../../components/ui/AgentCard';
import { useStream } from '@/lib/useStream';

export default function Page() {
  const [input, setInput] = useState('');
  const [goal, setGoal] = useState<string | null>(null);
  const result = useStream(goal);

  return (
    <section className="grid gap-4 max-w-2xl mx-auto py-10 px-4">
      <textarea
        className="w-full border border-muted rounded-md p-3 text-sm"
        value={input}
        placeholder="Enter your goal (e.g. Build a personal website)"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90"
        onClick={() => setGoal(input)}
      >
        Generate Plan
      </button>

      {result && <AgentCard title="PlannerBot" text={result} />}
    </section>
  );
}