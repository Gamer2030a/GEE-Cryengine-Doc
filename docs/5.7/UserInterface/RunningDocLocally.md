---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


# Scaleform GFx
:::info
    Copied from Crytek official Manual
:::

### What is Scaleform GFx

Scaleform GFx is an external middleware that provides functionality to render Flash elements on the screen, like user interface, HUD, textures based on Flash files, etc.

Flash files have to be processed by the GFxExporter before being used in CRYENGINE. Scaleform GFx files use the gfx extension for its files. Following is a short example of how to draw a basic Flash element as HUD:

Open Game.h search for m_pGameAudio and add below:
```cpp
IFlashPlayer* m_pFlashPlayer;
```

If required you can add the IFlashPlayer header:
```cpp
#include "IFlashPlayer.h"
```
IFlashPlayer is the interface that provides all the functionality to control the Flash player inside the game viewport.

Open the Game.cpp. Add in the constructor the initialization of the flash player pointer.
```cpp
m_pFlashPlayer(NULL);
```

In the CGame::Init function create a Flash player instance after m_pGameAudio has been initialized.
```cpp
if(!m_pFlashPlayer)
{
	m_pFlashPlayer = gEnv->pSystem->CreateFlashPlayerInstance();
	bool bResult = m_pFlashPlayer->Load("Libs\\UI\\YOURFILE.gfx");
	CryLogAlways("Loading Libs\\UI\\YOURFILE.gfx: %s", bResult ? "Done" : "Error");
	m_pFlashPlayer->SetViewport(0, 0, m_pFlashPlayer->GetWidth(), m_pFlashPlayer->GetHeight(), 1);
}
```

YOURFILE is a placeholder for your gfx file, which should be located in root\GameSDK\Libs\UI.

The Flash player instance is created by CrySystem. You can access CrySystem through the global variable gEnv.

Now, you can render the Flash file inside the CGame::OnPostUpdate function.
```cpp
if (m_pFlashPlayer)
{
	m_pFlashPlayer->Advance(fDeltaTime);
	m_pFlashPlayer->Render();
}
```

Advance syncs the game with the Flash files. With Advance you are able to render animated Flash files.

:::info
You need to run a level before you can see the result since the game update functions are not called from the main menu.
:::

- There are different CVars that can control the Flash environment:
  - sys_flash = enables/disables the Flash rendering.
  - sys_flash_info = enables Flash profiling, and various information is displayed.
  - sys_flash_log_options = enables logging of several Flash related aspects (Flash loading, Flash action script execution, etc).

### Calling an ActionScript to Lua
In ActionScript, call:

```lua
fscommand("MyCommand")
```

which will be handled in C++ by a FSCommandHandler (IFSCommandHandler interface). So if you have your own class (e.g. HUD Manager) which loads your Flash files, you have to register your class as the FSCommandHandler for Flash commands through the IFlashPlayer pointer with:
```lua
pFlashPlayer->SetFSCommandHandler(this);
```

(of course you can also have more than one command handler, e.g. one for the MENU and one for the HUD)

After that you'll receive all your commands invoked from Flash in your class method based on the IFSCommandHandler interface:
```lua
void MyHUDManager::HandleFSCommand( const char *szCommand,const char *strArgs, void* pUserData )
{
   if(!strcmp(szCommand, "MyCommand"))
   {
       CryLogAlways("Flash command received...");
   }
}
``` 

If you have received your Flash command, all you need to do is call your Lua script method (take a look at the ScriptHelpers.h file or directly use the ScriptSystem itself (gEnv->pScriptSystem)).

To use it the other way, you need to implement a ScriptBind for your (for example) HUD Manager class in order to be able to communicate from Lua to C++ (take a look at the ScriptBind_Game.h ScriptBind_Game.cpp files for an easy example).

From within those ScriptBind methods you can simply invoke a Flash method through the IFlashPlayer pointer with:
```lua
pFlashPlayer->Invoke0("FlashMethod"); // 0 arguments
``` 