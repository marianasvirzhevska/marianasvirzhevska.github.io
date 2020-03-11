import React from 'react';
import { useRouteMatch } from 'react-router';
import { team } from '../../team';
// import RomanInfo from './RomanInfo';
import styles from './index.module.scss';
import video from '../../assets/video/alex.mp4'
import Alex from './SashaInfo/Alex';

function PersonInfo() {
    const { params } = useRouteMatch();
    const id = params.id;
    const member = team.find(member => member.id === id);
    const { name, surname, role, character, details } = member;
    const { height, weight, hair, eyes, other, indent, linkedin, github } = details;

    if (member.page) {
        return (
            <>
                {/* Put your personalize page here */}
                {/*<RomanInfo />*/}
                <Alex member={member} details={details} />
            </>
        )
    }

    return(
        <div>
            PersonInfo
            {member.name}
        </div>
    )
}

export default PersonInfo;