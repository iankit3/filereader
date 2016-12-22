import React from 'react'

class Sidebar extends React.Component {
    render () {
        return (
            <div className="col-md-2 sidebar" style={{"padding": "0"}}>
               <ul className="brand_logo">
                   Brand
               </ul>
               <ul className="client_logo">
                   ADMIN
               </ul>
                <ul className="nav nav-sidebar">
                    <li>
                     <a href="#">
                      <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                      Home</a>
                    </li>
                    <li>
                      <a href="#">
                      <span className="glyphicon glyphicon-tags" aria-hidden="true"></span>
                      Anchors</a>
                     </li>
                    <li className="active">
                      <a href="#">
                      <span className="glyphicon glyphicon-compressed" aria-hidden="true"></span>
                      Suppliers</a>
                    </li>
                    <li>
                      <a href="#">
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                      Profile</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar
