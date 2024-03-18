---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# CryWarning

used to display a warning, log it and write it to a file and show a dialog box with the dialog message and error type.
```jsx title="Function"
void CryWarning(EValidatorModule, EValidatorSeverity, const char*, ...) PRINTF_PARAMS(3, 4);
```

```jsx title="EValidatorModule"
enum EValidatorModule
{
	VALIDATOR_MODULE_UNKNOWN,
	VALIDATOR_MODULE_RENDERER,
	VALIDATOR_MODULE_3DENGINE,
	VALIDATOR_MODULE_ASSETS,
	VALIDATOR_MODULE_AI,
	VALIDATOR_MODULE_ANIMATION,
	VALIDATOR_MODULE_ENTITYSYSTEM,
	VALIDATOR_MODULE_SCRIPTSYSTEM,
	VALIDATOR_MODULE_SYSTEM,
	VALIDATOR_MODULE_AUDIO,
	VALIDATOR_MODULE_GAME,
	VALIDATOR_MODULE_MOVIE,
	VALIDATOR_MODULE_EDITOR,
	VALIDATOR_MODULE_NETWORK,
	VALIDATOR_MODULE_PHYSICS,
	VALIDATOR_MODULE_FLOWGRAPH,
	VALIDATOR_MODULE_ONLINE,
	VALIDATOR_MODULE_DRS,
};
```

```jsx title="EValidatorSeverity"
enum EValidatorSeverity
{
	VALIDATOR_ERROR,
	VALIDATOR_ERROR_DBGBRK,
	VALIDATOR_WARNING,
	VALIDATOR_COMMENT,
	VALIDATOR_ASSERT
};
```

```jsx title="Example"
CryWarning(VALIDATOR_MODULE_ONLINE, VALIDATOR_ERROR, "Failed to load the lobby!");
```