import React from 'react';

export default (props) => (
    <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      {/*<!-- Title -->*/}
      <span className="mdl-layout-title">{props.title}</span>
      {/*<!-- Add spacer, to align navigation to the right -->*/}
      <div className="mdl-layout-spacer"></div>
      {/*<!-- Navigation. We hide it in small screens. -->*/}
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <a className="mdl-navigation__link" href="#">Link</a>
        <a className="mdl-navigation__link" href="#">Link</a>
        <a className="mdl-navigation__link" href="#">Link</a>
        <a className="mdl-navigation__link" href="#">Link</a>
      </nav>
    </div>
  </header>
);