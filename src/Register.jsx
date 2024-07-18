function Register() {
    return (
        <div class="center-container">
            <form class="container">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="role">Role :</label>
                    <select id="role" custom>
                        <option value="1">user</option>
                        <option value="2">admin</option>
                        </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Id</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="user id" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default Register;