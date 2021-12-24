import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SocialIcon } from 'react-social-icons';

function App() {
  let [text, setText] = useState("");
  const _handleText = (e) => {
    let processedText = e.target.value.replace(/\n/g, ",").replace(/\s/g, ",");
    navigator.clipboard.writeText(processedText);
    setText(processedText);
    if (processedText) {
      toast.success("Text copied!", {
        position: "bottom-center"
      })
    }
  }

  return (
    <div className="App">
      <Typography variant="h6" style={{ marginTop: 10 }} component="div">
        Text-Convert-Text
      </Typography>
      <Typography sx={{ fontSize: 14 }} style={{ marginBottom: 15 }} color="text.secondary" gutterBottom>
        This online tool only replace blank spaces to comma 😉
      </Typography>
      <header className="App-header">
        <Box style={{ marginTop: 5 }}>
          <TextField
            style={{ padding: 10, width: 500 }}
            id="outlined-multiline-static"
            variant="filled"
            color="info"
            onChange={_handleText}
            rows={15}
            multiline
          />
          <TextField
            style={{ padding: 10, width: 500 }}
            id="outlined-multiline-static"
            variant="filled"
            rows={15}
            color="success"
            value={text}
            multiline
          />
        </Box>
        <div style={{ marginTop: 10 }}>
          <SocialIcon style={{ marginRight: 10 }} url="https://www.linkedin.com/in/jayesh-wadibhasme-716845130" />
          <SocialIcon style={{ marginRight: 10 }} url="https://github.com/gigabytejayesh" />
          <SocialIcon style={{ marginRight: 10 }} url="https://www.instagram.com/__i_m_jayesh_w__/" />
        </div>
        <Typography sx={{ fontSize: 14 }} style={{ marginTop: 10 }} color="text.secondary" gutterBottom>
          Let's catchup socially! 🙌
        </Typography>
      </header>
      <Toaster />
      <footer></footer>
    </div>
  );
}

export default App;
