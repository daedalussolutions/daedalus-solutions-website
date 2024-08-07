import * as React from "react";
import { SocialIcon } from 'react-social-icons'
 
function About() {
    return (
        <div className="About">
            <h3>
                The goal is to provide efficient, personable development for those who seek to break away from the bloated and oversaturated technological collective consciousness.
            </h3>

            <div className='social-media-icons'>
                <SocialIcon className='linkedin' bgColor="currentColor" fgColor="white" target="_blank" url="https://www.linkedin.com/in/dylan-cassell-" />
                <SocialIcon className='github' bgColor="currentColor" fgColor="white" target="_blank" url="https://github.com/daedalussolutions" />
                <SocialIcon className='twitter' bgColor="currentColor" fgColor="white" target="_blank" url="https://twitter.com/daedalussltns" />
            </div>

        </div>
    );
}

export default About;