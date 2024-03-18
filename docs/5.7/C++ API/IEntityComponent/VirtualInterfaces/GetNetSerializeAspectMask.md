---
sidebar_position: 4
---

# GetNetSerializeAspectMask
Override to provide a mask of active network aspects used by this component. Called once during binding to network.
:::warning
Sending entity events or querying other components is prohibited from within this function!
:::
```cpp title="GetNetSerializeAspectMask"
virtual NetworkAspectType GetNetSerializeAspectMask() const { return 0; }
```