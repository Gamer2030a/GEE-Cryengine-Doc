---
sidebar_position: 4
---

# GetTransformMatrix
This function returns Calculated Transformation Matrix for current component transform.
```cpp title="GetTransformMatrix"
Matrix34 GetTransformMatrix() const { return (m_componentFlags.Check(EEntityComponentFlags::Transform) && m_pTransform) ? m_pTransform->ToMatrix34() : IDENTITY; }
```