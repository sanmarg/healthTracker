import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ChartsBar from './../ChartsBar';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  expansionPanelStyle: {
    margin: 11
  },
  progressColorWater: {
    backgroundColor: '#63c5e4',
    marginLeft: '19%',
    marginRight: '19%',
    marginBottom: '28px',
    marginTop: '19px',
    padding: '4px'
  }
})

class WaterGoalCard extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Typography variant="display1">Water Goal</Typography>
                  <Typography>
                    Drink at least 8 glasses of 8 fluid ounces each day.
                  </Typography>
                  <br />
                  <Paper className={classes.progressColorWater}>
                    <Typography align="center">
                      Current Progress: {this.props.glasses}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={this.props.addGlass}
                    value="1"
                    variant="outlined"
                    size="small"
                  >
                    +1 Glasses
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={this.props.addGlass}
                    value="3"
                    variant="outlined"
                    size="small"
                  >
                    +3 Glasses
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={this.props.addGlass}
                    value="6"
                    variant="outlined"
                    size="small"
                  >
                    +6 Glasses
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addGlasses"
                      label="Enter Water"
                      fullWidth
                      type="number"
                      margin="normal"
                      onChange={this.props.increment.bind()}
                    />
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={this.props.incrementGlass.bind()}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography className={classes.heading}>History</Typography>
              <ChartsBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

WaterGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WaterGoalCard);
