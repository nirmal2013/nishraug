import React from 'react';
const Login = () => {

	return Object.assign({}, React.Component.prototype, {

		componentWillMount() {
			this.state = {};
		},

		render() {

			return <div>
      <div className="container">
        <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required></input>

        <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input>

        <button type="submit">Login</button>

        </div>
				</div>;
		}

	});

};

Login.propTypes = {
	store: React.PropTypes.object
};

export default Login;
