---
sidebar_position: 4
---

# GetEventPriority
This function determins the order in which this component will receive entity events (including update). Lower number indicates a higher priority.
```cpp title="GetEventPriority"
virtual ComponentEventPriority GetEventPriority() const { return (ComponentEventPriority)GetProxyType(); }
```