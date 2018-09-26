export let Api_Url = '';

switch (window.location.hostname) {
  case 'meb-flashapp.herokuapp.com':
    Api_Url += 'http://apiflashfocus.azurewebsites.net/';
    break;
  default:
    Api_Url += 'http://apiflashfocus.azurewebsites.net/';  //Optional: replace with API localhost

}

export const environment = {
  production: true
};
