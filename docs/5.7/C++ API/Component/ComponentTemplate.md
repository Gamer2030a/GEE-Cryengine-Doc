---
sidebar_position: 4
---

# Component Overview / Template

:::note
Replace the Base Component name with you're own name.
:::

```cpp title="Template Component.h"
#pragma once
class BaseComponent : public IEntityComponent
{
public:
	BaseComponent() {}
	~BaseComponent() {}

	static void ReflectType(Schematyc::CTypeDesc<BaseComponent>& desc)
	{
		desc.SetGUID("{C5B5E10B-3CAB-4099-BC35-3AEFE903AEF0}"_cry_guid);
		desc.SetLabel("BaseComponent");
		desc.SetDescription("A New BaseComponent");
		desc.SetEditorCategory("Internal");
	}
  virtual void Initialize();
};
```

```cpp title="Template Component.CPP"
#include "StdAfx.h"
#include "Component.h"
#include <CrySchematyc/Env/IEnvRegistrar.h>
#include <CrySchematyc/Env/Elements/EnvComponent.h>
#include <CryCore/StaticInstanceList.h>

namespace
{
#include "StdAfx.h"
#include "Component.h"
#include <CrySchematyc/Env/IEnvRegistrar.h>
#include <CrySchematyc/Env/Elements/EnvComponent.h>
#include <CryCore/StaticInstanceList.h>

namespace
{
	static void RegisterBaseComponent(Schematyc::IEnvRegistrar& registrar)
	{
		Schematyc::CEnvRegistrationScope scope = registrar.Scope(IEntity::GetEntityScopeGUID());
		{
			Schematyc::CEnvRegistrationScope componentScope = scope.Register(SCHEMATYC_MAKE_ENV_COMPONENT(BaseComponent));
			{

			}

		}
	}

	CRY_STATIC_AUTO_REGISTER_FUNCTION(&RegisterBaseComponent);
}
void BaseComponent::Initialize()
{

}
```