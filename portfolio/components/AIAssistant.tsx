import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Info } from 'lucide-react';
import { Message } from '../types';
import { queryAssistant } from '../services/geminiService';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('assistant_open');
    return saved === 'true';
  });

  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "I am a technical assistant for this portfolio. My knowledge is limited to the projects, experience, and skills documented on this site. If you request information that is not documented here, I will state that the information is missing.", 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('assistant_open', isOpen.toString());
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await queryAssistant(input);
    const assistantMessage: Message = { role: 'assistant', content: response, timestamp: new Date() };
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-2 group border border-white/10 dark:border-slate-200"
        aria-label="Toggle Assistant"
      >
        <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-[10px] uppercase tracking-widest px-0 group-hover:px-2">
          Assistant
        </span>
        <div className="relative">
           {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </div>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-20 right-6 md:bottom-28 md:right-8 z-50 w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <Info className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">Portfolio Assistant</h3>
              <p className="text-[9px] text-slate-400 uppercase font-medium">Factual Site Documentation Only</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-tr-none' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-tl-none border border-slate-100 dark:border-slate-800'}`}>
                <div className="flex items-center gap-2 mb-2 opacity-40 text-[9px] uppercase font-black tracking-widest">
                  {msg.role === 'user' ? <><User className="w-3 h-3" /> User</> : <><Bot className="w-3 h-3" /> Assistant</>}
                </div>
                <div className="leading-relaxed font-medium">{msg.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center border border-slate-100 dark:border-slate-800">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-pulse [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-5 border-t border-slate-100 dark:border-slate-800">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills or project details..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-4 pr-12 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 transition-colors disabled:opacity-20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};