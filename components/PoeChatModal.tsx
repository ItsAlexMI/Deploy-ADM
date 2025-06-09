"use client";
import { useState } from "react";

export default function PoeChatModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}>
        <button
          style={{
            background: '#a21caf',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: 56,
            height: 56,
            boxShadow: '0 2px 8px #0002',
            fontSize: 28,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onClick={() => setOpen(true)}
          aria-label="Chatear con IA en Poe"
        >
          🤖
        </button>
      </div>
      {open && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.35)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} onClick={() => setOpen(false)}>
          <div
            style={{
              background: 'white',
              borderRadius: 16,
              width: 400,
              maxWidth: '95vw',
              height: 600,
              boxShadow: '0 4px 32px #0004',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: 8,
                right: 12,
                background: 'transparent',
                border: 'none',
                fontSize: 22,
                color: '#a21caf',
                cursor: 'pointer',
                zIndex: 2,
              }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
            <div style={{padding: '1rem', borderBottom: '1px solid #eee', background: '#faf5ff'}}>
              <strong>Chat IA (Poe)</strong>
              <div style={{fontSize: 13, color: '#6b21a8', marginTop: 4}}>
                Puedes preguntar sobre cualquier tema del proyecto.<br/>
                <span style={{fontWeight: 500}}>Contexto:</span> Documentación técnica, arquitectura x86, microcontroladores, memorias, PIC, simuladores, instrucciones y ejemplos prácticos.
              </div>
            </div>
            <iframe
              src="https://poe.com/"
              title="Chat IA Poe"
              width="100%"
              height="100%"
              style={{ border: 'none', flex: 1 }}
              allow="clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
}
