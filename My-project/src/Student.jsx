function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>student: {props.isStudent ? "Yes" : "No" } </p>
        </div>
    );
    Student.prototypes = {
        
    }
}
export default Student