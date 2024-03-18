---
sidebar_position: 2
---
import Tag from '@site/src/components/Tag';


:::warning
Currently VS2022 does not build with this method and we recommend against it.
:::
:::info
Scaleform requires an agreement with Autodesk, then source later can be obtained from Crytek.
:::

# Building From Source

### What you'll need

- [Acess to Cryengine Github Repository](https://github.com/CRYTEK/CRYENGINE_ReadMe).
  - You need to ask for permision to access the Cryengines repository in this link you are provided a readme file that details everything that need to be done in order to get access to it.

- [Visual Studio](https://visualstudio.microsoft.com/downloads/) <Tag color="#ff5733">version 15 / 17</Tag>.
  - When installing Visual Studio, make sure you are checking all the boxes listed below:
    - C++
    - C++ ATL for latest v142
    - Windows 10 SDK (10.0.19041.0)
    - MSVC V142

- [Github Desktop](https://desktop.github.com).
  - Install Git or Github Desktop to be able to clone the repository for easier updates later.

    OR

  - From the Cryengine github repository page download the latest version of the engine from Release section.

- [Cmake](https://cmake.org/download/).
  - Make sure you have Cmake installed as its a core part of this tutorial.

- [Autodesk FBX SDK](https://aps.autodesk.com/developer/overview/fbx-sdk).
  - Download the FBX SDK as it does not ship with the engine and is needed for a complete build.

### Optional SDKs

|Name   |Version|Path|
|-------|-------|----|
|ScaleFrom|Doesnt Matter|Code/SDKs/ScaleForm|
|Fmod Studio|1.10.04|Code/SDKs/Audio/fmod|
|WWISE|2017.2.4|Code/SDKs/Audio/wwise|
|Nvidia API|r343|Code/SDKs/NVAPI|
|PhysX|3.4|Code/SDKs/PhysX|
|AMD Extentions|1.0|Code/SDKs/AMD/Extentions|
|AMD GPU Services|2.1|Code/SDKs/AMD/AGS Lib Extra|
|SteamWorks|1.44|Code/SDKs/SteamWorks|
|Perforce API|2015.1|Code/SDKs/p4api|
|Intel GPA|2014 R2|Code/SDKs/GPA|

### How to build the engine

- Get started by <Tag color="#ff5733">**Cloning the repository**</Tag> from Cryengines Github Repository.
- Run the Cry_Cmake.exe located in the downloaded repositories root and click on DownloadSDKs,
This could take a bit depending on you're internet speed.
- After the install you should be prompted with a new window to Generate the Solution for you're visual studio.
- When you are prompted with the Generate window install the previously downloaded Autodesk FBX SDK and open the installed folder and copy the contents inside the SDK version name To this location:
`Code/SDKs/fbxsdk`
- At this stage if you want you can download and install other SDKs as well, the avalible list can be found at the top of the page.
- if you added any optional SDKs tick thyre checkboxes.
- now you can hit Configure and wait if you have red options hit configure again and if everything is okay we can now hit generate to generate the solution.
- now we can open the solution and build the engine.

### Registering the Built Engine
Altough we have built the engine we still need to register it for the launcher 
- first locate the Cryengine.Cryengine in the engine folder and open it.
- it is important to cahnge the engine id text e can simply add github to the end it.
- we should rename the engine we can do the same as the id and add a Github to the end of the name to show diffrently in the launcher and we dont need to change the version.
- now we can create a new project in the launcher and use the new engine.

### Switch Project to Custom engine
- for a project to use the new engine we built all we need to do is right click on the Game.Cryproject and choose Switch engine version and from the dropdown select out custom engine and hit ok.




<iframe width="560" height="315" src="https://www.youtube.com/embed/wSDHLj8HkhE?si=Jqj2xwzb2chvClZa" title="Building Engine From Source Crytek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>