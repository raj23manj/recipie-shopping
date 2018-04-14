import * as firebase from 'firebase';

export class AuthService {

  token: string;

  signupUser(email: string, password: string){
    // console.log('fine');
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
  }

  signinUser(email: string, password: string){
    // console.log('fine');
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
              console.log(response)
              firebase.auth().currentUser.getToken()
                      .then(token => {
                        this.token = token;
                      });
            })
            .catch(error => console.log(error));
  }

  getToken(){
    firebase.auth().currentUser.getToken()
                    .then((response) => {
                      console.log(response)
                      firebase.auth().currentUser.getToken()
                              .then(token => {
                                this.token = token;
                              });
                    });

    return this.token;
  }

}
