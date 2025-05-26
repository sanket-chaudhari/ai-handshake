---
file: protocols/versioning-integrity.md
version: 1.1.0
lastUpdated: 2025-05-25
description: Defines the mechanism for maintaining synchronization between changelog, version map, and individual file versions.
---

# 🔐 Versioning Integrity Protocol (v1.1.0)

This document governs how versioning, changelog maintenance, and protocol synchronization are managed across `ai-handshake`.

---

## 🧭 Two-Tier Versioning Model

| Layer         | Description                                                    | Purpose                                   |
|---------------|----------------------------------------------------------------|-------------------------------------------|
| File-Level    | Each `.md` file carries its own version in the frontmatter     | Enables scoped evolution of roles/patterns |
| Protocol-Level| Global version in `version-map.md` + versioned changelog files | Tracks coordinated milestone evolution     |

---

## 🔁 Changelog Protocol (Updated in v1.1.7)

### 🧱 File Structure

| File | Purpose |
|------|---------|
| `changelog.v1.x.md` | Full narrative log for all v1.x versions |
| `changelog.v2.x.md` | (To be created when v2 begins) |
| `changelog.md` | Index of all major version logs |
| `summary-changelog.md` _(optional)_ | One-liner summaries of each version |

### 🧾 Narrative Log Guidelines

- Written like a release note: describe **what changed and why**
- Use headings and bullet structure for readability
- Snapshot logs with:
  > 📦 Snapshot aligned: All roles, guides, and patterns synchronized at vX.X.X

### ⛔ Do NOT

- Keep appending infinitely to a single changelog
- Modify older changelogs without version re-tagging
- Introduce changes to a file without noting it in the changelog (unless trivial formatting)

---

## 🛡️ Sync Enforcement Responsibilities

### ✅ `documentation-writer`

- Must:
  - Ensure changelog + version-map + file frontmatter are in sync
  - Split changelogs into modular files by major version
  - Prevent drift across parallel updates

---

### 📎 Tips for New AI Agents

- Always check if changelog is versioned by major version
- Use the index at `changelog.md` to locate the active log file
- Ask for a full list of `.md` file versions if `version-map.md` is missing

---

## 🔁 Manual Reconciliation Flow

1. Identify the version of the current working file from frontmatter
2. Check the active changelog file (per major version)
3. If out of sync:
   - Alert maintainer
   - Propose changelog and version-map updates via MCP

> This protocol preserves continuity across multi-agent, multi-context evolution.

