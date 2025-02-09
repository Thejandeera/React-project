import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './list.jsx'
import Button2 from './Button2.jsx'
import Profilepicture from './Profilepicture.jsx'
import MyComponent from './Mycomponent.jsx'
import Counter from './Counter.jsx'
import Onchange from './Onchange.jsx'
import Colorpicker from './Colorpiker.jsx'
import Mycomponent2 from './Mycomponent2.jsx'
import Updatearray from './Updatearray.jsx'
import ToDoList from './ToDOList.jsx'
import UseEffect from './UseEffect.jsx'
import Width from './Width.jsx'
import DigitalClock from './DigitalClock.jsx'
import ComponentA from './ComponentA.jsx'


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
    {/* <List items={fruits} category ="fruits" />
    <List items={Vegetables} category ="Vegetables" /> */}
    <hr></hr>
    <Button2></Button2>
    <hr></hr>
    <Profilepicture/>
    <MyComponent/>
    <Counter/>
    <Onchange/>
    <hr></hr>
    <Colorpicker/>
    <hr></hr>
    <Mycomponent2/>
    <br/>
    <Updatearray/>
    <br></br>
    <hr></hr>
    <br/>
    <ToDoList/>
    <br/>
    <hr></hr>
    <UseEffect/>
    <Width/>
    <hr/>
    <DigitalClock/>
    <br/>
    <ComponentA/>
    <hr/>
    
    {/* <UserGreeting isLoggedIn ={true} username = "Thejan"/> */}
    <Student name="Thejan" age = {30} isStudent={true} />
    <p></p>
    <Student name = "Sandeepana" age = {21} isStudent = {false}/>
    
    <Footer/>
    
    </>
  );

  
}
