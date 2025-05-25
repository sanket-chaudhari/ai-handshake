---
file: commit-messages.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Conventions for writing commit messages in the ai-handshake system.
---

# 📝 Commit Message Conventions

Commit messages aren’t just labels — they are **descriptions of system movement**. When AI and human collaborators work together, clarity in intent becomes paramount.

---

## 🧱 Structure

```text
<type>: <short summary>
```

Optional body:

```text
<type>: <short summary>

Detailed explanation (if needed)
- Bullet if necessary
- Explains rationale, not just outcome
```

---

## 🔖 Allowed Types

| Type    | When to Use                                                   |
|---------|----------------------------------------------------------------|
| feat    | New functionality, content, or pattern                        |
| fix     | Bug fix or correction                                         |
| chore   | Refactor, naming fix, structural improvement                  |
| docs    | Documentation-only change                                     |
| refactor| Code change that neither fixes a bug nor adds a feature       |
| style   | Formatting, white space, etc. (no code change)                |
| test    | Adding or updating tests                                      |

---

## 🧠 Philosophy

- Always treat a commit like it’ll be **read by someone else**, even if that “someone” is you months later.
- Don’t explain *what changed* — explain *why it changed* when needed.
- Include the **versioned context** if it impacts protocol evolution.

---

## 📌 Examples

```bash
feat: add failsafe reset protocol to guides/
chore: restructure output folder tree for modularity
docs: document context-transfer patterns with prompt flows
fix: fallback bug in diagnostic output logging
```

