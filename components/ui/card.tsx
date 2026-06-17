import * as React from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-[1.75rem] border border-slate-200/80 bg-white shadow-xl shadow-royal/5', className)}
      {...props}
    />
  );
}
