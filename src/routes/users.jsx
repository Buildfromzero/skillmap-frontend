import UserList from "../components/userList";
import Navbar from "../components/navbar";
import CreateUser from "../components/userCreate";
import { Link } from "react-router-dom";

function UserPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <Navbar />
        </div>
      </div>

      <br />

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link
              to={`/home`}
              class="breadcrumb-item active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li class="breadcrumb-item active">Users</li>
        </ol>
      </nav>

      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <CreateUser />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <UserList />
        </div>
      </div>

      <br />
    </div>
  );
}

export default UserPage;
