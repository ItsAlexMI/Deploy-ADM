import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import FallingLeavesAndDrops from '@/components/FallingLeavesAndDrops';
// ...existing code...
import ChatbaseWidget from '@/components/ChatbaseWidget';

// eslint-disable-next-line
declare global {
  interface Window {
    inkeepWidget?: unknown;
    InkeepWidget?: unknown;
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <FallingLeavesAndDrops />
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
        <ChatbaseWidget />
      </DocsLayout>
    </>
  );
}
