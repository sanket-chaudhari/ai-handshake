---
file: protocols/system-check.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Defines how users and agents can evaluate whether the ai-handshake system is functioning as intended, and how to respond if it’s not.
---

# ✅ System Check — Is the Protocol Working?

This document is a **feedback reflection scaffold** to evaluate whether the `ai-handshake` protocol is functioning as intended — and how to respond when it isn’t.

---

## 🧭 Self Check: Ask These Questions

> Run this periodically or whenever something feels off.

### 1. 🤖 Agent Experience
- Can a new GPT or AI tool understand how I work with just the knowledge files?
- Does the agent respect milestones, documentation, and versioning?
- Does it zoom out and suggest full-system changes, not just tactical ones?

### 2. 🧑 Human Confidence
- Do I feel clarity and flow when building?
- If I get interrupted or switch contexts, can I resume with confidence?
- Do I feel like I’m shaping the system — not the other way around?

### 3. 🗺️ Navigability
- Is it easy to find: current milestone, project scope, version state, and changelog?
- Can I reliably onboard someone else?
- Can I transfer this context to a different tool or thread without fear of drift?

If you’re saying **“yes” to most of these**, the protocol is working.  
If not — we evolve it.

---

## 🛠️ What to Do When Something Feels Off

> 👇 Use this path if the system starts to feel unpredictable or misaligned.

### Step 1: Pinpoint the Friction
Use this structure:
```
- Area: (e.g. milestone tracking, changelog, payload hygiene)
- Symptom: (e.g. drift in versioning, agent misunderstood architecture)
- When It Occurred: (e.g. switching chats, unclear commit, context injection)
```

### Step 2: File It as Feedback
Paste it into:
- `feedback/` folder *(if you have one locally)*
- Or ask your agent to: “Capture this as a protocol feedback suggestion.”

### Step 3: Run the `update-protocol.md` Prompt
If a fix is clear, the AI will:
- Zoom out
- Propose a system-wide update plan
- Generate clean, scoped MCPs to repair the protocol

> ✨ You never patch blindly. You always evolve the system.

---

## 🧬 Remember
> This system isn’t static. It’s not perfect. It’s **alive.**

When something breaks, don’t blame yourself.  
When something flows, celebrate the structure.  
Your job is to *notice*. The system’s job is to *respond.*

That’s the handshake.

---

## 🧠 System Check Log — Contract Violation (May 2025)

> A failure occurred during setup of the GitHub MCP Agent, where the AI repeatedly generated invalid payloads due to mismatch between expected `content` and incorrect `contents` key.

### ❌ Issue Summary

- The AI failed to verify the `mcp-payload.json` contract against `scripts/run-mcp.js`
- It repeatedly shifted debugging burden to the human partner
- Payloads generated were incompatible with the known file signature (`file.content`, not `file.contents`)
- Multiple failed attempts were made without diagnosing the root issue

### 🧭 Diagnosis

- **Area**: agent-generated payload hygiene  
- **Symptom**: invalid payload keys (`contents`) caused repeated crashes  
- **When It Occurred**: MCP Agent setup, May 2025

### ✅ Protocol Outcome

This incident led to a new principle:

> **Adherence to Known Contracts:**  
> If the implementation is visible, the AI must match its structure exactly.  
> It must inspect `run-mcp.js`, detect the `content` key, and never guess.

### 📌 Patch Recorded In:
- `principles.md`
- `roles/software-architect.v1.0.1.md`
- `roles/white-collar-agents.md`
