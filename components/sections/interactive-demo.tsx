"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Layout, Activity, Users, DollarSign, ArrowUpRight, CheckCircle2, Dumbbell, Flame } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: 'user' | 'agent';
  text: string;
};

type PreviewState = 'blank' | 'gym' | 'church' | 'dashboard' | 'light' | 'pricing';

// The "video" script timeline
const SCRIPT = [
  // Scene 1: Church
  { time: 1000, action: 'user_msg', text: "Build a modern website for a local church" },
  { time: 2000, action: 'agent_msg', text: "Scaffolding community layout. Adding sermon video player..." },
  { time: 3000, action: 'agent_msg', text: "Integrating secure donation portal." },
  { time: 3500, action: 'set_preview', state: 'church' },

  // Scene 2: Gym
  { time: 7000, action: 'user_msg', text: "Now build a landing page for a high-end fitness club" },
  { time: 8000, action: 'agent_msg', text: "Generating athletic theme. Adding membership portal..." },
  { time: 9000, action: 'agent_msg', text: "Integrating dynamic typography. Complete." },
  { time: 9500, action: 'set_preview', state: 'gym' },

  // Scene 3: Dashboard
  { time: 13000, action: 'user_msg', text: "Let's pivot to a B2B SaaS dashboard" },
  { time: 14000, action: 'agent_msg', text: "Scaffolding analytics layout. Generating charts..." },
  { time: 15000, action: 'agent_msg', text: "Connecting metrics. Dark theme applied." },
  { time: 15500, action: 'set_preview', state: 'dashboard' },
  
  // Scene 4: Light Mode
  { time: 19000, action: 'user_msg', text: "Switch the dashboard to a clean light mode" },
  { time: 20000, action: 'agent_msg', text: "Adjusting Tailwind utility classes..." },
  { time: 21000, action: 'agent_msg', text: "Recalculating contrast ratios. Light mode applied." },
  { time: 21500, action: 'set_preview', state: 'light' },
  
  // Scene 5: Pricing
  { time: 25000, action: 'user_msg', text: "Finally, generate a pricing page" },
  { time: 26000, action: 'agent_msg', text: "Removing dashboard layout..." },
  { time: 27000, action: 'agent_msg', text: "Generating 3-tier pricing strategy optimized for conversion." },
  { time: 27500, action: 'set_preview', state: 'pricing' },
  
  // Reset
  { time: 33000, action: 'reset' }
];

