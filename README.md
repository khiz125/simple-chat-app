# Simple private chat app with template messages

Designed for people who are not familiar with native application such as the elderly.

![](https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=plastic")
![](https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=plastic)
![](https://img.shields.io/badge/-Firebase-FFCA28.svg?logo=firebase&style=plastic)

## Features

User login, logout and messaging with Firebase Authentication and Cloud Firestore.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

# Requirement

Create a firebase project with your account, and set firebase SDK with required variables in .env file, which placed in the root directory.

```
  REACT_APP_APIKEY=Your_firebase_vision_api_key
  REACT_APP_AUTHDOMAIN=Your_firebase_auth_domain
  REACT_APP_PROJECTID=Your_firebase_project_id
  REACT_APP_STORAGEBUCKET=Your_firebase_storage_bucket
  REACT_APP_MESSAGINGSENDERID=Your_firebase_sender_id
  REACT_APP_APPID=Your_firebase_app_id
  REACT_APP_MEASUREMENTID=Your_firebase_app_measurementId
```