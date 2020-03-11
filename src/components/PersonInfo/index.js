import React from 'react';
import { useRouteMatch } from 'react-router';
import { team } from '../../team';
import RomanInfo from './RomanInfo';

function PersonInfo() {
    const { params } = useRouteMatch();
    const id = params.id;
    const member = team.find(member => member.id === id);

    return(
        <div>
            PersonInfo
            {member.name}
            <RomanInfo />
        </div>
    )
}

export default PersonInfo;