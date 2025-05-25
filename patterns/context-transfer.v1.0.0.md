---
file: context-transfer.md
version: 1.0.0
lastUpdated: 2025-05-25
description: Protocol for moving context between chats, tools, or threads in AI-human collaboration.
---

# 🔁 Context Transfer Protocol

This document defines the process of **migrating AI-human collaboration from one context to another** — typically between chats, tools, or platforms.

---

## 🎯 Why This Matters

Chat-based AIs like ChatGPT do not persist long-term memory by default.  
Without an intentional **context migration ritual**, you risk:
- Forgetting nuance
- Losing shared understanding
- Repeating mistakes

---

## 🪜 Standard Flow for Context Transfer

1. **Distill Source Context**

Use the prompt:

```text
You're about to help distill the full context of this collaboration so far. Please generate a multi-part export of the following:
1. What we've worked on
2. How we worked together
3. Insights that emerged
4. Unwritten expectations
5. Language or prompting patterns
6. Behavioral agreements
7. File/folder structure (if code is involved)
```

2. **Export in Parts**
   - Allow assistant to return the dump in chunks
   - Ask it to list remaining chunks if any are pending

3. **Paste into Destination**
   - Always start a new chat or tool with:

```text
Hi — this chat is to continue an existing collaboration. I'm pasting below a distilled snapshot of the prior context.
```

4. **Re-anchor Expectations**
   - Ask: “Tell me what you understand so far.”
   - Ask: “Are there behaviors or defaults I should remind you of?”

---

## 💡 Bonus: You Can Prompt Tools to Do This Too

If you're using tools like Cursor, Claude, Notion AI etc., ask:

> “Can you generate a complete partnership summary based on our current context?”

Then paste that into this protocol and propagate downstream.

---

## 📎 Template Prompt for Transfer

> I’m pasting in the context dump from a prior thread. Please read and acknowledge. Let me know if anything needs reconfiguration or setup. Then we’ll continue where we left off.

