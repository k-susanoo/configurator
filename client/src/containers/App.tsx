import React from "react";
import Title from "../components/Title";
import PhaseSteps from "../components/PhaseSteps";
import PhaseContent from "../components/PhaseContent";
import { Step } from "../components/PhaseSteps";
import { streams } from "./streams";

import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

type AppProps = {
  phases: Step[];
  addPhase: () => void;
  setPhase: (idx: number) => void;
  updatePhase: (id: string, value: number) => void;
};

class App extends React.Component<AppProps> {
  render() {
    const selectedPhase = this.props.phases.filter(e => e.selected === true)[0];
    return (
      <Grid container style={{ padding: "5em 0em" }}>
        <Title />
        <Grid.Row>
          <Grid.Column width={3}>
            <PhaseSteps
              steps={this.props.phases}
              addPhase={this.props.addPhase}
              setPhase={this.props.setPhase}
            />
          </Grid.Column>
          <Grid.Column width={13}>
            <PhaseContent
              streams={streams}
              streamValues={selectedPhase.streamsValues}
              updatePhase={this.props.updatePhase}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    phases: state.phases
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPhase: () => dispatch({ type: "ADD_PHASE" }),
    setPhase: (id: number) => dispatch({ type: "SET_PHASE", selected: id }),
    updatePhase: (id: string, value: number) =>
      dispatch({
        type: "UPDATE_PHASE",
        id: id,
        value: value
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
