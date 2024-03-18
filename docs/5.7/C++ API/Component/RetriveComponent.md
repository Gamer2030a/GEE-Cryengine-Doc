---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Retrive Component

used to retrive components of the given type.
this function checks and sees if a component of type exists and if it does it retrives the handle of it.
```cpp title="Engine Function"
ComponentType* GetComponent(bool bCheckHierarchy = true) const
```
```cpp title="Function"
m_pEntity->GetComponent<ComponentType>();
```
```cpp title="Example"
Cry::DefaultComponents::CCameraComponent* m_pCameraComponent = m_pEntity->GetComponent<Cry::DefaultComponents::CCameraComponent>(true);
```

