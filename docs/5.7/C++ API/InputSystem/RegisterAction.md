---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Register Action
used to register the action we want to be tracked.
```cpp title="Function"
virtual void RegisterAction(const char* szGroupName, const char* szName, TActionCallback callback);
```

```cpp title="Example"
m_pInputComponent->RegisterAction("player", "interact", [this](int activationMode, float value) {});
```