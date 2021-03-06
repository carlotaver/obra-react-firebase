import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import SectionTitle from "./SectionTitle";
import SectionEvents from "./SectionEvents";
import Footer from "./Footer";

class Avisos extends React.Component {
  static propTypes = {
    notifications: PropTypes.shape({
      title: PropTypes.string.isRequired,
      events: PropTypes.object.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <SectionTitle title={this.props.notifications.title} />
        <SectionEvents events={this.props.notifications.events} />
        <Footer />
      </div>
    );
  }
}

export default Avisos;
