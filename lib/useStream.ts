import { useState, useEffect } from 'react';

export function useStream(goal: string | null) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (!goal) return;
    setText('');
    fetch('/api/plan', {
      method: 'POST',
      body: JSON.stringify({ goal })
    }).then(async (res) => {
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setText((prev) => prev + decoder.decode(value));
      }
    });
  }, [goal]);
  return text;
}
