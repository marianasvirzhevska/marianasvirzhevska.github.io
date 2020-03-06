import React from 'react';
import ListItem from './ListItem';
import { team } from '../../team'

function About (){
    return (
        <div>
            About page
            {/*main block*/}
            {/*persons list */}
            {/*List item as react component*/}
            <ul>
                {team.map((member, i) => {
                    return(
                        <ListItem
                            key={i}
                            member={member}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default About;