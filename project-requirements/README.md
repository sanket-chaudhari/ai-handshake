---
file: project-requirements/README.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Central hub for all product and technical requirements
---

# 📘 Project Requirements Hub

This folder serves as the **single source of truth** for the evolving product and technical requirements of the current project.

All contents here are maintained collaboratively by:
- 🤖 GPT (reads + proposes edits)
- 🧑 You (reviews + confirms or adjusts content)

---

## 📁 Included Documents

| File             | Purpose                                              |
|------------------|------------------------------------------------------|
| `tech-stack.md`  | Technologies selected for this project               |
| `scope.md`       | Features, boundaries, and architectural breakdowns   |
| `integrations.md`| External services, APIs, SDKs, and auth tokens       |
| `tokens.md`      | Where and how runtime credentials are managed        |

---

## 🧠 Usage Rules

- All **assumptions discussed during project setup** should be written here
- Any time a new tool, service, or goal is introduced, this folder should be updated
- GPT will always read from this folder when generating payloads, scaffolds, or troubleshooting

---

## 📦 Examples of How to Use

- Add a new 3rd-party API → update `integrations.md`
- Switch from SQLite to MongoDB → update `tech-stack.md`
- Clarify scope of feature → update `scope.md`

This folder is the **heartbeat of shared understanding** in every project.
