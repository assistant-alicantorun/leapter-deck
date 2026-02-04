"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Brain, FolderTree, Zap, Database, Terminal, Layers, CheckCircle, Clock, GitBranch, FileText, Users, ArrowRight } from "lucide-react";

// ============================================================================
// LEAPTER BRAND CONSTANTS
// ============================================================================

const BRAND = {
  colors: {
    orange: "#FA4B00",
    purple: "#B379FF",
    text: "#1E1E24",
    textMuted: "#6B7280",
    background: "#FFFFFF",
    backgroundAlt: "#FAFAFA",
  },
  gradient: "linear-gradient(135deg, #FA4B00 0%, #B379FF 100%)",
};

// ============================================================================
// LEAPTER LOGO COMPONENT
// ============================================================================

function LeapterLogo({ className = "" }: { className?: string }) {
  return (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 58" height="58" width="200" className={className}>
      <defs>
        <linearGradient id="logo-gradient" gradientUnits="userSpaceOnUse" x1="39.882" y1="57.301" x2="9.97" y2="8.481">
          <stop stopColor="#FA4B00" />
          <stop stopColor="#B379FF" offset="1" />
        </linearGradient>
      </defs>
      <g>
        <path fill="url(#logo-gradient)" d="M0 57.301V42.976h14.325V57.3z" />
        <path fill="url(#logo-gradient)" d="M28.65 28.65h14.326v14.326h-28.65V0H28.65z" />
        <path fill="url(#logo-gradient)" d="M42.976 28.65V14.326H57.3v14.326z" />
        <path fill="#1E1E24" d="M71.36 40V15.7h4.17v20.7h12.9V40z" />
        <path fill="#1E1E24" d="M98.733 40.36q-2.85 0-4.98-1.14a8.05 8.05 0 0 1-3.24-3.3q-1.14-2.13-1.14-4.98t1.11-4.92a7.95 7.95 0 0 1 3.21-3.24q2.07-1.14 4.89-1.14 2.7 0 4.65 1.08 1.95 1.05 3 3.03 1.08 1.95 1.08 4.65v1.5h-14.04q.24 2.46 1.65 3.81 1.41 1.32 3.78 1.32 1.74 0 2.85-.66t1.53-1.98h4.14q-.66 2.82-2.91 4.41-2.22 1.56-5.58 1.56m-5.34-11.31h10.02q-.24-1.98-1.5-3.03-1.26-1.08-3.33-1.08t-3.42 1.08q-1.35 1.05-1.77 3.03" />
        <path fill="#1E1E24" d="M115.944 40.33q-3.09 0-4.89-1.53-1.77-1.53-1.77-4.02 0-2.61 1.8-4.05t5.16-1.44h5.7v-.75q0-3.6-4.08-3.6-3.45 0-4.14 2.49h-4.08q.51-2.79 2.64-4.29 2.16-1.5 5.61-1.5 3.87 0 5.91 1.8 2.04 1.77 2.04 5.16v7.29h1.95V40h-4.23v-2.85h-1.26q-.93 1.5-2.52 2.34t-3.84.84m.6-3.18q1.53 0 2.76-.6t1.92-1.59q.72-1.02.72-2.25v-.57h-5.49q-3.3 0-3.3 2.46 0 1.2.9 1.89.9.66 2.49.66" />
        <path fill="#1E1E24" d="M131.233 47.2V26.11h-2.07V22h4.26v2.85h1.26q.9-1.56 2.49-2.37 1.59-.84 3.81-.84 2.73 0 4.62 1.17 1.92 1.14 2.91 3.24 1.02 2.1 1.02 4.95t-.99 4.98q-.96 2.1-2.82 3.24-1.83 1.14-4.41 1.14-2.04 0-3.57-.78-1.5-.81-2.31-2.28h-.12v9.9zm9.03-10.35q2.52 0 3.84-1.56 1.35-1.56 1.35-4.29t-1.35-4.29q-1.32-1.56-3.84-1.56-2.25 0-3.6 1.29t-1.35 3.48v2.16q0 2.19 1.35 3.48t3.6 1.29" />
        <path fill="#1E1E24" d="M157.675 40q-1.65 0-2.58-.84-.9-.84-.9-2.55V25.18h-3.24V22h3.27v-5.4h4.02V22h4.47v3.18h-4.44v11.61h4.89V40z" />
        <path fill="#1E1E24" d="M174.109 40.36q-2.85 0-4.98-1.14a8.05 8.05 0 0 1-3.24-3.3q-1.14-2.13-1.14-4.98t1.11-4.92a7.95 7.95 0 0 1 3.21-3.24q2.07-1.14 4.89-1.14 2.7 0 4.65 1.08 1.95 1.05 3 3.03 1.08 1.95 1.08 4.65v1.5h-14.04q.24 2.46 1.65 3.81 1.41 1.32 3.78 1.32 1.74 0 2.85-.66t1.53-1.98h4.14q-.66 2.82-2.91 4.41-2.22 1.56-5.58 1.56m-5.34-11.31h10.02q-.24-1.98-1.5-3.03-1.26-1.08-3.33-1.08t-3.42 1.08q-1.35 1.05-1.77 3.03" />
        <path fill="#1E1E24" d="M187.09 40V26.11h-2.07V22h4.26v3.45h1.26q.72-1.77 2.28-2.7 1.59-.93 3.63-.93h1.5v3.51h-1.68q-2.55 0-3.87 1.47-1.29 1.47-1.29 3.93V40z" />
      </g>
    </svg>
  );
}

