function Button2(){
    let count = 0;
    const handleClick =()=> console.log("Ouch..!!");
    const handleClick2 = (name) => console.log(`${name} Stop Clicking me..!!`);
    const handleClick3 = (name) => {
        if (count < 3){
            count++
            console.log(`${name} click me ${count} `);
        }
        else{
            count++
            console.log(` ${name} Stop clicking me..!!${count} `)
        }
    };
    const handleClick4 = (e) => e.target.textContent = "Ouch..!";
    
return( <><button onClick={ handleClick()}  className="button2">Click me 1 </button>
 <button onClick={ () => handleClick2("Thejan")}  className="button2">Click me  </button>
 <button onClick={ () => handleClick3("Thejan")}  className="button2">Click me  </button>
 <button onClick={ (e) => handleClick4(e)}  className="button2">Click me  </button></>  )
}
export default Button2