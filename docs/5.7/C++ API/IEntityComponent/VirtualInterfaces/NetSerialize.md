---
sidebar_position: 4
---

# NetSerialize
Will be called for each active aspect for both reading and writing.

### First Parameter
 ser Serializer for reading/writing values.

### Second Parameter
aspect The number of the aspect being serialized.

### Third Parameter
profile Can be ignored, used by CryPhysics only.

### Fourth Parameter
flags Can be ignored, used by CryPhysics only.

```cpp title="NetSerialize"
virtual bool NetSerialize(TSerialize ser, EEntityAspects aspect, uint8 profile, int flags) { return true; }
```