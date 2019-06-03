import React from "react";
import { Segment, Form } from "semantic-ui-react";
import { Stream, StreamValue, PhaseStepsProps } from "./PhaseContent";

type StreamFormProps = {
  streamValue: StreamValue;
  stream: Stream;
  handleInputChange: (id: string, val: number) => void;
};

type StreamFormState = {
  error: boolean;
  errorMsg: string;
};

class StreamForm extends React.Component<StreamFormProps, StreamFormState> {
  state = {
    error: false,
    errorMsg: ""
  };

  checkValue = (val: any) => {
    if (val.length === 0) {
      return { error: true, errorMsg: "value can't be empty" };
    }
    if (isNaN(val)) {
      return { error: true, errorMsg: "value can't be string" };
    }
    if (val > this.props.stream.max || val < this.props.stream.min) {
      return {
        error: true,
        errorMsg: `value out of bounderis [${this.props.stream.min} - ${
          this.props.stream.max
        }]`
      };
    }
    return { error: false, errorMsg: "" };
  };

  handleChange = (e: any) => {
    const result = this.checkValue(e.target.value);
    this.props.handleInputChange(this.props.streamValue.id, e.target.value);
    this.setState({ error: result.error, errorMsg: result.errorMsg });
  };
  componentDidUpdate() {
    const result = this.checkValue(this.props.streamValue.value);
    if (result.error !== this.state.error) {
      this.setState({ error: result.error, errorMsg: result.errorMsg });
    }
  }
  render() {
    return (
      <Segment>
        <Form>
          <Form.Input
            fluid
            label={`${this.props.stream.name} (${this.props.stream.unit})`}
            placeholder={this.props.stream.default}
            value={this.props.streamValue.value}
            onChange={this.handleChange}
            error={this.state.error}
          />
          <span
            style={{
              color: "blue",
              display: this.state.error ? "inline-block" : "none"
            }}
          >
            {this.state.errorMsg}
          </span>
        </Form>
      </Segment>
    );
  }
}

const StreamsForm: React.FC<PhaseStepsProps> = data => {
  return (
    <React.Fragment>
      {data.streams.map(e => {
        const sValue = data.streamValues.filter(v => e.id === v.id)[0];
        return (
          <StreamForm
            stream={e}
            key={e.id}
            streamValue={sValue}
            handleInputChange={data.updatePhase}
          />
        );
      })}
    </React.Fragment>
  );
};

export default StreamsForm;
