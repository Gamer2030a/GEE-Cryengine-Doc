---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Create or Retrive Component

used to Create or retrive components of the given type.

## Get or Create one
This function sees if the component already exists if it does gets the component and if it doesnt it creates a new one.
```cpp title="Engine Function"
ComponentType* GetOrCreateComponent(bool bCheckHierarchy = true);
```
```cpp title="Function"
m_pEntity->GetOrCreateComponent<ComponentType>();
```
```cpp title="Example"
Cry::DefaultComponents::CCameraComponent* m_pCameraComponent = m_pEntity->GetOrCreateComponent<Cry::DefaultComponents::CCameraComponent>();
```