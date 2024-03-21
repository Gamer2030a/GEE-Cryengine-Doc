---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';
import DocusaurusImageUrl from '@site/static/img/5.7/ime.png';

# Scaleform IMEE Support
:::info
    Copied from Crytek official Manual
:::


Some languages (such as Chinese) have on-screen helpers and various keyboard layout functions to help with text input.
This feature is supported by Scaleform as well.

###  Enabling support for IME
When building the engine from source, make sure that ENABLE_GFX_IME definition is set in ConfigScaleform.h
This will link in the Scaleform IME support library.

:::warning
Scaleform IME support library is only available for Windows.
:::
:::warning
For EaaS users, the engine is shipped as pre-compiled binaries. These binaries have Scaleform IME support.
:::
At this point, IME support is available in the binaries, but it's not necessarily active.
You can edit game.cfg for your project and set the CVar: sys_ime=1

:::note
IME support is never available in the Sandbox, it can only be used in the game launcher.
:::

### Checking for IME support
To check that IME support is available, use the GameSDK sample project's main menu in the game launcher.
By going to "Multiplayer" and then "Host Server" menu, you have some text fields to enter text.

Depending on the current language setting of the OS, you will be presented with various options.
For example, with input language set to Chinese it should look similar to the below screenshot: 
<img src={DocusaurusImageUrl} />


### Updating Flash files for IME support
In the GameSDK/Libs/UI/FlashAssets/cryflash folder will be a file LanguageBar.as that wraps the language bar functionality.
This allows you to easily implement support for this feature in other Flash files.

The default UI framework will activate the language bar when a text field is being written to. 

:::note
The IME candidate-list file has been created to import from the SDK's default font library (HUD_Font_LocFont.gfx).
From this file it will read the Font_Body ActionScript symbol to render glyphs.
:::