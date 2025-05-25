---
file: next-steps/roadmap.md
version: 1.1.1
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

---

> Last updated by system check + feedback consolidation flow.