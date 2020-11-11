import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: '33%',
    backgroundColor: theme.palette.background.paper,
  },
  rootL: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ListView() {
  const classes = useStyles();

  return (
    <div className={classes.rootL}>
      <Grid container spacing={3}>
       <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
      </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
      </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
      </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List className={classes.root}>
            <ListItem>
         <ListItemAvatar>
           <Avatar>
            <ImageIcon />
          </Avatar>
         </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
          </Paper>
        </Grid>
        </Grid>
    </div>
  );
}