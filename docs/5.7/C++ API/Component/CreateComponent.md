---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Create Component

used to Create components of the given type.

## Create one
meanwhile this function only creates a new component regardless of one existing or not.
```cpp title="Engine Function"
ComponentType* CreateComponent();
```
```cpp title="Function"
m_pEntity->CreateComponent<ComponentType>();
```
```cpp title="Example"
Cry::DefaultComponents::CCameraComponent* m_pCameraComponent = m_pEntity->CreateComponent<Cry::DefaultComponents::CCameraComponent>();
```