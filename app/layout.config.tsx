import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    
    title: (
      <>
        <span style={{
          display: 'inline-block',
          width: 28,
          height: 36,
          position: 'relative',
          verticalAlign: 'middle',
          marginRight: 8
        }}>
          <span style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: 8,
            height: 22,
            background: '#7c5e3c',
            borderRadius: 4,
            transform: 'translateX(-50%)',
            zIndex: 1
          }} />
          <span style={{
            position: 'absolute',
            left: '50%',
            top: 2,
            width: 22,
            height: 22,
            background: 'radial-gradient(circle at 60% 40%, #7be495 70%, #3bb273 100%)',
            borderRadius: '50% 50% 50% 50%/60% 60% 40% 40%',
            opacity: 0.85,
            transform: 'translateX(-50%)',
            zIndex: 2,
            animation: 'treeLeafAnim 2.5s infinite alternate ease-in-out'
          }} />
          <style>{`
            @keyframes treeLeafAnim {
              0% { transform: translateX(-50%) scale(1) translateY(0); }
              100% { transform: translateX(-50%) scale(1.08) translateY(-6px); }
            }
          `}</style>
        </span>
        Arquitectura y Microcontroladores
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
