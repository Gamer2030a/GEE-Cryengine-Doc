---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Retrive all Component

used to retrive all components of the entity.
```cpp title="Engine Function"
virtual void GetComponents(DynArray<IEntityComponent*>& components) const = 0;
```
```cpp title="Function"
IEntity* m_pEntity; --handle to the entity
m_pEntity->GetComponents();
```
```cpp title="Example"
IEntity* pCamEntity = gEnv->pEntitySystem->FindEntityByName("basefloor_prefab");
DynArray<IEntityComponent*> components;
if (pCamEntity)
{
    pCamEntity->GetComponents(components);
}
```

