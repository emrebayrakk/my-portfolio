import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    EnvelopeIcon,
    EnvelopeOpenIcon,
  } from "@heroicons/react/24/outline";
  import twitterico from '../img/x-twitter.svg';
  import linkedinico from '../img/linkedin.svg';
  import githubico from '../img/github.svg';
  import emailico from '../img/email.svg';
   
  export function SpeedDialCustomIcon() {
    return (
      <div>
        <div className="absolute bottom-10 right-5">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
                <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction>
              <a href="https://twitter.com/catcutd" rel="noreferrer" target="_blank"><img src={twitterico} alt="twitter" className="h-5 w-5"></img></a>
              </SpeedDialAction>
              <SpeedDialAction>
              <a href="https://www.linkedin.com/in/eemmrree/" rel="noreferrer" target="_blank"><img src={linkedinico} alt="linkedin" className="h-5 w-5"></img></a>
              </SpeedDialAction>
              <SpeedDialAction>
              <a href="https://github.com/emrebayrakk" rel="noreferrer" target="_blank"><img src={githubico} className="h-5 w-5" alt="github"></img></a>
              </SpeedDialAction>
              <SpeedDialAction>
              <a href="mailto:eemmrree0@outlook.com"><img src={emailico} className="h-5 w-5" alt="email"></img></a>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    );
  }
  export default SpeedDialCustomIcon;