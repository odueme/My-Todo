

function ActiveTab(props){

    return(
            <p 
            className= {props.isPressed ? "active" : "not"} 
            onClick={() =>props.setFilter(props.name)}
            style={{cursor: "pointer"}}
            >
            {props.name}
            </p>
    )
}

export default ActiveTab