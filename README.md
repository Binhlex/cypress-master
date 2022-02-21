# Install dependencies
$npm install

# Run test
$npm run run:test

=======================================================================================
VS Code extension:

Cucumber extensions:
- https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete
++ Go to steps from feature file: Add this to settings.json:
    "cucumberautocomplete.steps": [
        "cypress/**/*.spec.js"
    ],
    "cucumberautocomplete.syncfeatures": "**/*.feature"

- https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper

Generate steps definition
- Install extension: https://marketplace.visualstudio.com/items?itemName=Piotr-Porzuczek.jest-cucumber-code-generator-extension
+ Select the cucumber step, press Ctrl + Shift + C
+ Go to step definition file, paste it.

Live Server
- Install extension:https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Sync VS code settings:
- Install extension: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
- Then add the line in settings.json: "sync.gist": "27545b9dbd4d406de938629e2e496982" //the id is example
- Guide: (Sync : Advanced Options > Open Settings Page)
++ https://www.freecodecamp.org/news/how-to-sync-vs-code-settings-between-multiple-devices-and-environments/
++ https://dev.to/shanalikhan/visual-studio-code-settings-sync-configurations-mn0

Code Format:
- Install extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier- 
- prettier (https://glebbahmutov.com/blog/configure-prettier-in-vscode/)

Test:
- BDD: Using Cucumber
- Page Object patten

Hooks
- Cucumber hooks
- Mocha hooks
- Login by API and store toke to localStorege

Locators plugin:
- cypress-xpath

Reporting:
- multiple-cucumber-html-reporter (error + screenshot)

Next:
- Github action




