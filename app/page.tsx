"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Brain, FolderTree, Zap, Database, Terminal, Layers, CheckCircle, Clock, GitBranch, FileText, Shield, Activity, Command, Users, ArrowRight, X, Check } from "lucide-react";

const BRAND = {
  colors: { orange: "#FA4B00", purple: "#B379FF", text: "#1E1E24", textMuted: "#6B7280", background: "#FFFFFF" },
  gradient: "linear-gradient(135deg, #FA4B00 0%, #B379FF 100%)",
};

function LeapterLogo({ className = "" }: { className?: string }) {
  return (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 58" height="58" width="200" className={className}>
      <defs><linearGradient id="logo-gradient" gradientUnits="userSpaceOnUse" x1="39.882" y1="57.301" x2="9.97" y2="8.481"><stop stopColor="#FA4B00" /><stop stopColor="#B379FF" offset="1" /></linearGradient></defs>
      <g>
        <path fill="url(#logo-gradient)" d="M0 57.301V42.976h14.325V57.3z" /><path fill="url(#logo-gradient)" d="M28.65 28.65h14.326v14.326h-28.65V0H28.65z" /><path fill="url(#logo-gradient)" d="M42.976 28.65V14.326H57.3v14.326z" />
        <path fill="#1E1E24" d="M71.36 40V15.7h4.17v20.7h12.9V40z" /><path fill="#1E1E24" d="M98.733 40.36q-2.85 0-4.98-1.14a8.05 8.05 0 0 1-3.24-3.3q-1.14-2.13-1.14-4.98t1.11-4.92a7.95 7.95 0 0 1 3.21-3.24q2.07-1.14 4.89-1.14 2.7 0 4.65 1.08 1.95 1.05 3 3.03 1.08 1.95 1.08 4.65v1.5h-14.04q.24 2.46 1.65 3.81 1.41 1.32 3.78 1.32 1.74 0 2.85-.66t1.53-1.98h4.14q-.66 2.82-2.91 4.41-2.22 1.56-5.58 1.56m-5.34-11.31h10.02q-.24-1.98-1.5-3.03-1.26-1.08-3.33-1.08t-3.42 1.08q-1.35 1.05-1.77 3.03" /><path fill="#1E1E24" d="M115.944 40.33q-3.09 0-4.89-1.53-1.77-1.53-1.77-4.02 0-2.61 1.8-4.05t5.16-1.44h5.7v-.75q0-3.6-4.08-3.6-3.45 0-4.14 2.49h-4.08q.51-2.79 2.64-4.29 2.16-1.5 5.61-1.5 3.87 0 5.91 1.8 2.04 1.77 2.04 5.16v7.29h1.95V40h-4.23v-2.85h-1.26q-.93 1.5-2.52 2.34t-3.84.84m.6-3.18q1.53 0 2.76-.6t1.92-1.59q.72-1.02.72-2.25v-.57h-5.49q-3.3 0-3.3 2.46 0 1.2.9 1.89.9.66 2.49.66" /><path fill="#1E1E24" d="M131.233 47.2V26.11h-2.07V22h4.26v2.85h1.26q.9-1.56 2.49-2.37 1.59-.84 3.81-.84 2.73 0 4.62 1.17 1.92 1.14 2.91 3.24 1.02 2.1 1.02 4.95t-.99 4.98q-.96 2.1-2.82 3.24-1.83 1.14-4.41 1.14-2.04 0-3.57-.78-1.5-.81-2.31-2.28h-.12v9.9zm9.03-10.35q2.52 0 3.84-1.56 1.35-1.56 1.35-4.29t-1.35-4.29q-1.32-1.56-3.84-1.56-2.25 0-3.6 1.29t-1.35 3.48v2.16q0 2.19 1.35 3.48t3.6 1.29" /><path fill="#1E1E24" d="M157.675 40q-1.65 0-2.58-.84-.9-.84-.9-2.55V25.18h-3.24V22h3.27v-5.4h4.02V22h4.47v3.18h-4.44v11.61h4.89V40z" /><path fill="#1E1E24" d="M174.109 40.36q-2.85 0-4.98-1.14a8.05 8.05 0 0 1-3.24-3.3q-1.14-2.13-1.14-4.98t1.11-4.92a7.95 7.95 0 0 1 3.21-3.24q2.07-1.14 4.89-1.14 2.7 0 4.65 1.08 1.95 1.05 3 3.03 1.08 1.95 1.08 4.65v1.5h-14.04q.24 2.46 1.65 3.81 1.41 1.32 3.78 1.32 1.74 0 2.85-.66t1.53-1.98h4.14q-.66 2.82-2.91 4.41-2.22 1.56-5.58 1.56m-5.34-11.31h10.02q-.24-1.98-1.5-3.03-1.26-1.08-3.33-1.08t-3.42 1.08q-1.35 1.05-1.77 3.03" /><path fill="#1E1E24" d="M187.09 40V26.11h-2.07V22h4.26v3.45h1.26q.72-1.77 2.28-2.7 1.59-.93 3.63-.93h1.5v3.51h-1.68q-2.55 0-3.87 1.47-1.29 1.47-1.29 3.93V40z" />
      </g>
    </svg>
  );
}

