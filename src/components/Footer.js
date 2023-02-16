

function Footer(props){
    return(
        <footer style={{marginTop: "60px"}}>
        {props.empty ? <p style={{color: props.mode ? "black" : "white" }}>Add a todo</p> : <p style={{color: props.mode ? "black" : "white" }}>Drag and drop to record list</p> }
        </footer>
    )
}

export default Footer