const div = function(s, ...v){
    console.log(s,v);

    return function(props){
        return '<div></div>';
    }
}

const StyledDiv = div`
    const: ${(props)=>{props.color ? props.color : '#111'}};
    font-size : 20px;
    font-weight: bold;
`;