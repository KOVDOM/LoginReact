ReactDOM.render(React.createElement(App), document.getElementById("app-container"));

function App(){
    const [isActive, setActive]=React.useState(false);
    return React.createElement(
        "div",
        {
            className: 'border'
        },
        'Login app',
        React.createElement(BoxComponent, {isActive: isActive}),
        React.createElement(ButtonComponent, {isActive: isActive, setActive: setActive}),
        "App szintű state: " + (isActive ? "Aktív" : "Inaktív")
    );
}

function ButtonComponent({isActive, setActive}){    
    return React.createElement('div',{
        style: {
            width:"200px",
            height: "200px",
        },
        className: "p-2 m-5 border rounded",
    },
    React.createElement(
        "input",
        {
            type: "text",
            id: "user",
            className: "Login",
        },
    ),
    React.createElement(
        "input",
        {
            type: "password",
            id: "passW",
            className: "Password",
        },
    ),
    React.createElement(
        "button",
        {
            className: "btn bg-primary m-2",
            onClick: ()=>{                
                const user=document.getElementById('user').value;
                const passW=document.getElementById('passW').value;
                console.log(user);
                console.log(passW);
                if(user=="abc" && passW=="123")
                {
                    setActive(true);
                    alert("Sikeres bejelnetkezés!");
                }                
                else if(user!="abc" || passW!="123")
                {
                    setActive(false);
                    alert("Sikertelen bejelentkezés");
                }
            }
        },
        "Küldés"
    ),
    );
}

function BoxComponent(props){    
    return React.createElement("div",
    {
        style: {
            width:"200px",
            height: "200px",
            backgroundColor: props.isActive ? "green" : "firebrick"
        },
        className: "p-2 m-5 rounded",
    },
    props.isActive ? "Aktív" : "Inaktív");
}