---
sidebar_position: 4
---

# NetReplicateSerialize
Used to match an entity's state when it is replicated onto a remote machine.

This is called once when spawning an entity, in order to serialize its data - and once again on the remote client to deserialize the state.

Deserialization will always occur *before* IEntityComponent::Initialize is called.

### First Parameter
ser Serializer for reading / writing values.

:::warning
 This is not called from the Main thread, keep thread safety in mind - and in the best case only serialize local values, without invoking complex logic.
:::
```cpp title="NetReplicateSerialize"
virtual void NetReplicateSerialize(TSerialize ser) {}
```