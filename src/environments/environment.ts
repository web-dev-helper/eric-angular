// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyApsZgZGTUg9xdg11kUzgrdQkG3Jow0Bww",
    authDomain: "eric-angular-app.firebaseapp.com",
    databaseURL: "https://eric-angular-app.firebaseio.com",
    projectId: "eric-angular-app",
    storageBucket: "eric-angular-app.appspot.com",
    messagingSenderId: "119439066011"
  }
};
