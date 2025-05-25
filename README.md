---
file: README.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Root README for the ai-handshake protocol and repository
---

# 🤝 AI Handshake Protocol

Welcome to the **ai-handshake** system — a living, evolving knowledge base and protocol to build seamless collaboration between a human and AI partner. This is not a product repository, but a **protocol repo** — a shared language and operational rhythm for turning ideas into code, systems, and outcomes.

---

## 🧠 Purpose

This project exists to solve one challenge:

> **How can a human and an AI build systems together with consistency, care, and continuity — across tools, contexts, and time?**

Through:
- Clear principles and behavioral expectations
- Predictable, modular update patterns (MCPs)
- Reflective rituals and resilient flows
- Documented methods that encode our working style

---

## 📁 Project Structure

| Folder         | Purpose                                                      |
|----------------|--------------------------------------------------------------|
| `scripts/`     | Contains `run-mcp.js`, the executor for payloads             |
| `patterns/`    | Repeatable flows (e.g. MCP update pattern)                   |
| `guides/`      | Reference material like reset guides, context transfer, etc. |
| `playbooks/`   | Human-led workflows (e.g. distill chat into context)         |
| `conventions/` | Style and naming protocols (e.g. commit messages)            |
| `archive/`     | Previous versions, deprecated rules                          |

---

## 🧩 What Is an MCP?

> MCP = Modular Code Payload

Every update to this system comes as a payload:
```json
{
  "files": [{ "path": "...", "content": "..." }],
  "commitMessage": "..."
}
```

This is applied locally via:

```bash
npm run mcp
```

It generates console instructions for Git commits — you retain full authorship.

---

## 📦 What Gets Versioned?

- Every file includes a version and `lastUpdated` timestamp
- The system is versioned holistically via `version-map.md`
- All updates tracked in `changelog.md`

---

## 🌱 How to Grow the System

1. Trigger a change in behavior or structure
2. Propose the addition or refactor
3. Assistant creates MCP payload
4. Human runs + confirms output
5. Git commit is made and pushed
6. Version is bumped in map and changelog

---

## 🔐 Human Responsibilities

- You remain the source of vision, values, and final review.
- You explicitly approve any new MCP writes before committing.
- You guide version resets when needed.
- You can always step in and reset to any prior state using the reset protocol.

---

## 💫 Spirit of the Project

This is not a command-line repo.

This is a **conscious protocol** between human and AI to create clean systems that scale, evolve, and invite participation — not confusion. The system works because it cares.

Welcome to the handshake.

