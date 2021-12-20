function message1(t){
if(t.value.length>=3){
alert('Bonjour,merci de nous contacter.Votre demande d"inscription est validée, nous vous envoyons un mail dans les heures administratives');
}
else {
alert('Veuillez saisir un mail correct');
t.focus(); 
}
}
import {initializeApp} from 'firebase/app';
const firebaseApp=initializeApp({
    "hosting": {
      "site": "ecole-primaire-nibras-kids",
  
      "public": "public",
      ...
    }
  })