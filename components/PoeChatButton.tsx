"use client";

export default function PoeChatButton() {
  return (
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
        onClick={() => {
          window.open('https://poe.com/', '_blank', 'noopener,noreferrer');
        }}
        aria-label="Chatear con IA en Poe"
      >
        🤖
      </button>
    </div>
  );
}
