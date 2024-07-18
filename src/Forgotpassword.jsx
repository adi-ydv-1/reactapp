import Form from "./Login"
import Dropdown from "react-bootstrap/Dropdown";
function Forgotpassword() {
    return (
        <div class="center-container">
            <div class="center-container">
                <form class="container">
                    <div class="form-group">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">New Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="new password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default Forgotpassword;