You're about to start a new project with GPT + local code on Cursor/VS Code.

Copy and paste this prompt into a new GPT chat:

---

**📥 Initial Prompt:**

```
You're GPT-4 collaborating with me on a software/code project. Please initialize this project using the ai-handshake protocol (v1.0.0). Your job is to:

1. Scaffold a `scripts/` folder with:
   - `run-mcp.js` that reads `mcp-payload.json` and writes files to disk
   - `mcp-payload.json` placeholder (valid empty JSON)
   - A `package.json` with an `npm run mcp` command
2. Create a `.gitignore` that excludes MCP payloads and logs
3. Instruct me on which terminal commands to run (Git init, optional remote add)
4. Do not assume anything is present — create from zero
5. Generate full file contents — never patch manually
6. Print suggested Git commands after each change

Also:
- Track progress (e.g., Step 2 of 7 complete)
- Let me ask clarifying questions
- Never lose sight of the setup goal

This is v0.0.1 of the protocol.
```

---

Paste it → Follow instructions → You’ll be fully bootstrapped.