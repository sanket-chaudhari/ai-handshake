# 🛠️ Getting Started with ai-handshake (v0.0.1)

This guide sets up the **core foundation** for working with ChatGPT in code-driven projects using the `ai-handshake` system. It must be followed *before* adding any project-specific logic, tech stack, or business context.

---

## ✅ Assumptions

- You are collaborating with ChatGPT to build a system in code (Figma plugin, Swift app, Arduino sketch, etc.)
- You want reliable handoff between idea → implementation
- You prefer local control: Git, terminal, and optional GitHub remote

---

## 🧱 Foundation Components

| Component                | Purpose                                                      |
|-------------------------|--------------------------------------------------------------|
| `scripts/run-mcp.js`    | Executes MCP payloads locally                                |
| `scripts/mcp-payload.json` | Temporary file to hold GPT-generated payload               |
| `package.json`          | Minimal Node package file for script access                 |
| `.gitignore`            | Ignore temp/machine files like payload and logs             |

---

## ⚙️ Setup Steps

1. **Create local project folder**
2. **Open folder in VS Code or Cursor**
3. **Paste GPT bootstrap prompt** (see next file)
4. GPT will:
   - Scaffold `scripts/`
   - Create `run-mcp.js`, `mcp-payload.json`, `package.json`, `.gitignore`
   - Instruct you to run `npm init -y` and `npm install` (if needed)
5. GPT gives you back:
   - Fully working file structure
   - `npm run mcp` script
   - Git setup + optional remote push
6. You run commands manually (for safety)
7. Confirm that MCP runs successfully before building anything else

---

## 🔄 Replaceability Notice

If in the future, a better protocol replaces MCP:
- You can swap the underlying mechanism inside `scripts/`
- The rest of the ai-handshake folder layout will stay intact
- This setup doc will be archived as `getting-started.v0.0.1.md`

The spirit of the handshake *does not depend* on MCP — only this version does.

---

## ✅ You Are Now Ready to Begin Project Work

Ask GPT to:
- Scaffold `README.md`, `version-map.md`, etc.
- Populate your project context
- Use `MCP` for every file creation/change

That’s it. ✨