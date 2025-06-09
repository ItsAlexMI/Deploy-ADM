import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import FallingLeavesAndDrops from '@/components/FallingLeavesAndDrops';
import HuggingFaceChatbot from '@/components/HuggingFaceChatbot';
import PoeChatButton from '@/components/PoeChatButton';
import PoeChatModal from '@/components/PoeChatModal';
import Script from 'next/script';
import ChatbaseWidget from '@/components/ChatbaseWidget';

// @ts-ignore
// eslint-disable-next-line
declare global {
  interface Window {
    inkeepWidget?: any;
    InkeepWidget?: any;
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
