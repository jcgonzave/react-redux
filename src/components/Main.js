import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AttendeesActions from '../actions'
import AddAttendee from './AddAttendee';
import Attendees from './Attendees';

class Main extends Component {
  componentDidMount() {
    this.props.addListAttendees();
  }

  render() {
    return (
            <div>
                <h1>Attendees</h1>
				<hr/>
        <AddAttendee addAttendee={this.props.addAttendee} toggleSort={this.props.toggleSort} />
				<hr/>
                <h2 className={this.props.loading ? 'show' : 'hide'}>Loading ...</h2>
        <Attendees data={this.props.attendees} removeAttendee={this.props.removeAttendee} />
			</div>
    )
  }
}

const mapStateToProps = state => state.attendeesReducer;


const mapDispatchToProps = dispatch => {
  return bindActionCreators(AttendeesActions, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
