---
sidebar_position: 4
---
import Tag from '@site/src/components/Tag';

# Creating new component

In CryEngine, components are fundamental building blocks for defining entity behavior and functionality. This guide will walk you through **the process of creating a new component** using C++.

:::info
Component Template that we will use as an example avalible here: [document](/docs/5.7/C++%20API/Component/ComponentTemplate).
:::
:::info
You can generate a new GUID in VS by going to Tools-> Create GUID-> RegisteryFormat-> NewGUID
:::


## GUID
We start by the GUID, Every Component need a unique GUID otherwise the will not compile. 
```cpp title="GUID"
desc.SetGUID("{You're Components GUID}"_cry_guid);
```

## Component Name & Description for editor

The name of the component can be set like this:
```cpp title="SetName"
desc.SetLabel("Components Name");
```
for the description of it:
```cpp title="SetDescription"
desc.SetDescription("Components Description");
```
and if we want it to be in its own category in the editor we set it by changing the category name to what we like it to be a subcategory of:
```cpp title="SetDescription"
desc.SetEditorCategory("CategoryName");
```

## Register the Component
To make your component available in the CryEngine editor, you need to register it. This is done using the RegisterMYComponent
<Tag color="#ff5733">(Use the component class name instead of MyComponent)</Tag> function defined in the namespace. This function is automatically called when your DLL is loaded by the engine.

## Important Functions
There are a few functions that are important to the component class.
We can use these functions to Process work when the component is initialized or Destroyed or track and listen to events.

### Initialize
this function is called when the component is initialized. 
```cpp title="Initialize"
virtual void Initialize();
```

### OnShutDown
this function is called when the component is Destroyed. 
```cpp title="OnShutDown"
virtual void OnShutDown();
```

### ProcessEvent
this function allows users to hadle sent events. 
```cpp title="ProcessEvent"
virtual void ProcessEvent();
```

[this](/docs/5.7/C++%20API/Component/ComponentTemplate) is the full list of the functions from IEntityComponent that we can use for our component.  