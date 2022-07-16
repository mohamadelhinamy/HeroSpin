## Install and Build
​
- Install node_modules via ```npm install```
​
-  ### Android
        - Create local.properties file
        - Build & Run via `npm run android` or `react-native run-android`
​
- ### IOS
       - Install pods via `cd ios && pod install && cd ..`
       - Build & Run via `npm run ios or react-native run-ios`
​
## Commands
 ### Generate apk
        add app credentials to gradle.properties file
        cd android && ./gradlew clean && ./gradlew assembleRelease && cd ..
​
 ### Generate aab
        cd android && ./gradlew clean && ./gradlew bundleRelease && cd ..

## Folder Structure
```
├── App.tsx
├── Gemfile
├── __tests__
│   └── App-test.tsx
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package-lock.json
├── package.json
├── android
├── ios
├── src
│   ├── assets
│   │   ├── aquaMan.png
│   │   ├── batMan.png
│   │   ├── blackPanther.png
│   │   ├── blackWidow.png
│   │   ├── captainAmerica.png
│   │   ├── dcBg.jpeg
│   │   ├── dcLogo.jpeg
│   │   ├── doctorStrange.png
│   │   ├── flash.png
│   │   ├── hulk.png
│   │   ├── images.ts
│   │   ├── ironman.png
│   │   ├── joker.png
│   │   ├── marvelBg.webp
│   │   ├── marvelLogo.png
│   │   ├── superMan.png
│   │   ├── thor.png
│   │   ├── wanda.png
│   │   └── wonderWoman.png
│   ├── components
│   │   ├── BackHeader.tsx
│   │   └── Typography.tsx
│   ├── config
│   │   ├── api.ts
│   │   └── constants.ts
│   ├── constants
│   │   ├── dictionary.ts
│   │   ├── regex.js
│   │   └── urls.js
│   ├── context
│   │   ├── LangContext.tsx
│   │   └── types.ts
│   ├── modules
│   │   ├── heroes
│   │   │   ├── components
│   │   │   │   └── HeroCard.tsx
│   │   │   └── data
│   │   │       └── index.ts
│   │   └── home
│   │       ├── components
│   │       │   └── UniverseCard.tsx
│   │       └── data
│   │           └── Universes.ts
│   ├── navigators
│   │   └── MainNavigator.tsx
│   ├── screens
│   │   ├── HeroMovies.tsx
│   │   ├── Heroes.tsx
│   │   ├── Home.tsx
│   │   └── MovieDetails.tsx
│   ├── services
│   │   └── commonFunctions.ts
│   └── styles
│       └── colors.js
└── tsconfig.json
```