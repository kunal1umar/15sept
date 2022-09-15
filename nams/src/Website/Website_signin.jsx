import "./Style/Website_signin.css";
import logo_img from "./Images/bg.jpg";
function Website_signin() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 col-md-5 d-none d-md-block image-container"></div>

                <div class="col-lg-7 col-md-7 form-container">
                    <div class="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                        <div class="logo mb-3">
                            <img src={logo_img} width="100px" />
                        </div>
                        <div class="heading mb-4">
                            <p class="display-5 text-light"><b>Welcome Back,</b> Please login to your account.</p>
                        </div>
                        <form>
                            <input class="form-control form-control-sm mb-4" type="email" placeholder="username@domain.com" />
                            <input class="form-control form-control-sm mb-4" type="password" placeholder="password" />
                            <input type="submit" class="btn btn-sm btn-outline-light w-50 mt-2" value="Login" />

                        </form>
                        <div class="strike mt-4 mb-4">
                            <span class="text-light">OR</span>
                        </div>
                        <form>
                        <input type="submit" class="btn btn-sm btn-outline-light w-50 mt-2" value="Register here" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Website_signin };