---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# CryLog

used for simple logs of data with low verbosity.
```jsx title="Function"
void CryLog(const char*, ...) PRINTF_PARAMS(1, 2);
```

```jsx title="Example"
CryLog("Player Entered the area!");
```