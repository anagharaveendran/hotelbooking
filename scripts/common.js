let headerTemplate = `<a href="index.html">
                    <div id="logoImg">
                        <img src="assests/images/logo.png" id="logo" alt="logo"/>
                    </div>
                    </a>
                    <div id="loginLink">
                    <input type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#loginModal" id="loginButton" value="LOGIN"></button>
                    <input type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#logoutModal" id="logoutButton" value="LOGOUT" style="display:none;" onclick="userLogout()"></button>


                    </div>`;
document.getElementById("topHeader").innerHTML = headerTemplate;

let footerTemplate = `<div class="contactDiv">
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#contactModal" style="color: #fff;">Contact Us</button>
                        </div>
           
                        <div class="social_icons">
                        <a href="https://www.facebook.com/" target="_blank"><img src="assests/images/facebook.png" class="social_icon"></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="assests/images/instagram.png" class="social_icon"></a>
                        <a href="https://twitter.com/" target="_blank"><img src="assests/images/twitter.png" class="social_icon"></a>
                        </div>

                        <div class="copyDiv">
                        <p id="copy">&copy; 2020 ROOM SEARCH PVT.LTD</p>
                        </div>`;
document.getElementById("bootomFooter").innerHTML = footerTemplate;


    let logintemplate = 

               ` <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="index.html" method="GET">
                            <div class="form-group row">
                            <label for="username" class="col-sm-4 col-form-label">Username:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="username" placeholder="Enter Username">
                            </div>
                            </div>
                            <div class="form-group row">
                            <label for="password" class="col-sm-4 col-form-label">Password:</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="password" placeholder="Enter Password">
                            </div>
                            </div>
                        
                    </div>
                    <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" style="margin:0 auto;" onclick="userLogin()">Login</button>
                    </form>
                    </div>
                </div>
                </div>
            
            `;
    document.getElementById('loginModal').innerHTML += logintemplate;
   
    let buttonLogin = document.getElementById("loginButton");
    let buttonLogout = document.getElementById("logoutButton");
    if(sessionStorage.isLogin) {
    
        buttonLogin.style.display = "none";
        buttonLogout.style.display = "flex";
    } 
    

    function userLogin() {
        debugger;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
    
        if(username === 'admin' && password === 'admin') {
            alert("Successfully loggedin");
            sessionStorage.username = 'admin';
            sessionStorage.isLogin = true;
            buttonLogin.style.display = "none";
            buttonLogout.style.display = "flex";
            document.getElementById("payNowButton").disabled = false;
        } 
    }
    
function userLogout(){
    sessionStorage = " ";
    sessionStorage.isLogin = false;
    buttonLogin.style.display = "flex";
    buttonLogout.style.display = "none";
    document.getElementById("payNowButton").disabled = true;


}
