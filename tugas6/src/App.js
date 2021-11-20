
import "./App.css";
import React from "react";
import "./css/bootstrap.min.css";
import Foto from "./Foto.jpg";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }
  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        className='btn btn-outline-primary'
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}>
        Login
      </button>
    ));
    const LogoutButton = withRouter(({ history }) => (
      <button
        className='btn btn-outline-primary'
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}>
        Logout
      </button>
    ));
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => (
          <div className='text-center container h1 text-success'>Home Page</div>
        ),
      },
      {
        path: "/login",
        render: () => (
          <div className='container text-center'>
            <h2 className='fw-bold'>Login</h2>
            <table className='table table-borderless text-start'>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-dark w-50'
                      type='text'
                      placeholder='Username'
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-dark w-50'
                      type='text'
                      placeholder='Password'
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <LoginButton />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div className='container text-center'>
              <h2 className='fw-bold'>Profile</h2>
              <table className='table table-borderless text-start'>
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>Ricky Virgilianto</td>
                  </tr>
                  <tr>
                    <td>Nim</td>
                    <td>:</td>
                    <td>18211132</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>Laki-Laki</td>
                  </tr>
                  <tr>
                    <td>Tempat Lahir</td>
                    <td>:</td>
                    <td>Medan</td>
                  </tr>
                  <tr>
                    <td>Foto Profil</td>
                    <td>:</td>
                    <td>
                      <img src={Foto} className='w-25 h-25 border border-2' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <LogoutButton />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          ) : (
            <Redirect to='/login' />
          ),
      },
    ];
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container'>
              <a className='navbar-brand' href='#'>
                Tugas
              </a>
              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <NavLink exact className='nav-link text-light' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/profile'
                      className='nav-link text-light'
                      activeClassName='active'>
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
