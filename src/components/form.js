import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '100%',
      color: "red",
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#2D3C70',
      },
      '& label.Mui-focused': {
        color: '#2D3C70',
      },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="E-mail" />
      <TextField id="standard-basic" label="Topic" />
      <TextField    multiline
          rows={4} id="standard-basic" label="Message" />
      
    </form>
  );
}
