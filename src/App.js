import React, {  Component } from 'react';
class App extends Component {
        state = {
            isLoading: true,
            users: [],
            error: null
        };
        getFetchUsers() {
            this.setState({
                loading: true
            }, () => {
                fetch("/api/message").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    users: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchUsers();
        }
        render() {
            const {
                users,
                error
            } = this.state;
            return (
              <React.Fragment>
              <h1>All User</h1>
              {
                    error ? <p>
              {
                        error.message
                    } </p> : null}  {
                        users.map(user => {
                            const {
                                message
                            } = user;
                            return (
                            <div key={id}>
                                <p>Message: {message}</p>
                                <hr />
                            </div>
                            );
                        })
                    } </React.Fragment> );
            }
        }
export default App;