// ============================================================================
// SLIDE 1 - Title
// ============================================================================
function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <LeapterLogo className="mb-8" />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: BRAND.colors.text }}>
        Claude Code Best Practices
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl max-w-3xl" style={{ color: BRAND.colors.textMuted }}>
        Implementation Summary
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="mt-12 flex items-center gap-3 text-sm" style={{ color: BRAND.colors.textMuted }}>
        <Clock className="w-4 h-4" />
        <span>3-Day Implementation Sprint</span>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SLIDE 2 - The Goal
// ============================================================================
function Slide2() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-16">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: BRAND.colors.text }}>The Goal</h2>
        <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: BRAND.colors.textMuted }}>
          Make the codebase{" "}
          <span className="font-bold" style={{ background: BRAND.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            maximally productive
          </span>{" "}
          for AI-assisted development
        </p>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SLIDE 3 - Architecture
// ============================================================================
function Slide3() {
  const folders = [
    { name: "CLAUDE.md", desc: "Main entry point", icon: Brain, highlight: true },
    { name: "docs/", desc: "All documentation", icon: FolderTree },
    { name: ".claude/", desc: "Settings, memory, skills", icon: Layers },
    { name: "apps/", desc: "Application code", icon: Terminal },
  ];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12" style={{ color: BRAND.colors.text }}>
        Architecture at a Glance
      </motion.h2>
      <div className="flex-1 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {folders.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
              className={`p-6 rounded-2xl border-2 flex items-start gap-4 ${item.highlight ? "border-transparent" : "border-gray-200"}`}
              style={item.highlight ? { background: BRAND.gradient } : {}}>
              <div className={`p-3 rounded-xl ${item.highlight ? "bg-white/20" : "bg-gray-100"}`}>
                <Icon className={`w-6 h-6 ${item.highlight ? "text-white" : ""}`} style={!item.highlight ? { color: BRAND.colors.orange } : {}} />
              </div>
              <div>
                <h3 className={`text-xl font-bold font-mono ${item.highlight ? "text-white" : ""}`} style={!item.highlight ? { color: BRAND.colors.text } : {}}>{item.name}</h3>
                <p className={`text-sm ${item.highlight ? "text-white/80" : ""}`} style={!item.highlight ? { color: BRAND.colors.textMuted } : {}}>{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 4 - CLAUDE.md The Brain
// ============================================================================
function Slide4() {
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-8">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Brain className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.colors.text }}>CLAUDE.md</h2>
          <p style={{ color: BRAND.colors.textMuted }}>The Brain</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex-1 flex items-center">
        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 max-w-3xl">
          <p className="text-xl italic mb-6" style={{ color: BRAND.colors.textMuted }}>
            &ldquo;Write it like you&apos;re onboarding a new developer who will start coding in 5 minutes.&rdquo;
          </p>
          <p className="text-lg" style={{ color: BRAND.colors.text }}>Not documentation. <strong>Instructions.</strong></p>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SLIDE 5 - What's Inside CLAUDE.md
// ============================================================================
function Slide5() {
  const sections = ["Developer Workflow", "Task Assessment Matrix", "MCP Verification", "Agent Usage Guide", "Tech Stack Versions", "Commands Reference"];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>
        What&apos;s Inside CLAUDE.md
      </motion.h2>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {sections.map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
            <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: BRAND.colors.orange }} />
            <span className="text-lg font-medium" style={{ color: BRAND.colors.text }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 6 - The Impact (50%)
// ============================================================================
function Slide6() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-16">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-12" style={{ color: BRAND.colors.text }}>
        The Impact
      </motion.h2>
      <div className="grid grid-cols-2 gap-12 mb-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-center">
          <p className="text-lg mb-2" style={{ color: BRAND.colors.textMuted }}>Before</p>
          <p className="text-xl" style={{ color: BRAND.colors.text }}>Claude explores codebase</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-center">
          <p className="text-lg mb-2" style={{ color: BRAND.colors.textMuted }}>After</p>
          <p className="text-xl" style={{ color: BRAND.colors.text }}>Claude <strong>immediately knows</strong></p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
        className="p-8 rounded-2xl text-center" style={{ background: BRAND.gradient }}>
        <p className="text-6xl font-bold text-white mb-2">50%</p>
        <p className="text-white/80">reduction in exploration time</p>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SLIDE 7 - Memory System Intro
// ============================================================================
function Slide7() {
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-8">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><Database className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.colors.text }}>Memory System</h2>
          <p style={{ color: BRAND.colors.textMuted }}>Session Persistence</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="flex-1 flex items-center justify-center">
        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 max-w-3xl text-center">
          <p className="text-2xl font-medium" style={{ color: BRAND.colors.text }}>
            Short-term + Long-term
          </p>
          <p className="text-lg mt-4" style={{ color: BRAND.colors.textMuted }}>
            Context management → Checkpointing → CLAUDE.md updates → Skills refinement
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SLIDE 8 - Three Tiers Visual
// ============================================================================
function Slide8() {
  const tiers = [
    { tier: "Tier 1", name: "Shared Knowledge", items: ["decisions.md", "context.md", "conventions.md"], note: "Git Committed", color: BRAND.colors.orange },
    { tier: "Tier 2", name: "Developer Sessions", items: ["sessions/2026-02-04.md", "Personal progress"], note: "Git Ignored", color: BRAND.colors.purple },
    { tier: "Tier 3", name: "Ephemeral", items: ["Current conversation", "Active task"], note: "Context Window", color: "#4F46E5" },
  ];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>
        Three-Tier Memory
      </motion.h2>
      <div className="flex-1 flex flex-col gap-4">
        {tiers.map((item, i) => (
          <motion.div key={item.tier} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
            className="p-5 rounded-2xl border-l-4 bg-gray-50 flex items-center justify-between" style={{ borderColor: item.color }}>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full text-white" style={{ background: item.color }}>{item.tier}</span>
              <div>
                <h3 className="text-lg font-bold" style={{ color: BRAND.colors.text }}>{item.name}</h3>
                <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{item.items.join(" • ")}</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-gray-200" style={{ color: BRAND.colors.textMuted }}>{item.note}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 9 - Session Commands
// ============================================================================
function Slide9() {
  const commands = [
    { cmd: "/checkpoint", desc: "Save progress to sessions/", when: "After features, before /clear" },
    { cmd: "/decision", desc: "Log ADR to decisions.md", when: "After architectural choice" },
    { cmd: "/handoff", desc: "Generate handoff doc", when: "Passing to teammate" },
  ];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>
        Session Commands
      </motion.h2>
      <div className="flex-1 flex flex-col gap-4">
        {commands.map((item, i) => (
          <motion.div key={item.cmd} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-4 mb-2">
              <code className="text-xl font-bold px-3 py-1 rounded" style={{ background: BRAND.gradient, color: "white" }}>{item.cmd}</code>
              <span className="text-lg" style={{ color: BRAND.colors.text }}>{item.desc}</span>
            </div>
            <p className="text-sm ml-1" style={{ color: BRAND.colors.textMuted }}>↳ {item.when}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 10 - Auto-Checkpoint Triggers
// ============================================================================
function Slide10() {
  const triggers = ["After any git commit", "After completing a feature", "Before /clear or /compact", "On session end"];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-4" style={{ color: BRAND.colors.text }}>
        Auto-Checkpoint
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-lg mb-8" style={{ color: BRAND.colors.textMuted }}>
        Progress saved automatically when:
      </motion.p>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {triggers.map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 rounded-2xl border-2 border-gray-200 flex items-center gap-4">
            <GitBranch className="w-6 h-6" style={{ color: BRAND.colors.orange }} />
            <span className="text-lg" style={{ color: BRAND.colors.text }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 11 - Why Git-Ignored
// ============================================================================
function Slide11() {
  const reasons = ["Personal task progress", "Debugging notes", "Local environment issues", "Incomplete work"];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-4" style={{ color: BRAND.colors.text }}>
        Why Sessions Are Git-Ignored
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-lg italic mb-8" style={{ color: BRAND.colors.textMuted }}>
        &ldquo;Each developer has their own working context&rdquo;
      </motion.p>
      <div className="flex-1">
        <p className="text-lg mb-4" style={{ color: BRAND.colors.text }}>Session files contain:</p>
        <ul className="space-y-3">
          {reasons.map((item, i) => (
            <motion.li key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 text-lg" style={{ color: BRAND.colors.textMuted }}>
              <span className="w-2 h-2 rounded-full" style={{ background: BRAND.gradient }} />
              {item}
            </motion.li>
          ))}
        </ul>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-8 text-lg font-medium" style={{ color: BRAND.colors.text }}>
          → Won&apos;t pollute shared repo or conflict during merges
        </motion.p>
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 12 - Docs Before/After
// ============================================================================
function Slide12() {
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-8">
        <div className="p-4 rounded-2xl" style={{ background: BRAND.gradient }}><FileText className="w-10 h-10 text-white" /></div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.colors.text }}>Documentation</h2>
          <p style={{ color: BRAND.colors.textMuted }}>Consolidation</p>
        </div>
      </motion.div>
      <div className="flex-1 grid grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-red-50 border border-red-200">
          <p className="text-sm font-mono text-red-600 mb-4">BEFORE</p>
          <ul className="space-y-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
            <li>• /documentation/ folder</li>
            <li>• /developer-docs/ folder</li>
            <li>• MCP_ONBOARDING.md at root</li>
            <li>• Random README files</li>
          </ul>
          <p className="mt-4 text-red-600 font-medium">Scattered everywhere</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-green-50 border border-green-200">
          <p className="text-sm font-mono text-green-600 mb-4">AFTER</p>
          <ul className="space-y-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
            <li>• docs/index.md → Navigation Hub</li>
            <li>• docs/DEVELOPER_HANDBOOK.md</li>
            <li>• docs/architecture/</li>
            <li>• docs/development/</li>
          </ul>
          <p className="mt-4 text-green-600 font-medium">Single source of truth</p>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 13 - Docs Structure
// ============================================================================
function Slide13() {
  const structure = [
    { name: "index.md", desc: "Navigation hub" },
    { name: "DEVELOPER_HANDBOOK.md", desc: "New dev? Start here" },
    { name: "architecture/", desc: "System design" },
    { name: "development/", desc: "Local setup, testing" },
    { name: "sop/", desc: "Standard procedures" },
  ];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>
        docs/ Structure
      </motion.h2>
      <div className="flex-1 flex flex-col gap-3">
        {structure.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
            <code className="font-mono text-sm px-2 py-1 bg-gray-200 rounded" style={{ color: BRAND.colors.text }}>{item.name}</code>
            <ArrowRight className="w-4 h-4" style={{ color: BRAND.colors.textMuted }} />
            <span style={{ color: BRAND.colors.textMuted }}>{item.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 14 - Key Components
// ============================================================================
function Slide14() {
  const components = [
    { name: "Skills", desc: "Domain knowledge loaded on-demand" },
    { name: "Commands", desc: "/commit, /pr, /verify, /fix-ci" },
    { name: "Agents", desc: "Specialized configurations" },
    { name: "Hooks", desc: "Automation scripts" },
  ];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>
        Key Components
      </motion.h2>
      <div className="flex-1 grid grid-cols-2 gap-6">
        {components.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
            <h3 className="text-2xl font-bold mb-2" style={{ color: BRAND.colors.text }}>{item.name}</h3>
            <p style={{ color: BRAND.colors.textMuted }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 15 - Summary Benefits
// ============================================================================
function Slide15() {
  const benefits = [
    "Claude reads CLAUDE.md first — instant context",
    "Memory persists across sessions",
    "Skills loaded on-demand — no bloat",
    "Docs consolidated — single source of truth",
    "Slash commands for common tasks",
  ];
  return (
    <div className="flex flex-col h-full px-16 py-12">
      <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold mb-8" style={{ color: BRAND.colors.text }}>
        What This Means
      </motion.h2>
      <div className="flex-1 flex items-center">
        <ul className="space-y-5">
          {benefits.map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4 text-xl">
              <Zap className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: BRAND.colors.orange }} />
              <span style={{ color: BRAND.colors.text }}>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ============================================================================
// SLIDE 16 - End
// ============================================================================
function Slide16() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16" style={{ background: BRAND.gradient }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">Ready for AI-First Development</h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl">Questions?</p>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SLIDES ARRAY
// ============================================================================
const slides = [
  <Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />, <Slide4 key="4" />,
  <Slide5 key="5" />, <Slide6 key="6" />, <Slide7 key="7" />, <Slide8 key="8" />,
  <Slide9 key="9" />, <Slide10 key="10" />, <Slide11 key="11" />, <Slide12 key="12" />,
  <Slide13 key="13" />, <Slide14 key="14" />, <Slide15 key="15" />, <Slide16 key="16" />,
];

// ============================================================================
// MAIN PRESENTATION
// ============================================================================
export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) { setDirection(1); setCurrentSlide((prev) => prev + 1); }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) { setDirection(-1); setCurrentSlide((prev) => prev - 1); }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: BRAND.colors.background }}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentSlide} custom={direction} variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute inset-0">{slides[currentSlide]}</motion.div>
      </AnimatePresence>
      <button onClick={prevSlide} disabled={currentSlide === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
        <ChevronLeft className="w-6 h-6" style={{ color: BRAND.colors.text }} />
      </button>
      <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
        <ChevronRight className="w-6 h-6" style={{ color: BRAND.colors.text }} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goToSlide(i)} className="w-2 h-2 rounded-full transition-all"
            style={{ background: i === currentSlide ? BRAND.gradient : BRAND.colors.textMuted + "40", transform: i === currentSlide ? "scale(1.3)" : "scale(1)" }} />
        ))}
      </div>
      <div className="absolute bottom-6 right-6 text-sm font-mono" style={{ color: BRAND.colors.textMuted }}>
        {currentSlide + 1} / {slides.length}
      </div>
      <div className="absolute top-6 left-6"><LeapterLogo className="h-8 w-auto" /></div>
    </div>
  );
}
