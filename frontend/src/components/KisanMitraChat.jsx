import React, { useState, useRef, useEffect } from 'react';

const WELCOME_MSG = {
  role: 'assistant',
  content: 'Namaste Kisan Bhai! Main Kisan Mitra hun. Apni kheti se related koi bhi sawaal poochho — fasal, mitti, khaad, sinchai... main poori madad karunga! 🙏'
};

// ── Typing dots indicator ─────────────────────────────
const TypingDots = () => (
  <div style={styles.typingWrap}>
    <span style={{ ...styles.dot, animationDelay: '0s' }} />
    <span style={{ ...styles.dot, animationDelay: '0.18s' }} />
    <span style={{ ...styles.dot, animationDelay: '0.36s' }} />
  </div>
);

// ── Main Component ────────────────────────────────────
const KisanMitraChat = () => {
  const [open, setOpen]       = useState(false);
  const [mode, setMode]       = useState('chat'); // 'chat' | 'voice'
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput]     = useState('');
  const [loading, setLoading] = useState(false);

  // Voice
  const [listening, setListening]     = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('idle'); // idle | listening | thinking | speaking
  const [transcript, setTranscript]   = useState('');
  const recognitionRef = useRef(null);
  const synthRef       = useRef(window.speechSynthesis);
  const messagesEndRef = useRef(null);

  // Auto-scroll messages
  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  // Cleanup speech on unmount
  useEffect(() => () => {
    recognitionRef.current?.abort();
    synthRef.current?.cancel();
  }, []);

  // ── Send to backend ────────────────────────────────
  const sendToAPI = async (conversationHistory) => {
    const res = await fetch('http://localhost:5001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversationHistory })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Server error');
    return data.reply;
  };

  // ── Chat mode: send message ───────────────────────
  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');

    const userMsg   = { role: 'user', content: text };
    const nextMsgs  = [...messages, userMsg];
    setMessages(nextMsgs);
    setLoading(true);

    try {
      const reply = await sendToAPI(nextMsgs);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Kuch takleef aa gayi bhai. Thoda wait karo aur dobara try karo. 🙏'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  // ── Voice mode ────────────────────────────────────
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Aapka browser voice recognition support nahi karta. Chrome use karein.');
      return;
    }
    synthRef.current?.cancel();
    const recognition = new SpeechRecognition();
    recognition.lang           = 'hi-IN';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onstart  = () => { setListening(true); setVoiceStatus('listening'); setTranscript(''); };
    recognition.onend    = () => { setListening(false); };
    recognition.onerror  = () => { setListening(false); setVoiceStatus('idle'); };

    recognition.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          const finalText = e.results[i][0].transcript.trim();
          setTranscript(finalText);
          recognition.stop();
          handleVoiceQuery(finalText);
        } else {
          interim += e.results[i][0].transcript;
          setTranscript(interim);
        }
      }
    };
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const handleVoiceQuery = async (text) => {
    if (!text) return;
    setVoiceStatus('thinking');
    const userMsg  = { role: 'user', content: text };
    const nextMsgs = [...messages, userMsg];
    setMessages(nextMsgs);

    try {
      const reply = await sendToAPI(nextMsgs);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      speakText(reply);
    } catch {
      const fallback = 'Kuch takleef aa gayi bhai. Dobara try karo. 🙏';
      setMessages(prev => [...prev, { role: 'assistant', content: fallback }]);
      speakText(fallback);
    }
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    setVoiceStatus('speaking');
    synthRef.current?.cancel();
    // Strip emojis for cleaner TTS
    const clean = text.replace(/[\u{1F300}-\u{1FAFF}]/gu, '').trim();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang  = 'hi-IN';
    utterance.rate  = 0.92;
    utterance.pitch = 1.05;
    utterance.onend = () => setVoiceStatus('idle');
    synthRef.current.speak(utterance);
  };

  const handleMicClick = () => listening ? stopListening() : startListening();

  const voiceStatusLabel = {
    idle:      'Bolo, main sun raha hun...',
    listening: 'Sun raha hun... 👂',
    thinking:  'Soch raha hun... 🤔',
    speaking:  'Bol raha hun... 🔊'
  }[voiceStatus];

  // ── Render ────────────────────────────────────────
  return (
    <>
      {/* Floating toggle button */}
      <button
        id="kisan-mitra-toggle"
        onClick={() => setOpen(o => !o)}
        style={styles.fab}
        aria-label="Kisan Mitra chat kholo"
      >
        {open ? '✕' : '🌾'}
        {!open && <span style={styles.fabLabel}>Kisan Mitra</span>}
      </button>

      {/* Chat window */}
      {open && (
        <div style={styles.window} role="dialog" aria-label="Kisan Mitra Chatbot">

          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.avatar}>🌾</div>
              <div>
                <div style={styles.headerTitle}>Kisan Mitra</div>
                <div style={styles.headerSub}>
                  <span style={styles.onlineDot} /> Online • Kheti Expert
                </div>
              </div>
            </div>
            {/* Mode toggle */}
            <div style={styles.modeToggle}>
              <button
                onClick={() => setMode('chat')}
                style={{ ...styles.modeBtn, ...(mode === 'chat' ? styles.modeBtnActive : {}) }}
              >💬 Chat</button>
              <button
                onClick={() => { setMode('voice'); synthRef.current?.cancel(); recognitionRef.current?.abort(); setListening(false); setVoiceStatus('idle'); }}
                style={{ ...styles.modeBtn, ...(mode === 'voice' ? styles.modeBtnActive : {}) }}
              >🎤 Voice</button>
            </div>
          </div>

          {/* ── CHAT MODE ── */}
          {mode === 'chat' && (
            <>
              <div style={styles.messages}>
                {messages.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
                    {msg.role === 'assistant' && <div style={styles.botAvatar}>🌾</div>}
                    <div style={msg.role === 'user' ? styles.userBubble : styles.botBubble}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10 }}>
                    <div style={styles.botAvatar}>🌾</div>
                    <div style={styles.botBubble}><TypingDots /></div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div style={styles.inputRow}>
                <textarea
                  id="kisan-chat-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Apna sawaal likho..."
                  rows={1}
                  style={styles.textarea}
                  disabled={loading}
                />
                <button
                  id="kisan-send-btn"
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  style={{ ...styles.sendBtn, opacity: (!input.trim() || loading) ? 0.5 : 1 }}
                >
                  ➤
                </button>
              </div>
            </>
          )}

          {/* ── VOICE MODE ── */}
          {mode === 'voice' && (
            <div style={styles.voicePanel}>
              {/* Recent conversation in voice mode */}
              <div style={styles.voiceMessages}>
                {messages.slice(-4).filter(m => m.role !== 'assistant' || messages.indexOf(m) > 0).map((msg, i) => (
                  <div key={i} style={{
                    textAlign: msg.role === 'user' ? 'right' : 'left',
                    marginBottom: 8,
                    fontSize: '0.88rem',
                    color: msg.role === 'user' ? '#1A3C2E' : '#475569',
                    padding: '6px 12px',
                    background: msg.role === 'user' ? '#e8f7f2' : '#f8fafc',
                    borderRadius: 12,
                    maxWidth: '90%',
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    border: '1px solid rgba(29,158,117,0.1)'
                  }}>
                    {msg.content.length > 120 ? msg.content.slice(0, 120) + '...' : msg.content}
                  </div>
                ))}
              </div>

              {/* Transcript display */}
              {transcript && (
                <div style={styles.transcriptBox}>
                  <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Aapne kaha:</span>
                  <p style={{ margin: '4px 0 0', color: '#1e293b', fontWeight: 600 }}>"{transcript}"</p>
                </div>
              )}

              {/* Status label */}
              <p style={styles.voiceStatusText}>{voiceStatusLabel}</p>

              {/* Mic button */}
              <button
                id="kisan-mic-btn"
                onClick={handleMicClick}
                disabled={voiceStatus === 'thinking' || voiceStatus === 'speaking'}
                style={{
                  ...styles.micBtn,
                  background: listening
                    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                    : 'linear-gradient(135deg, #1D9E75, #116148)',
                  boxShadow: listening
                    ? '0 0 0 12px rgba(239,68,68,0.15), 0 8px 24px rgba(239,68,68,0.3)'
                    : '0 0 0 8px rgba(29,158,117,0.12), 0 8px 24px rgba(29,158,117,0.3)',
                  animation: listening ? 'pulse 1.2s ease-in-out infinite' : 'none',
                  opacity: (voiceStatus === 'thinking' || voiceStatus === 'speaking') ? 0.6 : 1,
                  cursor: (voiceStatus === 'thinking' || voiceStatus === 'speaking') ? 'not-allowed' : 'pointer'
                }}
                aria-label={listening ? 'Recording band karo' : 'Recording shuru karo'}
              >
                {listening ? '⏹' : '🎤'}
              </button>

              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: 8 }}>
                {listening ? 'Dobara click karo rokne ke liye' : 'Click karo bolne ke liye'}
              </p>
            </div>
          )}

        </div>
      )}

      {/* Keyframe injections */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        #kisan-chat-input:focus { outline: 2px solid #1D9E75; }
        #kisan-chat-input { resize: none; }
      `}</style>
    </>
  );
};

// ── Styles object ─────────────────────────────────────
const styles = {
  fab: {
    position: 'fixed',
    bottom: 28,
    right: 28,
    zIndex: 9999,
    background: 'linear-gradient(135deg, #1D9E75, #116148)',
    color: '#fff',
    border: 'none',
    borderRadius: 50,
    width: 60,
    height: 60,
    fontSize: '1.6rem',
    cursor: 'pointer',
    boxShadow: '0 6px 24px rgba(29,158,117,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    paddingInline: 16
  },
  fabLabel: {
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.01em',
    fontFamily: "'Inter', sans-serif"
  },
  window: {
    position: 'fixed',
    bottom: 100,
    right: 28,
    zIndex: 9998,
    width: 400,
    height: 540,
    background: '#fff',
    borderRadius: 24,
    boxShadow: '0 24px 64px rgba(26,60,46,0.18), 0 8px 20px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    animation: 'chatSlideUp 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
    border: '1px solid rgba(29,158,117,0.12)'
  },
  header: {
    background: 'linear-gradient(135deg, #1A3C2E 0%, #1D9E75 100%)',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  avatar: {
    width: 40, height: 40,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.3rem',
    border: '2px solid rgba(255,255,255,0.3)'
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1rem',
    fontFamily: "'Outfit', sans-serif"
  },
  headerSub: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: '0.75rem',
    display: 'flex', alignItems: 'center', gap: 5, marginTop: 1
  },
  onlineDot: {
    width: 7, height: 7,
    borderRadius: '50%',
    background: '#6EE7B7',
    display: 'inline-block',
    boxShadow: '0 0 6px #6EE7B7'
  },
  modeToggle: {
    display: 'flex',
    background: 'rgba(255,255,255,0.12)',
    borderRadius: 20,
    padding: 3,
    gap: 2
  },
  modeBtn: {
    background: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.78rem',
    fontWeight: 600,
    padding: '5px 10px',
    borderRadius: 16,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Inter', sans-serif"
  },
  modeBtnActive: {
    background: 'rgba(255,255,255,0.25)',
    color: '#fff'
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '14px 14px 6px',
    display: 'flex',
    flexDirection: 'column',
    background: '#f8fafc'
  },
  botAvatar: {
    width: 28, height: 28,
    borderRadius: '50%',
    background: '#e8f7f2',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.95rem',
    marginRight: 7,
    flexShrink: 0,
    alignSelf: 'flex-end'
  },
  botBubble: {
    background: '#fff',
    border: '1px solid rgba(29,158,117,0.12)',
    borderRadius: '18px 18px 18px 4px',
    padding: '10px 14px',
    fontSize: '0.9rem',
    lineHeight: 1.55,
    color: '#1e293b',
    maxWidth: '78%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
  },
  userBubble: {
    background: 'linear-gradient(135deg, #1D9E75, #178260)',
    color: '#fff',
    borderRadius: '18px 18px 4px 18px',
    padding: '10px 14px',
    fontSize: '0.9rem',
    lineHeight: 1.55,
    maxWidth: '78%',
    boxShadow: '0 4px 12px rgba(29,158,117,0.25)'
  },
  typingWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    padding: '2px 0'
  },
  dot: {
    display: 'inline-block',
    width: 7, height: 7,
    borderRadius: '50%',
    background: '#1D9E75',
    animation: 'dotBounce 1.2s ease-in-out infinite'
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 12px',
    background: '#fff',
    borderTop: '1px solid rgba(29,158,117,0.1)',
    flexShrink: 0
  },
  textarea: {
    flex: 1,
    border: '1.5px solid rgba(29,158,117,0.25)',
    borderRadius: 14,
    padding: '10px 13px',
    fontSize: '0.9rem',
    fontFamily: "'Inter', sans-serif",
    background: '#f8fafc',
    color: '#1e293b',
    lineHeight: 1.5,
    minHeight: 42,
    maxHeight: 120,
    overflowY: 'auto'
  },
  sendBtn: {
    background: 'linear-gradient(135deg, #1D9E75, #116148)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    width: 42, height: 42,
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 10px rgba(29,158,117,0.3)'
  },
  // Voice panel
  voicePanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px 20px',
    background: '#f8fafc',
    overflowY: 'auto'
  },
  voiceMessages: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 8,
    maxHeight: 160,
    overflowY: 'auto'
  },
  transcriptBox: {
    width: '100%',
    background: '#fff',
    border: '1.5px solid rgba(29,158,117,0.2)',
    borderRadius: 14,
    padding: '10px 14px',
    marginBottom: 8,
    minHeight: 52
  },
  voiceStatusText: {
    fontSize: '0.9rem',
    color: '#475569',
    fontWeight: 600,
    marginBottom: 16,
    textAlign: 'center'
  },
  micBtn: {
    width: 76, height: 76,
    borderRadius: '50%',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    flexShrink: 0
  }
};

export default KisanMitraChat;
