---
sidebar_position: 4
---

# GetPreviewer
brief Override this to return preview render interface for the component.

Multiple component instances can usually share the same previewer class instance.
```cpp title="GetPreviewer"
virtual IEntityComponentPreviewer* GetPreviewer() { return nullptr; }
```