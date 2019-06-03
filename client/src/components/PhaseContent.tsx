import React from "react";
import { Card } from "semantic-ui-react";
import StreamsForm from "./StreamsForm";
export type Stream = {
  id: string;
  type: string;
  name: string;
  groupName: string;
  unit: string;
  max: number;
  min: number;
  default: number;
};

export type StreamValue = {
  id: string;
  value: string;
};

export type PhaseStepsProps = {
  streams: Stream[];
  streamValues: StreamValue[];
  updatePhase: (id: string, value: number) => void;
};
type GroupType = {
  [key: string]: Stream[];
};

const PhaseContent: React.FC<PhaseStepsProps> = data => {
  const downStreams = data.streams.filter(e => e.type === "downstream");
  let groups: GroupType = {};
  downStreams.forEach(strm => {
    if (groups[strm.groupName] === undefined) {
      groups[strm.groupName] = [strm];
    } else {
      groups[strm.groupName].push(strm);
    }
  });
  return (
    <Card.Group>
      {Object.keys(groups).map((g, index) => {
        return (
          <Card key={index}>
            <Card.Content>
              <Card.Header>{g}</Card.Header>
              <Card.Description>
                <StreamsForm
                  streams={groups[g]}
                  streamValues={data.streamValues}
                  updatePhase={data.updatePhase}
                />
              </Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default PhaseContent;
