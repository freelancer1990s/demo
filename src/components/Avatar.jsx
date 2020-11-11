import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AvatarImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg" />
      
    </div>
  );
}