"use client";

import React, { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS } from "@/constants";
import { Terminal as TerminalIcon } from "lucide-react";

export const Terminal = ({ className }: { className?: string }) => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>(["Welcome to the interactive terminal. Type 'help' for a list of commands."]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        // Add command to output
        const newOutput = [...output, `root@sid-portfolio:~# ${input}`];

        if (cmd === "clear") {
            setOutput([]);
        } else if (TERMINAL_COMMANDS[cmd as keyof typeof TERMINAL_COMMANDS]) {
            newOutput.push(TERMINAL_COMMANDS[cmd as keyof typeof TERMINAL_COMMANDS]);
            setOutput(newOutput);
        } else if (cmd !== "") {
            newOutput.push(`Command not found: ${cmd}. Type 'help' for available commands.`);
            setOutput(newOutput);
        } else {
            setOutput(newOutput);
        }

        setInput("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [output]);

    return (
        <section id="terminal" className={`bg-black relative flex flex-col ${className || 'py-20'}`}>
            <div className="container mx-auto px-6 flex-1 flex flex-col min-h-0">
                <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col min-h-0">
                    <div className="flex items-center gap-4 mb-6 shrink-0">
                        <div className="h-px flex-1 bg-white/10"></div>
                        <h2 className="text-3xl font-heading font-bold text-center">
                            <span className="text-primary">&lt;</span> Terminal <span className="text-primary">/&gt;</span>
                        </h2>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl font-mono text-sm md:text-base flex-1 flex flex-col min-h-0">
                        {/* Terminal Header */}
                        <div className="bg-zinc-900/80 p-3 flex items-center justify-between border-b border-white/10 shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-zinc-500 text-xs flex items-center gap-2">
                                <TerminalIcon size={14} />
                                sid@portfolio: ~
                            </div>
                            <div className="w-16"></div> {/* Spacer for balance */}
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 overflow-y-auto scrollbar-hide text-green-500/90 flex-1 min-h-0" onClick={() => inputRef.current?.focus()}>
                            {output.map((line, index) => (
                                <div key={index} className="mb-2 whitespace-pre-wrap">{line}</div>
                            ))}

                            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
                                <span className="text-primary">root@sid-portfolio:~#</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-transparent border-none outline-none flex-1 text-white/90"
                                    autoFocus
                                    spellCheck={false}
                                />
                            </form>
                            <div ref={bottomRef}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
