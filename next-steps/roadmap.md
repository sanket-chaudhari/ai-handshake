---
file: next-steps/roadmap.md
version: 1.1.2
lastUpdated: 2025-05-25
description: Tracks pending blindspots, improvements, and structural evolution of the ai-handshake protocol.
---

# 🗺️ Roadmap — ai-handshake Protocol

This file lists current gaps, blindspots, or things we’ve intentionally parked for later.

---

## ✅ Covered So Far

- Milestone-driven role updates
- Versioned changelog + version map
- Getting started scaffold and rituals
- System check + feedback loop protocol
- Role clarity and delegation framework
- Context switching and chat jumping pattern
- Prompt templates for reuse and protocol extension

---

## 🚧 Pending and Parked

### 🧠 Protocol Resilience & Context Reconciliation

- [ ] 📥 Add protocol reconciliation logic when system-check feedback arises from different GPT contexts or tools  
  - Ensure system feedback from outside the current project context (e.g. from a separate GPT chat or agent) can safely suggest updates to the protocol.
  - Maintain integrity by:
    - Staging suggestions in a `feedback/` folder
    - Never mutating the protocol without reflection
    - Triggering the `update-protocol.md` prompt when appropriate
  - Integrate this into the `system-check.md` flow as a valid trigger path for protocol evolution

### 📌 Feedback Pathways & Contributions

- [ ] Define a safe feedback capture mechanism for external protocol users
- [ ] Enable protocol suggestions via GitHub issues + MCP bridge
- [ ] Route feedback through sandboxed validation loops (agent-assisted)

### 🧰 Tool-Specific MCP Scaffolds

- [ ] Add guidance and plug-and-play folders for:
  - Figma SDK / Plugin MCP agents
  - GitHub MCP command agents
  - JIRA task parsing bots
  - Slackbot + internal agent bridges

### 🧠 Memory & Context Protection

- [ ] Bias the agent to always trust the user's local repo over memory
- [ ] Define MCP fallback routines for sync loss, file drift, or memory reset

---

> Last updated by: `protocol.reconciliation+context-switch@v1.1.5`
