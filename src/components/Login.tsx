import React from 'react';


function Login() {

    const userNameRef = React.useRef(null);
    const userEmailRef = React.useRef(null);
 


    const login= async ()=>{
        const userName = userNameRef.current;
        const userEmail = userEmailRef.current;
 
        //@ts-ignore
        document.cookie = `userName=${userName.value} userEmail=${userEmail.value}`

        var options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Cookie' : 'var1=test; var2=test',
                 'X-CSRF-Token' : '12345',
                 'Your-personal-data' : 'data goes here'
            }
        };

        fetch('http://localhost:3000/auth/login', options)
        
        
    //     {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'omit', // include, *same-origin, omit, same-origin
    // headers: {
    //   'Content-Type': 'application/json' //'application/x-www-form-urlencoded'
    // },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify('data') // body data type must match "Content-Type" header


    //         // credentials: 'omit', // I don't want to send my real cookies
    //         // headers: {
    //         //   'Set-Cookie': 'foo=bar'
    //         // },


    //         // // 'headers': {
    //         // //     'accept': '*/*',
    //         // //     'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //         // //     'cookie': '',
    //         // // },

    //         // 'body': 'username=foo&password=bar',
    //         // 'method': 'POST',
    //     });

        
            //  let response = fetch(`http://localhost:${3000}/auth/`,
            //     {
            //         headers: {
            //             cookie: 'accessToken=1234abc; userId=1234'
            //         }
            //     })
            // // return response.json();
            // console.log(response);
    }


    return (
        <div style={{marginTop: '100px'}}>
        <h1>Login</h1>
        <div style={{margin: '100px 20px 20px 20px'}}>
                <article>
                    <input ref={userNameRef} placeholder='enter name'/>
                    <br/>
                    <input ref={userEmailRef} placeholder='enter email'/>
                    <br/>
                    <button onClick={login}>sign in</button>
                </article>
             </div>
        </div>
    );
}



export default Login;






