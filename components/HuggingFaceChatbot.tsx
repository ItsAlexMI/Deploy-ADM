"use client";

export default function HuggingFaceChatbot() {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, width: 370, height: 540, boxShadow: '0 2px 16px #0003', borderRadius: 16, overflow: 'hidden', background: 'white' }}>
      <iframe
        src="https://huggingface.co/spaces/yuntian-deng/ChatGPT"
        title="Chat IA HuggingFace"
        width="370"
        height="540"
        style={{ border: 'none', borderRadius: 16 }}
        allow="clipboard-write"
      />
    </div>
  );
}
