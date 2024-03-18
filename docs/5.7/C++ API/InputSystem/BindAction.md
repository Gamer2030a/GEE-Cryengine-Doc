---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Bind Action
for registering an input key we use two functions: RegisterAction and BindAction

used to log comments
```cpp title="Engine Function"
virtual void BindAction(Schematyc::CSharedString groupName, Schematyc::CSharedString name, EActionInputDevice device, EKeyId keyId, bool bOnPress = true, bool bOnRelease = true, bool bOnHold = true);
```
```cpp title="Example"
m_pInputComponent->BindAction("player", "interact", eAID_KeyboardMouse, eKI_E);
```

Other binds
```cpp title="Engine Functions"
virtual void BindKeyboardAction(Schematyc::CSharedString groupName, Schematyc::CSharedString name, EKeyboardInputId keyId, bool bOnPress = true, bool bOnRelease = true, bool bOnHold = true);
virtual void BindMouseAction(Schematyc::CSharedString groupName, Schematyc::CSharedString name, EMouseInputId keyId, bool bOnPress = true, bool bOnRelease = true, bool bOnHold = true);
virtual void BindXboxAction(Schematyc::CSharedString groupName, Schematyc::CSharedString name, EXboxInputId keyId, bool bOnPress = true, bool bOnRelease = true, bool bOnHold = true);
virtual void BindPS4Action(Schematyc::CSharedString groupName, Schematyc::CSharedString name, EPS4InputId keyId, bool bOnPress = true, bool bOnRelease = true, bool bOnHold = true);
virtual void BindAction(Schematyc::CSharedString groupName, Schematyc::CSharedString name, EActionInputDevice device, EKeyId keyId, bool bOnPress = true, bool bOnRelease = true, bool bOnHold = true);
```
```cpp title="Example"
m_pInputComponent->BindXboxAction("player", "interact", static_cast<Cry::DefaultComponents::CInputComponent::EXboxInputId>(eKI_XI_X));
```