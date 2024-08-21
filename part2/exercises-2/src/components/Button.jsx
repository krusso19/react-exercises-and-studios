import './styles.css';

function Button() {
   function onLearnMore(){
      alert("crash crackle woosh");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;