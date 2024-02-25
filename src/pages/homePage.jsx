import { Link } from "react-router-dom";
import BreadCrumb from "../components/breadcrumb";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <Navbar />
        </div>
      </div>

      <br />

      <BreadCrumb subPage="Dashboard" />

      <br />
      <br />

      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">50 Total Registered Users</h5>
              <p class="card-text">Go to the User page for managing skills</p>

              <Link to={`/users`} class="btn btn-primary">
                Users
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">10 Total Skills</h5>
              <p class="card-text">go to the skills page for managing skills</p>
              <Link to={`/skills`} class="btn btn-primary">
                Manage Skills
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}