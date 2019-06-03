import React from "react";
import { Step, Button } from "semantic-ui-react";
import { StreamValue } from "./PhaseContent";

export type Step = {
  id: number;
  name: string;
  selected: boolean;
  streamsValues: StreamValue[];
};

export type PhaseStepsProps = {
  steps: Step[];
  addPhase: () => void;
  setPhase: (idx: number) => void;
};

const PhaseSteps: React.FC<PhaseStepsProps> = data => {
  return (
    <React.Fragment>
      <Step.Group vertical>
        {data.steps !== undefined &&
          data.steps.map((step: Step, index: number) => {
            return (
              <Step
                key={step.id}
                active={step.selected}
                onClick={() => data.setPhase(step.id)}
              >
                <Step.Content>
                  <Step.Title>{step.name}</Step.Title>
                </Step.Content>
              </Step>
            );
          })}
      </Step.Group>
      <br />
      <Button circular color="facebook" icon="plus" onClick={data.addPhase} />
    </React.Fragment>
  );
};

export default PhaseSteps;
