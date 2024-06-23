function Profilepicture (){
    const imageUrl =`./src/assets/my.jpg`;
    const handleClick = (e) => e.target.style.display ="none" ;
    return(<img onClick={(e) => handleClick(e)} className="Prifilepicture-image" src={imageUrl}></img>);
}
export default Profilepicture