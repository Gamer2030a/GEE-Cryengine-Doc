---
sidebar_position: 4
---

# SetTimer
Starts a timer for this component instance

	Entity timers are owned by the component, and each component can have its own independent timers with identifiers that are unique to that instance

	When timer finishes entity system will signal to the component *once* with an event ENTITY_EVENT_TIMER.

	Multiple timers can be started simultaneously with different timer ids.

	If some timer is not yet finished and another timer with the same timerID is set, the new one
    
	will override old timer, and old timer will not send finish event.

	The timer will automatically be serialized to disk and restored for save games, assuming that a component with the same instance GUID exists at deserialization time.

### First Parameter
    timerId Timer ID, multiple timers with different IDs are possible.
### Second Parameter
	timeInMilliseconds Timer timeout time in milliseconds.

```cpp title="SetTimer"
void SetTimer(uint32 timerId, int timeInMilliseconds);
```