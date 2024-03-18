---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# CryLogAlways

Logs important data that must be printed regardless verbosity.
```jsx title="Function"
void CryLogAlways(const char*, ...) PRINTF_PARAMS(1, 2);
```

```jsx title="Example"
CryLogAlways("Player Entered the area!");
```