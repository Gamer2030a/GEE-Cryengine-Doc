---
sidebar_position: 4
---

# ProcessEvent
This function is used so the component will be able to handle events sent from the host Entity.
:::note
Requires returning the desired event flag in GetEventMask.
:::

```cpp title="ProcessEvent"
virtual void ProcessEvent(const SEntityEvent& event);
```