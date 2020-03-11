import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
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

    const playVideo = ({target}) => {
        target.play();
    };

    const pauseVideo = ({target}) => {
        target.currentTime = 0;
        target.pause();
    };

    const videoEnded = ({target}) => {
        target.currentTime = 0;
    };

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
        <div className={styles.personal}>
            <div className={styles.hero}>
                <div className="container">
                    <Link to="/about"className="back-button"><span/>Back</Link>
                    <div className={styles.infoCard}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.bracketsTop}/> 
                            <div className={styles.image}>
                                <video src={video} className={styles.video}
                                       onMouseEnter={playVideo}
                                       onMouseLeave={pauseVideo}
                                       onEnded={videoEnded}/>
                            </div>
                            <div className={styles.bracketsBottom}/> 
                        </div>
                        <div className={styles.infoTable}>
                            <div className={styles.infoTitle}>
                                <p className={styles.character}>{character}</p>
                                <p className={styles.role}>{role}</p>
                                <p className={styles.actor}>{`${name} ${surname}`}</p>
                            </div>
                            <div className={styles.table}>
                                <div className={styles.row}>
                                    <div className={styles.halfColumn}>
                                        <div className={styles.tdHeader}>Height:</div>
                                        <div className={styles.tdCell}>{`${height} cm`}</div>
                                    </div>
                                    <div className={styles.halfColumn}>
                                        <div className={styles.tdHeader}>Weight:</div>
                                        <div className={styles.tdCell}>{`${weight} lbs`}</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.halfColumn}>
                                        <div className={styles.tdHeader}>Hair color: </div>
                                        <div className={styles.tdCell}>{hair}</div>
                                    </div>
                                    <div className={styles.halfColumn}>
                                        <div className={styles.tdHeader}>Eye color:</div>
                                        <div className={styles.tdCell}>{eyes}</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column}>
                                        <div className={styles.tdHeader}>Other identifying data:</div>
                                        <div className={styles.tdCell}>{other}</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column}>
                                        <div className={styles.tdHeader}>Identification no.:</div>
                                        <div className={styles.tdCell}>{indent}</div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column}>
                                        <div className={styles.tdHeader}>Related links:</div>
                                        <div className={styles.tdCell}>
                                            <a href={`${github}`} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                                            <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.link}>Linkedin</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

     
            {member.name === 'Aleksandr' ? (
                <p>Your additional component will be here</p>
            ): null}
        </div>
    )
}

export default PersonInfo;