function List (props){
    
    const category = props.category;
    const itemlist = props.items;
    // fruits.sort((a,b) =>a.name.localeCompare(b.name) ); //alphabetical
    // fruits.sort((a,b) =>b.name.localeCompare(a.name) ); //alphabetical
    // fruits.sort((a,b)=>a.calories - b.calories) // sort by calories
    // fruits.sort((a,b)=>b.calories - a.calories) // reverse sort by calories
    
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100 )
    
    const listitems = itemlist.map(item => <li key={item.id}>
                    {item.name}: &nbsp;
                    <b>{item.calories}</b>  </li>);

    // const listitems2 = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
    //                 {lowCalFruit.name}: &nbsp;
    //                 <b>{lowCalFruit.calories}</b>  </li>);

    
    return( <><h3>{category} </h3> <ol>{listitems }</ol></>)
    
}
export default List