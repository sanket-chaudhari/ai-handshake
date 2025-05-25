---
file: mcp-update-flow.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Protocol for evolving the ai-handshake system using modular code payloads (MCP).
---

# 🔄 MCP Update Flow

This pattern documents how we incrementally evolve the ai-handshake system using versioned MCP payloads.

---

## 🧩 MCP = Modular Code Payload

MCP is the atomic update unit for this system.

Every MCP includes:
- A list of `files` (with paths + content)
- A `commitMessage`

---

## 🧭 Triggering an MCP Update

### Human Triggers
- "We need to document this behavior"
- "That structure needs a guide"
- "Let's refactor our expectations"

### AI Triggers
- Drift detected between behavior and documentation
- Repeated back-and-forth on a missing ritual
- A module is updated but the changelog isn’t

---

## ⚙️ Update Ritual

1. Assistant prepares MCP (in chat or downloadable)
2. Human runs it locally via `npm run mcp`
3. Suggested Git command is printed
4. Human commits + optionally pushes
5. Version-map and changelog are bumped (if needed)

---

## 🚦 Decision Points

| Question                        | Answer                       |
|---------------------------------|-------------------------------|
| Does this need a version bump? | If any behavior has changed  |
| Should we archive old version? | If replaced, yes             |
| Who decides merge?             | Human always                 |

