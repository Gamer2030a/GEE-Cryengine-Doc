---
sidebar_position: 4
---

# SetTransformMatrix
This function Sets the transformation form a matrix. If the component doesn't have a transformation yet the function will add one.
```cpp title="SetTransformMatrix"
void SetTransformMatrix(const Matrix34& transform);

void SetTransformMatrix(const CryTransform::CTransformPtr& transform);
```