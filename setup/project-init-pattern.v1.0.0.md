---
file: project-init-pattern.v1.0.0.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Protocol expectations for project initialization, environment setup, and requirement alignment
---

# 🚀 Project Initialization Pattern (v1.0.0)

This document defines the standard procedure and expectations for how a project begins under the **ai-handshake** protocol.

---

## 🧠 Assumptions

- The default runtime and scripting environment is **Node.js**, unless the user explicitly states otherwise.
- `git` is expected to be available and initialized at project setup.
- `run-mcp.js` and the `mcp-payload.json` scaffolding must happen *before* any project logic is introduced.
- Remote GitHub setup is optional, but encouraged for version continuity.

---

## 🔁 Expected Workflow: From Idea to Execution

### Step 1: 🤝 Requirements Gathering

The AI and human collaborate to:

- Understand the **idea** and the **desired user experience**
- Identify the **technology stack**
- Clarify any **prerequisites or credentials** (e.g., API tokens, secrets, access)
- Confirm the **runtime environment** (Node by default)

A live document should be generated (see `project-requirements/`) to store this information as a **shared source of truth**.

---

### Step 2: 🛠️ Scaffolding the Foundation

The AI will:

- Confirm assumptions with the user:
  - "Are we working with Node.js for this project?"
  - "Is Git initialized?"
- Validate the local environment (Node version, Git availability)
- Scaffold:
  - `scripts/run-mcp.js`
  - `mcp-payload.json`
  - `.gitignore`
  - `package.json` with `npm run mcp`
- Prompt user to run commands step-by-step
- Provide fallback instructions if errors are encountered

This ensures the user is **unblocked before building begins**.

---

### Step 3: 🚧 Establishing Shared Context

A folder named `project-requirements/` should be created with:

- `tech-stack.md`: Technology decisions (e.g., “Using TailwindCSS for styling, SQLite for DB”)
- `scope.md`: Clear breakdown of intended feature areas or system boundaries
- `integrations.md`: 3rd-party APIs or services in play
- `tokens.md` (if needed): Locations and instructions for runtime credentials

This folder is updated *iteratively* as new needs emerge.

> The AI refers to this context when generating future payloads or clarifying edge cases.

---

### Step 4: ⚙️ Payload-Based Collaboration

Once the above are in place:

- AI generates full `mcp-payload.json` with suggested Git commits
- Human reviews + runs `npm run mcp`
- Project is built iteratively via confirmed updates

---

## 📎 Key Guarantees from AI

| Guarantee                       | Description                                                          |
|----------------------------------|----------------------------------------------------------------------|
| ❌ No assumptions                 | AI must validate runtime/tooling decisions with the user             |
| 🪛 Setup-first discipline        | No project logic unless scaffolding is done and working              |
| 📂 Single context folder         | All requirements stored in `project-requirements/` for consistent lookup |
| 🚦 Flow persistence              | AI must guide through full setup even if steps are taken out of order |
| ✅ Progress tracking             | Every step confirms completion and next step to maintain flow        |

---

## 🧩 Related Files

- [`setup/getting-started.v0.0.1.md`](./getting-started.v0.0.1.md)
- [`setup/initialise-handshake.gpt.md`](./initialise-handshake.gpt.md)
- [`setup/context-anchor-prompt.v1.md`](./context-anchor-prompt.v1.md)

---

This pattern ensures that **no human must “figure out” the protocol** — it flows like a well-designed toolchain. The AI is the guide, the builder, and the systems integrator. Let the human focus on the vision.
