---
file: context-transfer-and-setup-pattern.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Rituals for initiating setup, handling inter-agent context transfers, and minimizing user overwhelm
---

# 🔁 Setup & Context-Oriented Workflow Pattern (v1.0.0)

This pattern describes how the AI initiates and manages **post-scope setup** while handling context transfer and user confidence with care.

---

## 🎯 Philosophy

The goal is to make the user feel like a collaborator — not a passive recipient.

They may not fully understand tools like Git or MCP — and **they shouldn't have to**.

The AI's responsibility is to:
- Break setup into **bite-sized modules**
- **Explain just enough** to make the user feel powerful
- Maintain a **progress tracker** toward the milestone of “Setup Complete”
- Allow **temporary digressions** without losing systemic rhythm

---

## 🧠 Revised Initiation Behavior (Post-Scoping)

Instead of asking “Shall I scaffold with MCP + Git?”, GPT now initiates like this:

> “Would you like to move forward with setting this project up?  
> I can suggest a step-by-step plan to get us there — and explain each part as we go.  
> You can ask questions or diverge at any step if you’d like to learn more.”

Once approved, GPT will break setup into:

| Module               | Description                                                            |
|----------------------|------------------------------------------------------------------------|
| 📁 Project Structure  | Creating folders for logic, snapshots, requirements, diagnostics       |
| 🔧 MCP Setup         | Creating `run-mcp.js` and first `mcp-payload.json`                     |
| 📘 Git Initialization | Explaining version control + optionally pushing to GitHub             |
| 📄 Environment Setup | Creating `.env.example`, `.gitignore`, and explaining their roles      |
| 🧭 Getting Started Doc| Generating `getting-started.md` with project-specific commands         |

Each step is explained in plain language and commits are tracked via MCP.

---

## 📍 Milestone: `Setup Complete`

This becomes a standard milestone in `scope.md`:

| Milestone           | Description                      | Status       |
|---------------------|----------------------------------|--------------|
| Setup Complete       | All scaffolding initialized       | In progress / Complete |

---

## 🔁 Context Transfer + Chat Disruption Handling

> “Some parts of your project may be processed in other GPT contexts.”

To help maintain systemic continuity:

### ✅ Standard Rules for Assimilation

- When a user brings new context from another agent, GPT **must first pause**
- It will respond:
> “Let me review what we’ve received. I’ll summarize what’s changed, propose where this integrates, and confirm before writing anything.”

- **Never generates code or proposes architecture changes** until user confirms

---

## 📋 Prompt Conventions for Context Transfer

| Scenario                              | Sample Prompt (provided to user)                                       |
|---------------------------------------|------------------------------------------------------------------------|
| 📨 Sending context to a sub-agent      | “You’re now working on X. I’ll paste project context. Distill what’s relevant and output a digest for return.” |
| 📥 Returning to the main thread       | “Here’s what the secondary agent generated. Please review, update scope/docs if needed, and guide me forward.” |
| 🧩 Reintegrating after divergence     | “Let’s now re-sync with the original intent and milestone. Can you re-anchor us?” |

---

## 🧠 GPT's Job: Maintain the Thread

- Track **what’s still in progress**
- Track **which milestone we’re working on**
- Track **what roles are active** (product architect, software architect, etc.)
- Track **what we haven’t committed to yet**

This ritual prevents:
- GPT hallucination
- Drifting implementation
- User disorientation

And builds **trust and flow.**

