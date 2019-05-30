
import Phone from './phone';
import css from './main.css';
//import css from './devices.css';


function phoneawesome(tag,model, options){
  console.log(document.querySelector("#phoneawesome"));
  return new Phone(tag,model,options);
}


window.phoneawesome = phoneawesome;
export default phoneawesome;