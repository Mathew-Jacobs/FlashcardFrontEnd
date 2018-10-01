export let Api_Url = '';

switch (window.location.hostname) {
  case 'meb-flashapp.herokuapp.com':
    Api_Url += 'https://flashcardapi.azurewebsites.net/';
    break;
  default:
    Api_Url += 'https://flashcardapi.azurewebsites.net/';  //Optional: replace with API localhost

}

export const environment = {
  production: true
};
