"use client";


import Image from "next/image";
import LogoImg from "../../../public/logo.png";

export function Section1() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-6 transition-opacity duration-700">
            <div className="relative z-20 text-center space-y-6 pointer-events-auto mt-20 md:mt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider uppercase text-white/60 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_var(--accent-cyan)]"></span>
                    Scene 1: Bare-Metal Awakening
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-2xl">
                    <span className="sr-only">Zephyria Network - The Ultra-Fast Zig Blockchain for High TPS </span>
                    Bare-Metal<br />Performance.
                </h1>
                <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md mx-auto font-light">
                    Zephyria pairs Zero-Conflict Parallel Execution with the custom Aquarius RISC-V VM. Built entirely in <span className="text-white font-medium">Zig</span>. Unimaginably fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center">
                    <a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide active:scale-95 transition-all hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2" href="#">
                        Read the Docs
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                    <a className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 glass-panel font-semibold text-sm tracking-wide active:scale-95 transition-all hover:bg-white/5 hover:border-white/20 flex items-center justify-center gap-2" href="#">
                        <span className="material-symbols-outlined text-sm">code</span>
                        GitHub Repository
                    </a>
                </div>
            </div>
            <div className="absolute bottom-2 md:bottom-8 flex flex-col items-center gap-3 opacity-50 animate-pulse z-0 pointer-events-none translate-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase font-medium">Scroll to dive</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
            </div>
        </div>
    );
}

export function Section2() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 transition-opacity duration-700">
            <div className="hidden md:block"></div> {/* Spacer for 3D focus */}
            <div className="flex items-center pointer-events-auto">
                <div className="max-w-lg glass-panel p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500"></div>
                    <div className="w-12 h-[2px] bg-accent-cyan mb-8 shadow-[0_0_15px_var(--accent-cyan)]"></div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-8">
                        <span className="sr-only">High Performance Blockchain with </span>
                        Zero-Conflict <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Parallelism</span>
                    </h2>
                    <div className="space-y-5 relative z-10">
                        <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                            Traditional chains queue transactions sequentially, creating artificial friction. Zephyria operates a true Conflict-Free 100% Parallel Structure out of the box.
                        </p>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                            By natively mapping non-overlapping state access patterns in real-time, we scale linearly across threads—delivering unprecedented execution capabilities on standard Consumer Hardware.
                        </p>
                        <p className="text-sm md:text-base text-white font-medium leading-relaxed drop-shadow-md border-l-2 border-accent-cyan pl-4 py-1 mt-6">
                            Speed without collisions. Throughput without bottlenecks.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                        <div className="text-left">
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Performance Target</div>
                            <div className="font-mono text-accent-cyan font-bold tracking-wider">1 Billion Gas/s</div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 align-right">Hardware Tier</div>
                            <div className="font-mono text-white font-bold tracking-wider text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-white/60">dns</span> Consumer Grade
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Section3() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 transition-opacity duration-700">
            <div className="flex items-center pointer-events-auto">
                <div className="max-w-lg glass-panel p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500"></div>
                    <div className="w-12 h-[2px] bg-accent-orange mb-8 shadow-[0_0_15px_var(--accent-orange)]"></div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6">
                        EVM Compat, <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Reimagined.</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed font-light mb-10 relative z-10">
                        Don&apos;t rewrite your legacy dApps; transpile them. The Sol2Zig transpiler converts your Solidity smart contracts natively into optimized Zig, executing at a fraction of the cost on Aquarius.
                    </p>

                    <div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-5 relative overflow-hidden shadow-inner z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></div>
                                <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">Sol2Zig Engine</span>
                            </div>
                            <span className="material-symbols-outlined text-sm text-white/50">bolt</span>
                        </div>
                        <code className="font-mono text-xs leading-loose text-white/60 block whitespace-pre-wrap">
                            {/* Transpiled Output */}
                            <span className="text-orange-400">pub fn</span> <span className="text-blue-300">transfer</span>(ctx: *Context, to: Address, amt: u256) !void {"{"}<br />
                            &nbsp;&nbsp;<span className="text-orange-400">try</span> ctx.state.subBal(ctx.caller(), amt);<br />
                            &nbsp;&nbsp;<span className="text-orange-400">try</span> ctx.state.addBal(to, amt);<br />
                            {"}"}
                        </code>
                    </div>
                </div>
            </div>
            <div className="hidden md:block"></div>
        </div>
    );
}

