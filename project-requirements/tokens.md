---
file: tokens.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Token locations and runtime secrets
---

# 🔐 Tokens and Secrets

Track where runtime tokens and secrets are stored locally and how they are expected to be loaded.

---

## Examples

| Key/Secret            | Source               | Used In                |
|-----------------------|----------------------|-------------------------|
| FIGMA_PERSONAL_TOKEN  | .env file            | snapshot-service, utils |
| OPENAI_API_KEY        | env or Cursor Secret | ai-generative plugin    |

---

## Rules

- Do **not** commit secrets to GitHub
- Do **not** hardcode tokens into source files
- GPT will prompt for tokens during environment setup if not found
