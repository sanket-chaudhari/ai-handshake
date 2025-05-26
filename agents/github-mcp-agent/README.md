# 🧩 GitHub MCP Agent

A protocol-compliant CLI tool that:
- Pulls GitHub repos
- Reads + validates `mcp-payload.json`
- Applies MCPs safely to local files
- Creates commits + optionally pushes

Built for use with the [ai-handshake protocol](https://github.com/sanket319/ai-handshake).

---

## 🧠 Why This Exists

> GPT memory is ephemeral. Context gets lost.

This agent allows context to be encoded *outside the chat* in a stable, version-controlled bridge between:
- Your local repo
- GitHub
- GPT-based payload agents

---

## ⚙️ Setup

1. Clone the `ai-handshake` repo
2. Navigate to `agents/github-mcp-agent`
3. Create a `.env` file:

```env
GITHUB_TOKEN=ghp_...
TARGET_REPO=https://github.com/org/repo.git
TARGET_BRANCH=main
WORK_DIR=.tmp/github-repo
```

4. Run MCPs via:
```bash
node src/commit/runPayload.js
node src/commit/commitChanges.js
node src/commit/maybePush.js
```

---

## 🧰 What This Includes

- `src/github/` — token validation, repo cloning, diagnostics
- `src/mcp/` — file reader, payload validator, diff checker
- `src/commit/` — MCP executor, committer, optional pusher

---

## 🤝 Role Expectations

- **Software Architect**: ensure structure + repo safety
- **Developer Agent**: generate valid MCP payloads only
- **Human Partner**: approves + commits

---

## 🔄 Protocol Alignment

This tool:
- Uses `mcp-payload.json`
- Follows versioned commit hygiene
- Integrates changelog + version-map expectations
- Never mutates meaning without explicit approval

---

## ✅ Example

```bash
npm run mcp
# or
node src/commit/runPayload.js
```
