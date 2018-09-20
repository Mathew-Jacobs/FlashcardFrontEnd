export class GlobalApp {
    constructor() { }
  
    public isLogged(): boolean {
      if (localStorage.getItem('id_token') == null) {
        return false;
      } else {
        return true;
      }
    }
  }