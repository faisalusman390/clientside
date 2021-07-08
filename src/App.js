import React from 'react'
import Layout from './components/Layouts/Layout';
import { AuthProvider } from './context/apiContext';
const App = () => {
  return (
    <Layout>
      <div className="col-md-6 offset-md-3 text-center">
                <h1 className="p-5">React Node MongoDB Authentication</h1>
                <h2>MERN STACK</h2>
                <hr />
                <p className="lead">
                    MERN stack login register system with account activation, forgot password, reset password, user and users
                    with the role of admin.
                </p>
            </div>
    </Layout>
  )
}

export default App;
