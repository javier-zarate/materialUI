import React from 'react';
import { Toolbar, AppBar } from '@material-ui/core';

export default function Header(props) {
  return (
    <AppBar position="fixed">
      <Toolbar>Arc Development</Toolbar>
    </AppBar>
  )
}

/**
 * Component notes: 
 * Toolbar: helps content to stack horizontally. without it would stack content vertically. 
 * Appbar: position is fixed by default
 */