import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import './footer.css'

function Footer(props) {
  return (
    <div className='footer-div'>
      <div className='icons'>
      <a href='https://github.com/bw-dani' target="_blank" rel="noreferrer"><GitHubIcon fontSize='large'/></a>
      <a href='https://www.linkedin.com/in/danielle-broadwater/' target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large'/></a>
      <a href='https://drive.google.com/file/d/15Qe5t9dVP2vT4fIVfSrRCAU8WB31Fwcj/view?usp=sharing' target="_blank" rel="noreferrer"><DescriptionIcon fontSize='large'/></a>
      </div>
    </div>
  );
}

export default Footer;