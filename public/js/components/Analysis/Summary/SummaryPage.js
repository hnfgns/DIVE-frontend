import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-react-router';
import styles from '../Analysis.sass';

import SummarySidebar from './SummarySidebar';
import SummaryView from './SummaryView';

export class SummaryPage extends Component {
  render() {
    return (
      <div className={ `${ styles.fillContainer } ${ styles.summaryContainer }` }>
        <SummarySidebar />
        <SummaryView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { pushState })(SummaryPage);