import {Grid, Anchor} from '@mantine/core'

function Navbar(){
    return (
      <Grid h={80} justify="flex-end">
        <Grid.Col span={3}>
          <Anchor>Projects</Anchor>
        </Grid.Col>
        <Grid.Col span={3}>
          <Anchor>Projects</Anchor>
        </Grid.Col>
        <Grid.Col span={3}>
          <Anchor>Projects</Anchor>
        </Grid.Col>
      </Grid>
    );
}

export default Navbar;