export function InteractiveDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [previewState, setPreviewState] = useState<PreviewState>('blank');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat without scrolling the entire window
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Run the automated "video" loop
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const runScript = () => {
      setMessages([]);
      setPreviewState('blank');
      setIsTyping(false);

      SCRIPT.forEach((step) => {
        const t = setTimeout(() => {
          if (step.action === 'user_msg') {
            setMessages(prev => [...prev, { id: Math.random().toString(), sender: 'user', text: step.text! }]);
            setIsTyping(true);
          } else if (step.action === 'agent_msg') {
            setMessages(prev => [...prev, { id: Math.random().toString(), sender: 'agent', text: step.text! }]);
          } else if (step.action === 'set_preview') {
            setPreviewState(step.state as PreviewState);
            setIsTyping(false);
          } else if (step.action === 'reset') {
            runScript();
          }
        }, step.time);
        timeouts.push(t);
      });
    };

    runScript();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Helper styles for preview states
  const isLight = previewState === 'light' || previewState === 'church';
  const bgMain = isLight ? "bg-slate-50" : "bg-[#0f172a]";
  const textMain = isLight ? "text-slate-900" : "text-white";
  const textSub = isLight ? "text-slate-500" : "text-slate-400";
  const cardBg = isLight ? "bg-white border-slate-200" : "bg-slate-800/60 border-slate-700";

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-y border-slate-800" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Watch Our Agents Build In Real-Time
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Experience the power of autonomous development. See how our AI agents dynamically architect, style, and deploy entire platforms on the fly.
          </motion.p>
        </div>

        <div className="w-full max-w-6xl mx-auto h-[600px] md:h-[700px] bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden z-10">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_60%)] pointer-events-none z-0" />

          {/* Browser Preview (Takes up the whole background) */}
          <div className="absolute inset-0 flex flex-col z-0">
            {/* Browser Header */}
            <div className="flex items-center gap-4 px-4 py-3 bg-slate-800/80 border-b border-slate-700 backdrop-blur-md shrink-0">
              <div className="flex gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <div className="w-3 h-3 rounded-full bg-slate-600" />
              </div>
              <div className="flex-1 bg-slate-900/50 rounded-md py-1.5 px-3 flex items-center justify-center text-xs text-slate-400 border border-slate-700 max-w-xl mx-auto truncate">
                <Layout className="w-3 h-3 mr-2 shrink-0" />
                https://demo.rocketsolutions.org
              </div>
            </div>

            <div className={`flex-1 relative overflow-hidden transition-colors duration-500 ${bgMain}`}>
              
              {/* State 0: Blank Wireframe */}
              <AnimatePresence>
                {previewState === 'blank' && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 p-4 md:p-8 flex flex-col gap-6 md:gap-8 pointer-events-none"
                  >
                    <div className="flex justify-between items-center max-w-4xl mx-auto w-full">
                      <div className="w-32 md:w-48 h-6 md:h-8 bg-slate-800 rounded animate-pulse" />
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-slate-800 rounded-full animate-pulse" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto w-full">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 md:h-32 bg-slate-800 rounded-xl animate-pulse" />
                      ))}
                    </div>
                    <div className="flex-1 max-w-4xl mx-auto w-full bg-slate-800 rounded-xl animate-pulse" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* State 1: Church */}
              <AnimatePresence>
                {previewState === 'church' && (
                  <motion.div
                    key="church"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col bg-slate-50 overflow-y-auto"
                  >
                    <div className="w-full p-4 md:p-6 flex justify-between items-center bg-white shadow-sm z-20 shrink-0">
                      <div className="flex items-center gap-2 text-slate-800 font-bold text-xl md:text-2xl">Grace Community</div>
                      <div className="hidden md:flex gap-6 text-sm text-slate-500 font-medium"><span>About</span><span>Sermons</span><span>Ministries</span></div>
                      <div className="px-6 py-2.5 text-xs bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full font-bold">Give Online</div>
                    </div>
                    
                    <div className="w-full bg-slate-900 py-16 md:py-24 px-6 relative overflow-hidden shrink-0">
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.8)_0%,_transparent_60%)]" />
                      <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.h1 initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.1}} className="text-4xl md:text-5xl font-bold text-white mb-6">
                          Welcome Home.
                        </motion.h1>
                        <motion.p initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.2}} className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                          Join us this Sunday at 9AM and 11AM for worship, community, and a message of hope.
                        </motion.p>
                        <motion.button initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.3}} className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:bg-slate-100 transition-colors">
                          Plan Your Visit
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-12 pb-40 md:pb-12 shrink-0">
                       <h3 className="text-xl font-bold text-slate-800 mb-6">Latest Sermon</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="bg-slate-200 aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner group cursor-pointer border border-slate-300">
                           <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                             <div className="w-0 h-0 border-t-8 border-b-8 border-l-[14px] border-t-transparent border-b-transparent border-l-blue-600 ml-1" />
                           </div>
                         </div>
                         <div className="flex flex-col justify-center">
                           <div className="text-sm text-blue-600 font-bold mb-2 uppercase tracking-wide">Series: Foundations</div>
                           <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Building on the Rock</h4>
                           <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">Pastor David explores the importance of a strong spiritual foundation in an ever-changing world. Discover how timeless principles apply to our modern lives.</p>
                           <button className="self-start text-sm font-bold text-slate-800 underline hover:text-blue-600 transition-colors">Listen Now →</button>
                         </div>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* State 2: Gym */}
              <AnimatePresence>
                {previewState === 'gym' && (
                  <motion.div
                    key="gym"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col bg-[#050505] overflow-y-auto"
                  >
                    <div className="w-full p-4 md:p-6 flex justify-between items-center border-b border-[#1a1a1a] shrink-0">
                      <div className="flex items-center gap-2 text-lime-400 font-black tracking-tighter text-xl md:text-2xl uppercase italic">IRON<span className="text-white">CORE</span></div>
                      <div className="hidden md:flex gap-8 text-xs text-stone-300 font-bold tracking-widest uppercase"><span>Classes</span><span>Trainers</span><span>Location</span></div>
                      <div className="px-6 py-2.5 text-xs bg-lime-400 hover:bg-lime-500 transition-colors text-black rounded font-black tracking-wider uppercase cursor-pointer">Join Now</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 md:gap-16 pb-40 md:pb-12 shrink-0">
                      <div className="flex-1 max-w-lg text-center md:text-left">
                        <motion.h1 initial={{x: -20, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: 0.1}} className="text-5xl md:text-7xl font-black text-white mb-4 leading-[0.9] uppercase italic tracking-tighter">
                          Push Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Limits.</span>
                        </motion.h1>
                        <motion.p initial={{x: -20, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: 0.2}} className="text-sm md:text-base text-stone-400 mb-8 font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                          Elite equipment. Expert coaching. Open 24/7. Transform your body and mind at the city's premier fitness destination.
                        </motion.p>
                        <motion.div initial={{y: 20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.3}} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                          <button className="px-8 py-4 bg-lime-400 text-black rounded font-black text-sm hover:bg-lime-500 transition-colors tracking-widest uppercase">Start Free Trial</button>
                          <button className="px-8 py-4 border-2 border-stone-800 text-white rounded font-black text-sm hover:bg-stone-800 transition-colors tracking-widest uppercase">View Plans</button>
                        </motion.div>
                      </div>
                      
                      <motion.div initial={{scale: 0.9, opacity:0, rotate: -10}} animate={{scale:1, opacity:1, rotate: 0}} transition={{delay: 0.4, type: "spring"}} className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] shadow-[0_0_50px_rgba(163,230,53,0.1)] overflow-hidden relative flex flex-col items-center justify-center shrink-0">
                        <Dumbbell className="w-32 h-32 md:w-48 md:h-48 text-lime-400 mb-4 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                        <div className="flex gap-2 items-center text-stone-300 font-bold tracking-widest text-sm uppercase">
                          <Flame className="w-4 h-4 text-orange-500" /> 2,400 CAL BURNED
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.15)_0%,_transparent_70%)] pointer-events-none" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* State 3 & 4: Dashboard (Dark / Light) */}
              <AnimatePresence>
                {(previewState === 'dashboard' || previewState === 'light') && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 p-4 md:p-8 flex flex-col gap-6 md:gap-8 overflow-y-auto"
                  >
                    <div className="max-w-4xl mx-auto w-full flex flex-col gap-6 md:gap-8 pb-40 md:pb-0">
                      <div className="flex justify-between items-center">
                        <h3 className={`font-bold text-xl md:text-3xl transition-colors duration-500 ${textMain}`}>Overview</h3>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium shadow-md">
                          JD
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className={`border p-4 md:p-6 rounded-xl shadow-sm transition-colors duration-500 ${cardBg}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm md:text-base font-medium transition-colors duration-500 ${textSub}`}>Revenue</span>
                            <DollarSign className="w-5 h-5 text-green-500" />
                          </div>
                          <div className={`text-2xl md:text-4xl font-bold transition-colors duration-500 ${textMain}`}>$45,231</div>
                          <div className="text-green-500 text-xs md:text-sm flex items-center mt-2"><ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 mr-1"/> 12.5%</div>
                        </div>

                        <div className={`border p-4 md:p-6 rounded-xl shadow-sm transition-colors duration-500 ${cardBg}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm md:text-base font-medium transition-colors duration-500 ${textSub}`}>Active Users</span>
                            <Users className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className={`text-2xl md:text-4xl font-bold transition-colors duration-500 ${textMain}`}>2,405</div>
                          <div className="text-green-500 text-xs md:text-sm flex items-center mt-2"><ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 mr-1"/> 5.2%</div>
                        </div>

                        <div className={`border p-4 md:p-6 rounded-xl shadow-sm transition-colors duration-500 ${cardBg}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm md:text-base font-medium transition-colors duration-500 ${textSub}`}>System Load</span>
                            <Activity className="w-5 h-5 text-purple-500" />
                          </div>
                          <div className={`text-2xl md:text-4xl font-bold transition-colors duration-500 ${textMain}`}>14%</div>
                          <div className={`text-xs md:text-sm flex items-center mt-2 transition-colors duration-500 ${textSub}`}>Stable</div>
                        </div>
                      </div>

                      <div className={`min-h-[200px] md:min-h-[250px] border rounded-xl p-4 md:p-6 flex flex-col shadow-sm transition-colors duration-500 ${cardBg}`}>
                        <div className={`text-sm md:text-base font-medium mb-4 transition-colors duration-500 ${textSub}`}>Traffic Analysis</div>
                        <div className="flex-1 flex items-end gap-2 md:gap-4 px-2">
                          {[40, 70, 45, 90, 65, 100, 85, 60, 110, 95].map((height, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                              className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm md:rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* State 5: Pricing Page */}
              <AnimatePresence>
                {previewState === 'pricing' && (
                  <motion.div
                    key="pricing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 p-4 md:p-8 flex flex-col items-center justify-center overflow-y-auto"
                  >
                    <div className="flex flex-col items-center justify-center min-h-full pb-40 md:pb-0 pt-8 md:pt-0">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Simple Pricing</h3>
                      <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12">Choose the plan that fits your needs.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
                        <div className="bg-slate-800/50 border border-slate-700 p-6 md:p-8 rounded-2xl flex flex-col">
                          <div className="text-slate-300 font-medium mb-2">Starter</div>
                          <div className="text-4xl font-bold text-white mb-6">$49<span className="text-base text-slate-500 font-normal">/mo</span></div>
                          <div className="space-y-4 mb-8 flex-1">
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> 1 Project</div>
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> Basic Analytics</div>
                          </div>
                          <div className="w-full py-3 text-center text-sm font-medium bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">Select Plan</div>
                        </div>
                        
                        <div className="bg-slate-800 border-2 border-blue-500 p-6 md:p-8 rounded-2xl flex flex-col relative shadow-[0_0_30px_rgba(37,99,235,0.2)] md:-translate-y-4">
                          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">POPULAR</div>
                          <div className="text-blue-400 font-medium mb-2">Pro</div>
                          <div className="text-4xl font-bold text-white mb-6">$99<span className="text-base text-slate-500 font-normal">/mo</span></div>
                          <div className="space-y-4 mb-8 flex-1">
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> 5 Projects</div>
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> Advanced Analytics</div>
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> API Access</div>
                          </div>
                          <div className="w-full py-3 text-center text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">Select Plan</div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 p-6 md:p-8 rounded-2xl flex flex-col">
                          <div className="text-slate-300 font-medium mb-2">Enterprise</div>
                          <div className="text-4xl font-bold text-white mb-6">Custom</div>
                          <div className="space-y-4 mb-8 flex-1">
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> Unlimited Projects</div>
                            <div className="flex items-center text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-3"/> 24/7 SLA Support</div>
                          </div>
                          <div className="w-full py-3 text-center text-sm font-medium bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">Contact Us</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Automated Terminal Panel (Floating Overlay) */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-[calc(100%-2rem)] md:w-[420px] h-[220px] md:h-[280px] bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden z-20">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 shrink-0">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span className="font-mono text-xs text-slate-300">rocket-agent-01 (Auto)</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs custom-scrollbar relative scroll-smooth">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div 
                      className={`max-w-[90%] rounded-xl px-3 py-2 ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-sm' 
                          : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-bl-sm backdrop-blur-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-start"
                  >
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl rounded-bl-sm px-3 py-2 flex gap-1.5">
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1 h-1 bg-slate-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-slate-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1 h-1 bg-slate-400 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Play overlay subtle indicator */}
            <div className="p-2 bg-slate-900/90 border-t border-slate-800 text-center text-[10px] text-slate-500 font-mono">
              ● Live Simulation Running
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
