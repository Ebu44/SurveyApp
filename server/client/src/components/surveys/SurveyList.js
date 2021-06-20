import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderContent() {
    return this.props.surveys.map((surveys) => {
      return (
        <div className="card darken-1" key={surveys.id}>
          <div className="card-content">
            <span className="card-title">{surveys.title}</span>
            <p>{surveys.body}</p>
            <p className="right">
              Sent on: {new Date(surveys.dataSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {surveys.yes}</a>
            <a>No : {surveys.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