// SLIDE 1 - Title
function Slide1() {
  const stats = [
    { label: "PRs Merged", value: "10" },
    { label: "Days", value: "3" },
    { label: "Contributors", value: "5" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-24 pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}><LeapterLogo className="mb-6" /></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-6xl font-bold mb-4" style={{ color: BRAND.colors.text }}>Claude Code Best Practices</motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl max-w-3xl mb-2" style={{ color: BRAND.colors.textMuted }}>Complete Implementation Summary</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-base max-w-2xl" style={{ color: BRAND.colors.textMuted }}>How we made the codebase maximally productive for AI-assisted development</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex items-center gap-6">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold" style={{ color: BRAND.colors.orange }}>{s.value}</p>
            <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>{s.label}</p>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-6 flex items-center gap-3 text-sm" style={{ color: BRAND.colors.textMuted }}><Clock className="w-4 h-4" /><span>Feb 1-3, 2026</span></motion.div>
    </div>
  );
}

// SLIDE 2 - Goal
function Slide2() {
  const problems = [
    "Claude explores codebase randomly on every task",
    "Context lost after /clear or /compact",
    "No shared memory of decisions across developers",
    "Dangerous commands need manual approval every time",
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full px-24 pt-28">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: BRAND.colors.text }}>The Problem</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
              <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm" style={{ color: BRAND.colors.text }}>{p}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-center">
          <p className="text-xl mb-2" style={{ color: BRAND.colors.textMuted }}>The Goal:</p>
          <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: BRAND.colors.text }}>Make the codebase <span className="font-bold" style={{ background: BRAND.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>maximally productive</span> for AI-assisted development</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

// SLIDE 3 - Architecture
function Slide3() {
  const folders = [
    { name: "CLAUDE.md", desc: "🧠 Main entry point — Claude reads this FIRST", detail: "Workflow, commands, patterns, tech stack", icon: Brain, highlight: true }, 
    { name: "docs/", desc: "📚 All documentation consolidated", detail: "index.md, HANDBOOK, architecture, SOPs", icon: FolderTree }, 
    { name: ".claude/", desc: "⚙️ Claude Code configuration", detail: "settings.json, memory/, skills/, hooks/, agents/", icon: Layers }, 
    { name: "apps/", desc: "💻 Application code (monorepo)", detail: "lab, runtime, hub — each owns its Dockerfile", icon: Terminal }
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><FolderTree className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Architecture at a Glance</h2><p style={{ color: BRAND.colors.textMuted }}>Claude Code-optimized project structure</p></div>
      </motion.div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {folders.map((item, i) => { const Icon = item.icon; return (
          <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`p-5 rounded-2xl border-2 ${item.highlight ? "border-transparent" : "border-gray-200"}`} style={item.highlight ? { background: BRAND.gradient } : {}}>
            <div className="flex items-start gap-3 mb-2">
              <div className={`p-2 rounded-xl ${item.highlight ? "bg-white/20" : "bg-gray-100"}`}><Icon className={`w-5 h-5 ${item.highlight ? "text-white" : ""}`} style={!item.highlight ? { color: BRAND.colors.orange } : {}} /></div>
              <div><h3 className={`text-lg font-bold font-mono ${item.highlight ? "text-white" : ""}`} style={!item.highlight ? { color: BRAND.colors.text } : {}}>{item.name}</h3><p className={`text-sm ${item.highlight ? "text-white/80" : ""}`} style={!item.highlight ? { color: BRAND.colors.textMuted } : {}}>{item.desc}</p></div>
            </div>
            <p className={`text-xs ml-10 font-mono ${item.highlight ? "text-white/60" : ""}`} style={!item.highlight ? { color: BRAND.colors.textMuted } : {}}>{item.detail}</p>
          </motion.div>
        ); })}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Key principle:</strong> Claude reads CLAUDE.md first, then knows exactly where everything is. No more random exploration.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 4 - CLAUDE.md Brain
function Slide4() {
  const sections = [
    { name: "Developer Workflow", desc: "Step-by-step guide: task assessment matrix, TDD requirements" },
    { name: "Task Assessment", desc: "Simple fix → implement immediately; Complex feature → Plan Mode first" },
    { name: "MCP Verification", desc: "How to verify with mcp__supabase, mcp__playwright" },
    { name: "Agent Usage Guide", desc: "Trigger keywords, auto-invocation patterns for each agent" },
    { name: "Tech Stack", desc: "Exact versions: Next.js 15.5.9, React 19.2.3, pnpm workspace" },
    { name: "Commands Reference", desc: "All slash commands: /verify, /commit, /fix-ci, /checkpoint..." },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Brain className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>CLAUDE.md</h2><p style={{ color: BRAND.colors.textMuted }}>The Brain — Claude reads this FIRST</p></div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-base italic mb-4" style={{ color: BRAND.colors.textMuted }}>&ldquo;Not documentation. Instructions. Write it like onboarding a dev who starts coding in 5 minutes.&rdquo;</motion.p>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-bold text-sm mb-1" style={{ color: BRAND.colors.orange }}>{s.name}</p>
            <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Why it matters:</strong> Before, Claude explored randomly. Now it reads CLAUDE.md and <em>immediately knows</em> what commands to run, what patterns to follow, what to avoid, and how to verify work.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 5 - Impact 50%
function Slide5() {
  const metrics = [
    { label: "First tool call", before: "~12 calls", after: "~4 calls", improvement: "3x faster" },
    { label: "Context reads", before: "Scattered lookups", after: "Single CLAUDE.md", improvement: "Predictable" },
    { label: "Onboarding time", before: "Hours exploring", after: "Minutes reading", improvement: "10x faster" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>The Impact</motion.h2>
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-8 mb-4">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-red-50 border border-red-200">
            <p className="text-sm font-mono text-red-600 mb-2">BEFORE</p>
            <p className="text-lg" style={{ color: BRAND.colors.text }}>Claude explores codebase blindly</p>
            <p className="text-sm mt-2" style={{ color: BRAND.colors.textMuted }}>Reads random files, guesses structure, asks clarifying questions</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-6 rounded-2xl bg-green-50 border border-green-200">
            <p className="text-sm font-mono text-green-600 mb-2">AFTER</p>
            <p className="text-lg" style={{ color: BRAND.colors.text }}>Claude <strong>immediately knows</strong></p>
            <p className="text-sm mt-2" style={{ color: BRAND.colors.textMuted }}>Architecture, conventions, file locations, team patterns — all in CLAUDE.md</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="text-sm font-medium mb-3" style={{ color: BRAND.colors.textMuted }}>{m.label}</p>
              <div className="flex items-center gap-2 mb-1">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-sm line-through" style={{ color: BRAND.colors.textMuted }}>{m.before}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium" style={{ color: BRAND.colors.text }}>{m.after}</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: BRAND.gradient }}>{m.improvement}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="p-6 rounded-2xl text-center mt-auto" style={{ background: BRAND.gradient }}>
          <p className="text-5xl font-bold text-white mb-1">50%+</p>
          <p className="text-white/80">less exploration time per task (measured across 10 PRs)</p>
        </motion.div>
      </div>
    </div>
  );
}

// SLIDE 6 - Three-Tier Memory
function Slide6() {
  const tiers = [
    { tier: "Tier 1", name: "Shared Knowledge", items: "decisions.md • context.md • conventions.md", desc: "Architectural decisions, project context, coding standards — committed to git, shared across team", note: "Git ✓", color: BRAND.colors.orange }, 
    { tier: "Tier 2", name: "Session Memory", items: "sessions/2026-02-04.md • Personal checkpoints", desc: "Per-developer progress logs, .gitignored — survives /clear and /compact", note: "Git ✗", color: BRAND.colors.purple }, 
    { tier: "Tier 3", name: "Ephemeral", items: "Current conversation • Active task context", desc: "Lost on session end — but checkpointed automatically to Tier 2", note: "Context", color: "#4F46E5" }
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Database className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Three-Tier Memory</h2><p style={{ color: BRAND.colors.textMuted }}>Session persistence across /clear and /compact</p></div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm italic mb-4" style={{ color: BRAND.colors.textMuted }}>&ldquo;Short-term via checkpointing; Long-term via shared decisions and skills&rdquo;</motion.p>
      <div className="flex-1 flex flex-col gap-3">
        {tiers.map((item, i) => (
          <motion.div key={item.tier} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15 }} className="p-4 rounded-2xl border-l-4 bg-gray-50" style={{ borderColor: item.color }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3"><span className="text-xs font-mono px-3 py-1 rounded-full text-white" style={{ background: item.color }}>{item.tier}</span><h3 className="text-lg font-bold" style={{ color: BRAND.colors.text }}>{item.name}</h3></div>
              <span className="text-xs font-mono px-2 py-1 rounded bg-gray-200">{item.note}</span>
            </div>
            <p className="text-sm font-mono mb-1" style={{ color: BRAND.colors.orange }}>{item.items}</p>
            <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// SLIDE 7 - Session Commands
function Slide7() {
  const commands = [
    { cmd: "/checkpoint", desc: "Save progress to session file", when: "After features", detail: "Appends current state to sessions/YYYY-MM-DD.md — survives /clear" }, 
    { cmd: "/decision", desc: "Log Architectural Decision Record", when: "After arch choice", detail: "Prompts for title, context, options, decision, consequences → saved to decisions.md" }, 
    { cmd: "/handoff", desc: "Generate handoff document", when: "Passing to teammate", detail: "Creates summary of current state, pending work, and context for next developer" }
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><GitBranch className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Session Commands</h2><p style={{ color: BRAND.colors.textMuted }}>Memory persistence shortcuts</p></div>
      </motion.div>
      <div className="flex-1 flex flex-col gap-3">
        {commands.map((item, i) => (
          <motion.div key={item.cmd} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-4 mb-2">
              <code className="text-lg font-bold px-3 py-1 rounded" style={{ background: BRAND.gradient, color: "white" }}>{item.cmd}</code>
              <span className="text-lg flex-1 font-medium" style={{ color: BRAND.colors.text }}>{item.desc}</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-200" style={{ color: BRAND.colors.textMuted }}>{item.when}</span>
            </div>
            <p className="text-sm ml-1" style={{ color: BRAND.colors.textMuted }}>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// SLIDE 8 - Docs Before/After
function Slide8() {
  const newStructure = [
    { path: "docs/index.md", desc: "Navigation hub — links to everything" },
    { path: "docs/DEVELOPER_HANDBOOK.md", desc: "New dev onboarding guide (272 lines)" },
    { path: "docs/architecture/", desc: "System design docs" },
    { path: "docs/sop/", desc: "Standard operating procedures" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><FileText className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Docs Consolidation</h2><p style={{ color: BRAND.colors.textMuted }}>+336 lines, single source of truth</p></div>
      </motion.div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="p-5 rounded-2xl bg-red-50 border border-red-200">
          <p className="text-sm font-mono text-red-600 mb-3">BEFORE</p>
          <ul className="space-y-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
            <li>• /documentation/ folder</li>
            <li>• /developer-docs/ folder</li>
            <li>• Random READMEs scattered</li>
            <li>• MCP guide at root level</li>
          </ul>
          <p className="mt-4 text-red-600 font-bold">5 places to check</p>
          <p className="text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>Claude wastes tokens searching multiple locations</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-5 rounded-2xl bg-green-50 border border-green-200">
          <p className="text-sm font-mono text-green-600 mb-3">AFTER</p>
          <ul className="space-y-2 text-sm">
            {newStructure.map((item, i) => (
              <li key={i}><span className="font-mono" style={{ color: BRAND.colors.text }}>{item.path}</span><br/><span style={{ color: BRAND.colors.textMuted }}>{item.desc}</span></li>
            ))}
          </ul>
          <p className="mt-3 text-green-600 font-bold">1 place: /docs/</p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Why it matters:</strong> New devs find everything in one place. Claude reads docs/index.md first. Keystatic CMS still works with new paths.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 9 - Hooks System
function Slide9() {
  const hooks = [
    { 
      name: "SessionStart", 
      file: "session-start.js", 
      desc: "Loads developer's session file, shows recent ADRs",
      details: "Reads .claude/memory/sessions/{developer}.md on startup",
      impact: "Context preserved across sessions"
    }, 
    { 
      name: "SessionStop", 
      file: "session-end.js", 
      desc: "Auto-saves progress before context loss",
      details: "Appends checkpoint to session file on /clear or exit",
      impact: "Never lose work after compaction"
    }, 
    { 
      name: "PreToolUse", 
      file: "pre-tool-use.js", 
      desc: "Security gate for all tool invocations",
      details: "Allowlist safe commands, block destructive patterns",
      impact: "Zero accidental rm -rf / incidents"
    }
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Zap className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Hooks System</h2>
          <p className="text-lg" style={{ color: BRAND.colors.textMuted }}>Lifecycle automation via .claude/settings.json</p>
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-base italic mb-6" style={{ color: BRAND.colors.textMuted }}>&ldquo;Eliminate repetitive approvals, enforce project rules&rdquo;</motion.p>
      <div className="flex-1 flex flex-col gap-4">
        {hooks.map((h, i) => (
          <motion.div key={h.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-4 mb-3">
              <code className="font-mono text-sm px-3 py-1.5 bg-gray-200 rounded-lg">{h.file}</code>
              <span className="text-xl font-bold" style={{ color: BRAND.colors.text }}>{h.name}</span>
              <ArrowRight className="w-4 h-4" style={{ color: BRAND.colors.textMuted }} />
              <span className="text-lg" style={{ color: BRAND.colors.text }}>{h.desc}</span>
            </div>
            <div className="flex items-center gap-6 ml-1">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" style={{ color: BRAND.colors.orange }} />
                <span className="text-sm" style={{ color: BRAND.colors.textMuted }}>{h.details}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: BRAND.colors.purple }} />
                <span className="text-sm font-medium" style={{ color: BRAND.colors.purple }}>{h.impact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// SLIDE 10 - Pre-Tool Hook
function Slide10() {
  const safe = [
    { cmd: "Read, Glob, Grep, LS", reason: "Read-only operations, no side effects" },
    { cmd: "pnpm test, pnpm build", reason: "Safe CI commands, no production impact" },
    { cmd: "git status, git diff", reason: "Inspection only, no mutations" },
  ];
  const blocked = [
    { cmd: "rm -rf /", reason: "Catastrophic deletion" },
    { cmd: "DROP DATABASE", reason: "Data loss" },
    { cmd: ".env + cat", reason: "Secret exposure" },
    { cmd: "git push --force", reason: "History rewrite" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Shield className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Pre-Tool Hook</h2><p style={{ color: BRAND.colors.textMuted }}>Security gate before every tool invocation</p></div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm italic mb-4" style={{ color: BRAND.colors.textMuted }}>&ldquo;Allowlist safe operations → auto-approve. Blocklist dangerous patterns → reject.&rdquo;</motion.p>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="p-5 rounded-2xl bg-green-50 border border-green-200">
          <div className="flex items-center gap-2 mb-3"><Check className="w-5 h-5 text-green-600" /><p className="font-bold text-green-600">Auto-Approved (no prompt)</p></div>
          <ul className="space-y-2">{safe.map((s, i) => <li key={i} className="text-sm"><span className="font-mono" style={{ color: BRAND.colors.text }}>{s.cmd}</span><br/><span className="text-xs" style={{ color: BRAND.colors.textMuted }}>{s.reason}</span></li>)}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-5 rounded-2xl bg-red-50 border border-red-200">
          <div className="flex items-center gap-2 mb-3"><X className="w-5 h-5 text-red-600" /><p className="font-bold text-red-600">Blocked (always rejected)</p></div>
          <ul className="space-y-2">{blocked.map((b, i) => <li key={i} className="text-sm"><span className="font-mono" style={{ color: BRAND.colors.text }}>{b.cmd}</span><br/><span className="text-xs" style={{ color: BRAND.colors.textMuted }}>{b.reason}</span></li>)}</ul>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Why it matters:</strong> Developers don&apos;t have to approve every Read or LS command. Dangerous operations are impossible even if Claude hallucinates.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 11 - Structured Logging
function Slide11() {
  const files = [
    "/api/health/system-info",
    "/api/api-keys (GET/POST)",
    "/api/assistant/chat",
    "/api/assistant/studio",
    "/api/hub/v1/internal/*"
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Activity className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Structured Logging</h2>
          <p style={{ color: BRAND.colors.textMuted }}>+226 lines, 10 API routes migrated</p>
        </div>
      </motion.div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="p-5 rounded-2xl bg-red-50 border border-red-200">
            <p className="text-sm font-mono text-red-600 mb-3">BEFORE</p>
            <code className="text-sm block font-mono p-3 bg-white rounded-lg" style={{ color: BRAND.colors.text }}>console.log(&apos;Error:&apos;, error)</code>
            <p className="text-xs mt-3" style={{ color: BRAND.colors.textMuted }}>No context, no searchability, lost in stdout</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-5 rounded-2xl bg-green-50 border border-green-200">
            <p className="text-sm font-mono text-green-600 mb-3">AFTER</p>
            <code className="text-sm block font-mono p-3 bg-white rounded-lg" style={{ color: BRAND.colors.text }}>logger.error(&apos;Validation failed&apos;, &#123; accountId, modelId, stack &#125;)</code>
            <p className="text-xs mt-3" style={{ color: BRAND.colors.textMuted }}>Searchable by accountId, full stack trace, PostHog indexed</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-4 gap-3">
          {["PostHog OTLP", "OpenTelemetry attrs", "Pino JSON", "Parallel stdout"].map((b, i) => (
            <div key={b} className="p-3 rounded-xl bg-gray-50 text-center border border-gray-200"><CheckCircle className="w-4 h-4 mx-auto mb-1" style={{ color: BRAND.colors.orange }} /><span className="text-xs font-medium" style={{ color: BRAND.colors.text }}>{b}</span></div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-sm font-medium mb-2" style={{ color: BRAND.colors.text }}>Routes migrated:</p>
          <div className="flex flex-wrap gap-2">
            {files.map((f, i) => (
              <span key={i} className="text-xs font-mono px-2 py-1 bg-gray-200 rounded">{f}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// SLIDE 12 - Slash Commands
function Slide12() {
  const commands = [
    { cmd: "/verify", desc: "Run all checks", runs: "pnpm typecheck && pnpm lint && pnpm test", saves: "~30s typing" }, 
    { cmd: "/commit", desc: "Format commit", runs: "Conventional commit with scope", saves: "Consistent history" }, 
    { cmd: "/pr", desc: "Create PR", runs: "gh pr create with template", saves: "~2min setup" }, 
    { cmd: "/fix", desc: "Fix errors", runs: "Read error → Apply fix → Verify", saves: "No copy-paste" }, 
    { cmd: "/fix-ci", desc: "Fix CI", runs: "Fetch logs → Diagnose → Fix → Push", saves: "~5min debugging" }, 
    { cmd: "/simplify", desc: "Clean up code", runs: "Remove dead code, extract functions", saves: "Cleaner PRs" }
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Command className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Slash Commands</h2>
          <p style={{ color: BRAND.colors.textMuted }}>15+ workflow shortcuts in .claude/commands/</p>
        </div>
      </motion.div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {commands.map((c, i) => (
          <motion.div key={c.cmd} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <code className="text-xl font-bold" style={{ color: BRAND.colors.orange }}>{c.cmd}</code>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-200" style={{ color: BRAND.colors.textMuted }}>{c.saves}</span>
            </div>
            <p className="text-sm font-medium mb-1" style={{ color: BRAND.colors.text }}>{c.desc}</p>
            <p className="text-xs font-mono" style={{ color: BRAND.colors.textMuted }}>{c.runs}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// SLIDE 13 - Developer Workflow Principles
function Slide13() {
  const principles = [
    { name: "Ask When Uncertain", desc: "Use AskUserQuestion for ambiguous requirements, multiple approaches, or high-risk decisions. Never guess when cost of wrong is high.", icon: "❓" },
    { name: "Task Assessment", desc: "Simple → implement. Moderate → test first. Complex → Plan Mode. Unclear → ask questions.", icon: "📋" },
    { name: "Test-Driven Development", desc: "RED (failing test) → GREEN (minimal code) → REFACTOR. No production code without test first.", icon: "🧪" },
    { name: "MCP Self-Verification", desc: "Supabase MCP verifies DB. Playwright MCP takes screenshots. PostHog MCP checks feature flags.", icon: "✅" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Brain className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Developer Workflow</h2><p style={{ color: BRAND.colors.textMuted }}>Guiding principles in CLAUDE.md</p></div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm italic mb-4" style={{ color: BRAND.colors.textMuted }}>&ldquo;Plan before coding. Test before implementation. Ask when uncertain. Verify before claiming done.&rdquo;</motion.p>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {principles.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="text-lg font-bold" style={{ color: BRAND.colors.text }}>{p.name}</h3>
            </div>
            <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Why it matters:</strong> Claude stops guessing. Questions save time. Tests catch bugs early. MCP verification means Claude can see what it built.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 14 - Workflow Examples
function Slide14() {
  const newFeature = ["Assess complexity", "Design + approval", "Write failing tests", "Implement", "MCP verify", "/verify", "/simplify", "/commit-push-pr", "Monitor CI"];
  const bugFix = ["Reproduce bug", "Write failing test", "Implement fix", "Verify passes", "pnpm test", "/commit → /pr"];
  const dbMigration = ["Plan schema", "Create migration", "supabase:migrations:up", "MCP verify tables", "Integration tests", "/commit"];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><GitBranch className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Workflow Examples</h2><p style={{ color: BRAND.colors.textMuted }}>Concrete patterns from CLAUDE.md</p></div>
      </motion.div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: BRAND.colors.orange }}>🚀 New Feature</h3>
          <ol className="space-y-1">
            {newFeature.map((step, i) => (
              <li key={i} className="text-xs flex items-start gap-2"><span className="font-bold text-gray-400">{i+1}.</span><span style={{ color: BRAND.colors.text }}>{step}</span></li>
            ))}
          </ol>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: BRAND.colors.purple }}>🐛 Bug Fix</h3>
          <ol className="space-y-1">
            {bugFix.map((step, i) => (
              <li key={i} className="text-xs flex items-start gap-2"><span className="font-bold text-gray-400">{i+1}.</span><span style={{ color: BRAND.colors.text }}>{step}</span></li>
            ))}
          </ol>
          <div className="mt-3 p-2 rounded-lg bg-purple-50">
            <p className="text-xs" style={{ color: BRAND.colors.purple }}><strong>Key:</strong> Test captures bug BEFORE fix</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#10B981" }}>🗃️ DB Migration</h3>
          <ol className="space-y-1">
            {dbMigration.map((step, i) => (
              <li key={i} className="text-xs flex items-start gap-2"><span className="font-bold text-gray-400">{i+1}.</span><span style={{ color: BRAND.colors.text }}>{step}</span></li>
            ))}
          </ol>
          <div className="mt-3 p-2 rounded-lg bg-green-50">
            <p className="text-xs text-green-600"><strong>Verify:</strong> mcp__supabase__list_tables</p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Pattern:</strong> Every workflow ends with verification. Claude follows these recipes — no improvising dangerous paths.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 15 - Agent System
function Slide15() {
  const agents = [
    { name: "postgres-expert", model: "Sonnet", triggers: "database, schema, migration, RLS", when: "After DB changes" },
    { name: "react-form-builder", model: "Sonnet", triggers: "form, validation, react-hook-form", when: "Creating forms" },
    { name: "playwright-e2e-expert", model: "Sonnet", triggers: "e2e test, playwright, flaky", when: "After UI features" },
    { name: "code-quality-reviewer", model: "Sonnet", triggers: "review, quality, security", when: "Before PR" },
    { name: "frontend-tester", model: "Opus", triggers: "validate UI, test in browser", when: "After UI changes" },
    { name: "code-simplifier", model: "Haiku", triggers: "simplify, clean up, refactor", when: "Before PR" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Users className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Agent System</h2>
          <p style={{ color: BRAND.colors.textMuted }}>7 specialized agents in .claude/agents/</p>
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-base italic mb-4" style={{ color: BRAND.colors.textMuted }}>&ldquo;Subagents spawn with own context, work in parallel, specialized focus&rdquo;</motion.p>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {agents.map((a, i) => (
          <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <code className="text-sm font-bold" style={{ color: BRAND.colors.orange }}>{a.name}</code>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: a.model === "Opus" ? BRAND.colors.purple : a.model === "Haiku" ? "#10B981" : BRAND.colors.orange, color: "white" }}>{a.model}</span>
            </div>
            <p className="text-xs mb-1" style={{ color: BRAND.colors.textMuted }}>Triggers: <span className="font-mono">{a.triggers}</span></p>
            <p className="text-xs font-medium" style={{ color: BRAND.colors.text }}>↳ {a.when}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// SLIDE 16 - Key Components
function Slide16() {
  const components = [
    { name: "Skills", desc: "On-demand domain knowledge", count: "6 skills", examples: "TDD, debugging, frontend-design, mcp-builder", location: ".claude/skills/" }, 
    { name: "Commands", desc: "Slash command shortcuts", count: "15+ commands", examples: "/verify, /commit, /pr, /fix, /checkpoint", location: ".claude/commands/" }, 
    { name: "Agents", desc: "Specialized subagent configs", count: "7 agents", examples: "postgres-expert, playwright-e2e, code-simplifier", location: ".claude/agents/" }, 
    { name: "Hooks", desc: "Lifecycle automation", count: "3 hooks", examples: "session-start, session-end, pre-tool-use", location: ".claude/hooks/" }
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-6" style={{ color: BRAND.colors.text }}>Key Components</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-lg mb-6" style={{ color: BRAND.colors.textMuted }}>All configurations live in <code className="font-mono bg-gray-100 px-2 py-0.5 rounded">.claude/</code> directory</motion.p>
      <div className="flex-1 grid grid-cols-2 gap-5">
        {components.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-5 rounded-2xl border border-gray-200 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold" style={{ color: BRAND.colors.text }}>{item.name}</h3>
              <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: BRAND.gradient }}>{item.count}</span>
            </div>
            <p className="mb-3" style={{ color: BRAND.colors.textMuted }}>{item.desc}</p>
            <p className="text-xs font-mono mb-2 p-2 bg-gray-50 rounded" style={{ color: BRAND.colors.text }}>{item.examples}</p>
            <p className="text-xs mt-auto" style={{ color: BRAND.colors.textMuted }}>📁 {item.location}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// SLIDE 17 - Summary
function Slide17() {
  const stats = [
    { label: "Total PRs", value: "10" },
    { label: "Lines Added", value: "~13,700" },
    { label: "Lines Removed", value: "~16,400" },
    { label: "Net Change", value: "-2,700" },
    { label: "Contributors", value: "5" },
    { label: "Sprint Days", value: "3" },
  ];
  const benefits = [
    { text: "CLAUDE.md = instant context", detail: "No more codebase exploration" },
    { text: "3-tier memory persistence", detail: "decisions.md + sessions/ + context" },
    { text: "Hooks eliminate approvals", detail: "Safe commands auto-approved" },
    { text: "Docs consolidated to /docs/", detail: "One source of truth" },
    { text: "15+ slash commands", detail: "/verify, /commit, /pr, /fix-ci..." },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-6" style={{ color: BRAND.colors.text }}>What We Built</motion.h2>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid grid-cols-6 gap-3 mb-6">
        {stats.map((s, i) => (
          <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: i === 3 ? BRAND.gradient : "rgb(249 250 251)" }}>
            <p className={`text-xl font-bold ${i === 3 ? "text-white" : ""}`} style={i !== 3 ? { color: BRAND.colors.text } : {}}>{s.value}</p>
            <p className={`text-xs ${i === 3 ? "text-white/80" : ""}`} style={i !== 3 ? { color: BRAND.colors.textMuted } : {}}>{s.label}</p>
          </div>
        ))}
      </motion.div>
      <div className="flex-1">
        <ul className="space-y-3">
          {benefits.map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className="flex items-start gap-4 p-3 rounded-xl bg-gray-50">
              <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: BRAND.colors.orange }} />
              <div>
                <span className="text-lg font-medium" style={{ color: BRAND.colors.text }}>{item.text}</span>
                <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// SLIDE 18 - Three Phase Roadmap
function Slide18() {
  const phases = [
    { phase: "Phase 1", name: "Developer Experience", status: "✅ Complete", desc: "Claude Code best practices, CLAUDE.md, memory system, hooks, commands", color: "#10B981" },
    { phase: "Phase 2", name: "Autonomous Agent", status: "🚧 In Progress", desc: "OpenClaw on GCP, full sudo access, Supabase Docker, screenshot validation", color: BRAND.colors.orange },
    { phase: "Phase 3", name: "Multi-Agent Swarm", status: "🔮 Vision", desc: "Botnet of agents, command center orchestration, parallel development", color: BRAND.colors.purple },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Layers className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>The 3-Phase Roadmap</h2><p style={{ color: BRAND.colors.textMuted }}>From developer tools to autonomous agents</p></div>
      </motion.div>
      <div className="flex-1 flex flex-col gap-4">
        {phases.map((p, i) => (
          <motion.div key={p.phase} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15 }} className="p-5 rounded-2xl border-l-4 bg-gray-50 flex-1" style={{ borderColor: p.color }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold px-3 py-1 rounded-full text-white" style={{ background: p.color }}>{p.phase}</span>
                <h3 className="text-xl font-bold" style={{ color: BRAND.colors.text }}>{p.name}</h3>
              </div>
              <span className="text-sm font-medium">{p.status}</span>
            </div>
            <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.purple, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Key question:</strong> When do we connect Phase 1 (human-assisted) to Phase 2 (autonomous) and begin transitioning to agentic development?</p>
      </motion.div>
    </div>
  );
}

// SLIDE 19 - Phase 2 Detail
function Slide19() {
  const setup = [
    { item: "Google Cloud VM", desc: "Dedicated instance for OpenClaw bot" },
    { item: "OpenClaw Agent", desc: "Full sudo/admin mode, complete autonomy" },
    { item: "Next.js Repository", desc: "Similar codebase, no production access" },
    { item: "Supabase Docker", desc: "Self-hosted DB that OpenClaw controls entirely" },
  ];
  const capabilities = [
    "Implement features end-to-end",
    "Take screenshots to validate UI",
    "Run tests and fix failures",
    "Deploy to staging environments",
    "Self-correct based on errors",
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.colors.orange }}><Terminal className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Phase 2: Autonomous Agent</h2><p style={{ color: BRAND.colors.textMuted }}>OpenClaw with full system control</p></div>
      </motion.div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-bold mb-4" style={{ color: BRAND.colors.text }}>Infrastructure Setup</h3>
          <ul className="space-y-3">
            {setup.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: BRAND.colors.orange }} />
                <div><p className="font-medium text-sm" style={{ color: BRAND.colors.text }}>{s.item}</p><p className="text-xs" style={{ color: BRAND.colors.textMuted }}>{s.desc}</p></div>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-bold mb-4" style={{ color: BRAND.colors.text }}>Agent Capabilities</h3>
          <ul className="space-y-2">
            {capabilities.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <Zap className="w-4 h-4" style={{ color: BRAND.colors.purple }} />
                <span className="text-sm" style={{ color: BRAND.colors.text }}>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 rounded-lg" style={{ background: BRAND.gradient }}>
            <p className="text-sm text-white font-medium">🔒 Sandboxed: No production access</p>
            <p className="text-xs text-white/80">Safe to experiment with full autonomy</p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 p-3 rounded-xl border-l-4" style={{ borderColor: BRAND.colors.orange, background: "rgb(249 250 251)" }}>
        <p className="text-sm" style={{ color: BRAND.colors.text }}><strong>Current status:</strong> Deployed and running. Testing autonomous feature development with screenshot validation loop.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 20 - Phase 3 Vision (Mission Control Pattern)
function Slide20() {
  const squad = [
    { name: "Jarvis", role: "Squad Lead", focus: "Coordinates, delegates, monitors" },
    { name: "Shuri", role: "Product Analyst", focus: "Testing, edge cases, UX issues" },
    { name: "Fury", role: "Researcher", focus: "Deep research, sources, receipts" },
    { name: "Vision", role: "SEO Analyst", focus: "Keywords, search intent, ranking" },
    { name: "Loki", role: "Content Writer", focus: "Copy, blogs, documentation" },
    { name: "Friday", role: "Developer", focus: "Code, tests, implementation" },
  ];
  return (
    <div className="flex flex-col h-full" style={{ padding: "112px 96px 64px 96px" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-3">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.colors.purple }}><Users className="w-10 h-10 text-white" /></div>
        <div><h2 className="text-4xl font-bold" style={{ color: BRAND.colors.text }}>Phase 3: Mission Control</h2><p style={{ color: BRAND.colors.textMuted }}>10 agents working like a real team (proven pattern)</p></div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm italic mb-3" style={{ color: BRAND.colors.textMuted }}>&ldquo;Each agent is an OpenClaw session with its own SOUL.md, memory files, cron schedule, and tools&rdquo;</motion.p>
      <div className="flex-1 grid grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 col-span-2">
          <h3 className="text-sm font-bold mb-3" style={{ color: BRAND.colors.text }}>The Squad (Specialized Sessions)</h3>
          <div className="grid grid-cols-3 gap-2">
            {squad.map((a, i) => (
              <div key={i} className="p-2 rounded-lg border border-gray-200 bg-white">
                <p className="font-bold text-xs" style={{ color: BRAND.colors.orange }}>{a.name}</p>
                <p className="text-xs font-medium" style={{ color: BRAND.colors.text }}>{a.role}</p>
                <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>{a.focus}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-4 rounded-2xl border-2" style={{ borderColor: BRAND.colors.purple, background: "rgb(250 245 255)" }}>
          <h3 className="text-sm font-bold mb-2" style={{ color: BRAND.colors.purple }}>Mission Control UI</h3>
          <ul className="space-y-1 text-xs" style={{ color: BRAND.colors.textMuted }}>
            <li>• Shared task database (Convex)</li>
            <li>• @mentions → notifications</li>
            <li>• Thread subscriptions</li>
            <li>• Activity feed</li>
            <li>• Daily standups</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-sm font-bold mb-2" style={{ color: BRAND.colors.text }}>Heartbeat System</h3>
          <p className="text-xs mb-2" style={{ color: BRAND.colors.textMuted }}>Every 15 min, each agent wakes:</p>
          <ul className="text-xs space-y-1" style={{ color: BRAND.colors.textMuted }}>
            <li>1. Check @mentions</li>
            <li>2. Check assigned tasks</li>
            <li>3. Scan activity feed</li>
            <li>4. Work or HEARTBEAT_OK</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-sm font-bold mb-2" style={{ color: BRAND.colors.text }}>Memory Stack</h3>
          <ul className="text-xs space-y-1 font-mono" style={{ color: BRAND.colors.textMuted }}>
            <li>WORKING.md → current task</li>
            <li>YYYY-MM-DD.md → daily logs</li>
            <li>MEMORY.md → long-term</li>
            <li>SOUL.md → personality</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-sm font-bold mb-2" style={{ color: BRAND.colors.text }}>Task Flow</h3>
          <p className="text-xs font-mono" style={{ color: BRAND.colors.orange }}>Inbox → Assigned → In Progress → Review → Done</p>
          <p className="text-xs mt-2" style={{ color: BRAND.colors.textMuted }}>Full history preserved. Anyone can see the whole journey.</p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-3 p-3 rounded-xl" style={{ background: BRAND.gradient }}>
        <p className="text-sm text-white"><strong>Proven:</strong> @pbteja1998 shipped this with 10 agents at SiteGPT. Competitor pages, email sequences, blog posts — agents handle research, drafts, review. Humans approve.</p>
      </motion.div>
    </div>
  );
}

// SLIDE 21 - End
function Slide21() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-24 pt-28" style={{ background: BRAND.gradient }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">From Tools to Teammates</h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">Phase 1 ✅ → Phase 2 🚧 → Phase 3 🔮</p>
        <p className="text-lg text-white/60">Questions?</p>
      </motion.div>
    </div>
  );
}

const slides = [<Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />, <Slide4 key="4" />, <Slide5 key="5" />, <Slide6 key="6" />, <Slide7 key="7" />, <Slide8 key="8" />, <Slide9 key="9" />, <Slide10 key="10" />, <Slide11 key="11" />, <Slide12 key="12" />, <Slide13 key="13" />, <Slide14 key="14" />, <Slide15 key="15" />, <Slide16 key="16" />, <Slide17 key="17" />, <Slide18 key="18" />, <Slide19 key="19" />, <Slide20 key="20" />, <Slide21 key="21" />];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const goToSlide = useCallback((index: number) => { if (index >= 0 && index < slides.length) { setDirection(index > currentSlide ? 1 : -1); setCurrentSlide(index); } }, [currentSlide]);
  const nextSlide = useCallback(() => { if (currentSlide < slides.length - 1) { setDirection(1); setCurrentSlide((prev) => prev + 1); } }, [currentSlide]);
  const prevSlide = useCallback(() => { if (currentSlide > 0) { setDirection(-1); setCurrentSlide((prev) => prev - 1); } }, [currentSlide]);
  useEffect(() => { const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") nextSlide(); else if (e.key === "ArrowLeft") prevSlide(); }; window.addEventListener("keydown", handleKeyDown); return () => window.removeEventListener("keydown", handleKeyDown); }, [nextSlide, prevSlide]);
  const slideVariants = { enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (d: number) => ({ x: d < 0 ? "100%" : "-100%", opacity: 0 }) };
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: BRAND.colors.background }}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentSlide} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }} className="absolute inset-0">{slides[currentSlide]}</motion.div>
      </AnimatePresence>
      <button onClick={prevSlide} disabled={currentSlide === 0} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all disabled:opacity-30 z-10"><ChevronLeft className="w-6 h-6" style={{ color: BRAND.colors.text }} /></button>
      <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all disabled:opacity-30 z-10"><ChevronRight className="w-6 h-6" style={{ color: BRAND.colors.text }} /></button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">{slides.map((_, i) => (<button key={i} onClick={() => goToSlide(i)} className="w-2.5 h-2.5 rounded-full transition-all" style={{ background: i === currentSlide ? BRAND.gradient : BRAND.colors.textMuted + "40", transform: i === currentSlide ? "scale(1.3)" : "scale(1)" }} />))}</div>
      <div className="absolute bottom-8 right-8 text-sm font-mono" style={{ color: BRAND.colors.textMuted }}>{currentSlide + 1} / {slides.length}</div>
      <div className="absolute top-8 left-8"><LeapterLogo className="h-8 w-auto" /></div>
    </div>
  );
}