export function Section4() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 transition-opacity duration-700">
            <div className="hidden md:block"></div>
            <div className="flex items-center pointer-events-auto">
                <div className="max-w-lg glass-panel p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 relative z-10">Write Contracts the Right Way.</h2>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed mb-10 font-light relative z-10">
                        Native Zig is incredibly powerful. The Zephyria SDK wraps that power in a builder-friendly abstraction layer. Seamless state management, native serialization, and perfect integration with the Aquarius VM environment—without sacrificing speed.
                    </p>
                    <div className="flex flex-col gap-4 relative z-10">
                        <a href="#" className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                            <span className="text-sm font-semibold tracking-wide">Explore the SDK</span>
                            <span className="material-symbols-outlined text-sm text-white/50">open_in_new</span>
                        </a>
                        <a href="#" className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl border border-transparent hover:border-white/10 transition-colors">
                            <span className="text-sm font-semibold tracking-wide text-white/60">Read the Architecture Docs</span>
                            <span className="material-symbols-outlined text-sm text-white/50">article</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Section5() {
    return (
        <div className="w-full min-h-screen flex flex-col pt-32 pointer-events-auto relative overflow-hidden">
            {/* Dark overlay specifically for final section focus */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-0"></div>
            <div className="absolute inset-0 network-topology opacity-20 z-0 mix-blend-screen"></div>

            <div className="text-center max-w-4xl mx-auto relative z-10 w-full">
                <div className="inline-block px-5 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-[10px] md:text-xs font-bold tracking-widest uppercase mb-10 shadow-[0_0_30px_rgba(0,240,255,0.15)] ring-1 ring-accent-cyan/50 backdrop-blur-md">
                    Secured by Zelius
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 drop-shadow-2xl">Absolute Finality.</h2>
                <p className="text-base md:text-xl text-white/60 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                    Sub-second block times locked in with mathematical certainty. The bespoke Zelius consensus algorithm leverages advanced BFT to neutralize network partitions instantly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <div className="glass-panel p-8 rounded-3xl flex flex-col items-start text-left border-white/10 hover:border-accent-cyan/50 transition-colors group">
                        <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-medium">Target Finality</span>
                        <span className="text-4xl md:text-5xl font-mono text-accent-cyan font-light tracking-tighter group-hover:scale-105 transition-transform origin-left">&lt;1<span className="text-lg md:text-2xl text-accent-cyan/50">s</span></span>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl flex flex-col items-start text-left border-white/10 hover:border-white/40 transition-colors group">
                        <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-medium">Network Consensus</span>
                        <span className="text-4xl md:text-5xl font-mono text-white font-light tracking-tighter group-hover:scale-105 transition-transform origin-left">Provable</span>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl flex flex-col items-start text-left border-white/10 hover:border-accent-orange/50 transition-colors group">
                        <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-medium">Network Status</span>
                        <span className="text-4xl md:text-5xl font-mono text-accent-orange font-light tracking-tighter group-hover:scale-105 transition-transform origin-left">Pre-Launch</span>
                    </div>
                </div>

                {/* Live Mobile App feel block */}
                <div className="mt-16 max-w-xl mx-auto glass-panel border-white/10 rounded-2xl p-6 hidden md:block">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs uppercase tracking-widest text-white/60 font-mono">Testnet Alpha Node</span>
                        </div>
                        <span className="font-mono text-xs text-accent-cyan/80 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">done_all</span> Syncing
                        </span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                    <div className="flex justify-between items-center px-4">
                        <div className="text-left">
                            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Genesis Block</div>
                            <div className="font-mono text-white font-bold text-sm">Pending</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Waitlist Signups</div>
                            <div className="font-mono text-white font-bold text-sm">142,500+</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Target Gas</div>
                            <div className="font-mono text-white font-bold text-sm">&lt;0.01 Gwei</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow"></div>
            <footer className="w-full mt-16 px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-[#020202] z-20 gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                        <Image src={LogoImg} alt="Zephyria Icon" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all" />
                    </div>
                    <span className="text-lg font-bold tracking-wider text-white">ZEPHYRIA</span>
                </div>
                <div className="flex items-center gap-8">
                    <a href="#" className="text-xs uppercase tracking-widest text-[#888] hover:text-white transition-colors font-medium">Developers</a>
                    <a href="#" className="text-xs uppercase tracking-widest text-[#888] hover:text-white transition-colors font-medium">Network</a>
                    <a href="#" className="text-xs uppercase tracking-widest text-[#888] hover:text-white transition-colors font-medium">Ecosystem</a>
                    <a href="#" className="text-xs uppercase tracking-widest text-[#888] hover:text-white transition-colors font-medium">Whitepaper</a>
                </div>
                <div className="flex items-center gap-4 text-white/30">
                    <span className="text-[10px] font-mono">v1.0.0-rc.1</span>
                </div>
            </footer>
        </div>
    );
}
