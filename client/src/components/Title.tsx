import React from "react";
import { Grid, Header } from "semantic-ui-react";

const Title: React.FC = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header as="h1" dividing>
          Phase Builder
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Title;
