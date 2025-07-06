import { Card, CardContent } from './card';
import { Sparkles } from 'lucide-react';

export default function AgentCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="agent-card animate-fade-in shadow-xl border border-muted-foreground">
      <CardContent className="p-6 space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          <h3>{title}</h3>
        </div>
        <p className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
          {text}
        </p>
      </CardContent>
    </Card>
  );
}