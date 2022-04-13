import IdCard from "./components/idCard/index";
import Greetings from "./components/Greetings/Greetings"
import Random from "./components/Random/Random"

function App() {
  return (
    <div className="App">

     <IdCard 
      lastName = 'Doe' 
      firstName = 'John' 
      gender = 'masculino' 
      height = { 178 } 
      birth = { new  Date ( "1992-07-14" ) } 
      picture = "https://randomuser.me/api/ portraits/men/44.jpg" ></IdCard>
      < IdCard 
      lastName = 'Delores' 
      firstName = 'Obrien' 
      gender = 'female' 
      height = { 172 } 
      birth = { new  Date ( "1988-05-11" ) } 
      picture = "https://randomuser.me/api/ retratos/mulheres/44.jpg" />
     <Greetings lang = "de"> Ludwig </Greetings>
     <Greetings lang = "fr"> François </Greetings>
     <Random min = { 10 } max = { 20 } /> 
     <Random min = { 1 } max = { 100 } /> 
    </div>
    
  );
}

export default App;
