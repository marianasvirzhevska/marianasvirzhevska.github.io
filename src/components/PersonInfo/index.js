import React from 'react';
import { useRouteMatch } from 'react-router';
import { team } from '../../team';
import KateInfo from './KateInfo';
// import RomanInfo from './RomanInfo';

function PersonInfo() {
    const { params } = useRouteMatch();
    const id = params.id;
    const member = team.find(member => member.id === id);

    if (member.page) {
        return (
            <>
                Put your personalize page here
                {/*<RomanInfo />*/}
            </>
        )
    }

    return(
        <div>
            <h2>PersonInfo</h2>
            <p>{member.name}</p>
            {/* According to the Figma layout */}


            {/* How to add your own component to existing layout? */}
            {member.name === 'Aleksandr' ? (
                <p>Your additional component will be here</p>
            ): null}

            {member.name === 'Kateryna' ? (
                <KateInfo/>
            ): null}
        </div>
    )
}

export default PersonInfo;