---
file: distill-chat.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Step-by-step flow to distill a long chat thread into a structured context handoff.
---

# 🧠 Playbook: Distilling a Chat

When migrating context from another assistant/chat/tool, we must **summarize the collaboration** with precision. This playbook defines how to turn an existing thread into a structured context that can be fed into the ai-handshake protocol or reused elsewhere.

---

## 🪜 Step-by-Step: Human Flow

1. **Trigger the Source Chat**
   - Prompt:  
     > "You’re about to help distill the full context of this collaboration. Please export the following in detail:"
     >  
     > - What we worked on  
     > - How we worked together  
     > - Issues or frictions  
     > - Language or pattern triggers  
     > - System structures or files  
     > - Any tacit agreements  

2. **Ensure Multi-Part Output**
   - Let the AI finish each part
   - Ask: *"What parts remain?"* and collect all

3. **Paste Output into This Chat**
   - Start a clean thread with:
     > "I’m pasting the full dump from another agent/thread. Read and prepare to integrate it."

4. **Ingest & Integrate**
   - This system will prompt you to:
     - Validate which parts are new
     - Confirm merges
     - Trigger new MCP payload if needed

---

## 🧪 Prompt Snippet (Reusable)

```text
You're helping me distill and migrate a prior conversation into reusable system knowledge. Begin with:
- What we built
- How we worked
- Any unspoken behaviors
- Naming or architecture patterns
- File or module map
```

---

## 📎 Notes

- Use this for Claude, Cursor, or even older ChatGPT threads.
- Maintain the integrity of emotion, clarity, and rhythm — not just the words.

