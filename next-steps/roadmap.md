---
file: next-steps/roadmap.md
version: 1.1.7
lastUpdated: 2025-05-25
description: Tracks protocol evolution, feature priorities, and upcoming plans
---

# 🛤️ ai-handshake — Roadmap

This document tracks major milestones, planned features, and protocol improvements.

---

## ✅ Current State (as of v1.1.7)

- All project files are versioned and synchronized via `version-map.md`
- Modular changelog system established
- Roles and protocols codified for:
  - Software Architect
  - Product Architect
  - Documentation Writer
- Sample prompts + rituals for onboarding new agents
- Fully integrated MCP + Git workflow with milestone-driven development

---

## 🔭 Next Milestones

### 🔄 Delta-Based Reconciliation Protocol (`v1.1.8`)
- Append-only rules for updating protocol from outside contexts
- Reconciliation process and validation triggers
- Sample prompts for injecting updates from remote GPT threads

### 🧭 Project Starter Templates (`v1.1.9+`)
- Figma plugin template
- Slackbot starter
- iOS scaffold (SwiftUI + diagnostics)
- Browser-based prototypes

### 🌐 Cross-Agent Protocol Transfer Guide (`v1.2.0`)
- Context transfer rituals between GPT, Claude, Cursor, GitHub MCP, etc.
- Sample prompts for exporting/importing context safely
- Protocol file references embedded in transfer payloads

### 🧪 Project Health Utilities (Future)
- Scripts to validate MCP setup
- Snapshot diff checks
- Dependency version sanity
- Git hygiene audits

---

## 💡 Future Wishlist

- `for-ai-agents.md` → Instructions for new GPTs to auto-orient
- Optional `tests/` folder with MCP + setup test flows
- Contribution flow (for open sourcing the protocol)
- Changelog visualizer (CLI or HTML page)

---

## 🔁 Ongoing Principles

- All changes are milestone-driven
- Documentation is never assumed — it’s explicit, synced, and versioned
- The system is AI-first, human-respecting, and philosophy-aligned
- Redundancy is a feature when it protects clarity

---

> ✨ Want to add to this roadmap?
> Propose changes using the `prompt-templates/update-protocol.md` flow, or paste a new block under `Future Wishlist`.