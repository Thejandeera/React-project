import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
export function App() {
  return(
    <>
    <Header/>
    
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <hr></hr>
    <Student name="Thejan" age = {30} isStudent={true} />
    <p></p>
    <Student name = "Sandeepana" age = {21} isStudent = {false}/>
    
    <Footer/>
    
    </>
  );

  
}
