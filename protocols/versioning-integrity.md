---
file: protocols/versioning-integrity.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Defines the mechanism for maintaining synchronization between changelog, version map, and individual file versions.
---

# 🔐 Versioning Integrity Protocol

This document codifies the expected behavior of all agents working with the ai-handshake protocol regarding version management and integrity.

## 🧭 Two-Tier Versioning Model

| Layer        | Description                                                  | Purpose                                  |
|--------------|--------------------------------------------------------------|------------------------------------------|
| File-Level   | Each `.md` file carries its own version in the frontmatter   | Enables scoped evolution of roles/patterns |
| Protocol-Level | A global version defined in `version-map.md` and changelog | Tracks sync checkpoints across the system |

---

## ✅ Update Protocol for Agents

When an MCP payload modifies one or more `.md` files, the agent must:

1. **Evaluate Impact**  
   Determine whether the change warrants a changelog entry (e.g., philosophical, structural, or expectation change).

2. **If Changelog is Updated**  
   The same MCP **must**:
   - Bump the protocol version in `version-map.md`
   - Include a clear changelog entry

3. **Sync Checkpoint Logging**  
   At each changelog milestone, log:
   > 📦 Snapshot aligned: All roles, guides, and patterns synchronized at vX.X.X

---

## 📜 Agent Roles

- **documentation-writer**  
  Owns the accuracy of:
  - Changelog versioning
  - `version-map.md`
  - Ensures file frontmatter version consistency

- **software-architect**, **product-architect**  
  Collaborate to ensure protocol updates are coherent, scoped, and milestone-bound

---

## 🧪 Manual Reconciliation

If versions drift or are unclear:
- Perform a file-level audit
- Confirm against last known `version-map.md`
- Re-align via explicit MCP and commit

This ensures consistency in multi-agent, multi-context workflows.
