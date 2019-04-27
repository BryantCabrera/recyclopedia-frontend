import React, { Component } from 'react';
import logo from './logo.svg';
import TrashScan from './components/TrashScan/TrashScan';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Landing from './components/Landing/Landing'
import Profile from './components/Profile/Profile'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
    state = {
        loggedUser: {}
    }


    doLogInUser = async (user) => {
        try {
            const loginResponse = await fetch(
                `${process.env.REACT_APP_API_URL}/auth/login`,
                {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText);
            }

            const parsedResponse = await loginResponse.json();
            if (parsedResponse.message === "login successful") {
                //Resets this component's state if a use was successfully logged in
                this.setState({
                    loggedUser: parsedResponse.data
                });

                this.props.history.push(`/profile`);
            } else {
                this.setState({
                    loginError: parsedResponse.message
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    doLogoutUser = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`)

            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                console.log(response)
            }

            const deletedSession = await response.json();
            this.setState({
                loggedUser: deletedSession.user || {}
            })

            this.props.history.push('/')
        }
        catch (err) {
            console.log(err);
            console.log('hitting');
        }
    }

    doDeleteUser = async () => {
        try {
            const deletedUser = await fetch(`${process.env.REACT_APP_API_URL}/creators/${this.state.loggedUser._id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            if (!deletedUser.ok) {
                throw Error(deletedUser.statusText);
            }
            // const parsedDeletedResponse = await deletedUser.json();

            this.setState({
                loggedUser: {}
            });

            this.props.history.push('/');
        } catch (err) {
            console.log(err)
        }
    }

    doEditUser = async (editUserInfo) => {
        try {
            const editedUser = await fetch(`${process.env.REACT_APP_API_URL}/creators/${this.state.loggedUser._id}`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(editUserInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!editedUser.ok) {
                throw Error(editedUser.statusText);
            }

            const parsedResponse = await editedUser.json();
            this.setState({
                loggedUser: parsedResponse.data
            });
            this.props.history.push(`/profile`);
            console.log(parsedResponse, 'mom updated')

        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <div className="App">
                <NavBar loggedUser={this.state.loggedUser} doLogoutUser={this.doLogoutUser}/>
                <Switch>
                    <Route exact path="/" component={() => <Landing loggedUser={this.state.loggedUser} />} />
                    <Route exact path="/login" component={(...props) => <Login doLogInUser={this.doLogInUser} />} />
                    <Route exact path="/register" component={() => <Register />} />
                    <Route exact path="/profile" component={() => <Profile />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
