import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './list.jsx'

export function App() {

  const fruits = [{id:1,name:"apple" , calories :95},
                  {id:2,name :"orange" , calories : 45},
                  {id:3,name :"banana" , calories :105},
                  {id:4,name : "coconut" ,calories:159},
                  {id:5,name :"pineapple",calories:37}];

  const Vegetables = [{id:6,name:"potatoes" , calories :95},
                    {id:7,name :"celeri" , calories : 45},
                    {id:8,name :"carrot" , calories :105},
                    {id:9,name : "corn" ,calories:159},
                    {id:10,name :"brocoli",calories:37}];
  return(
    <>
    <Header/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <List items={fruits} category ="fruits" />
    <List items={Vegetables} category ="Vegetables" />
    <hr></hr>
    
    {/* <UserGreeting isLoggedIn ={true} username = "Thejan"/> */}
    <Student name="Thejan" age = {30} isStudent={true} />
    <p></p>
    <Student name = "Sandeepana" age = {21} isStudent = {false}/>
    
    <Footer/>
    
    </>
  );

  
}
