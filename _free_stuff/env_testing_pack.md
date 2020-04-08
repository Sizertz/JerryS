---
file: siz_environment_test.pack
title: The ultimate environment testing pack
---
This .pack file will allow you to test your map in-game with all the environments, without having to reload your game.<br>
It does this by creating a land battle for each environment, called "Env: *environment name*"<br>
#### Instructions:

1. Dump siz_environment_test.pack in your *.../Total War WARHAMMER II/data/* folder
2. Set up the mod for the map you want to test
    - first method
        * Open the pack file with RPFM   
        * Re-write the Specification column to point to the map you want to test:
            * right-click > Apply... > Rewrite Selection...
            * value should be "terrain/battles/*your_map_folder*/" (you can find the name of your folder by opening your map's .pack file)
            * **DO NOT FORGET THE FINAL '/'**
            * you can also make it point to CA maps
    - second method
        * open your map's pack file
        * change the name of the terrain/battles/*your_map_folder* to whatever is in the Specification column of siz_environment_test.pack ("env_test_map" if you haven't messed with it yet)
4. Activate both siz_environment_test.pack and your map in your mod manager 
5. launch the game > custom battle > land battle
6. Choose among the "Env: xxxx" battles
