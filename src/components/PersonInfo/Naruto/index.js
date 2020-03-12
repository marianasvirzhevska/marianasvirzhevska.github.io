import React from "react";
import styles from './index.module.scss';

const NarutoInfo = () => {
    const skillset = [
        {label: 'Egoism', range: 101},
    ];

    const getRange = (range) => {
        const style = {};
        style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        style.height = (range*200)/100;
        return style
    };

    return (
        <div className={styles.root}>
        <div className="container">
            <h3 className={styles.subtitle}>Biography</h3>
            <div className={styles.content}>
                The richest man on the Earth99(the 99th clone of the original
                Earth). He is simply the heist of the multi-planet software giant
                “Macrohard”. Inexhaustible source of egoism and arrogance. His life
                is full of pleasures, parties and hangouts. Although he is brave and
                resolute, a person who can solve almost all of the problems on
                Earth99 he never thought about other people either their problems
                and needs. And now he is the one of chosen by Hyperion, the one who
                should save the universe, what is his role in this play? You will
                see.
            </div>
                <h3 className={styles.subtitle}>Inside of Naruto You can find </h3>
                    <div className={styles.dashboard}>
                        <div className={styles.skillItem}>
                            <div className={styles.range} style={getRange(skillset[0].range)}>
                    { skillset[0].range } %
            </div>
                        <div className={styles.label}> {skillset[0].label}
                    </div>
                </div>
            </div>
            <h3 className={styles.subtitle}>Other skills</h3>
            <div className={styles.skillItem}>
            <p className={styles.characterText}>Core skills:</p>
                        <p className={styles.characterText}>Primary: value the individual. Its not so hard for Naruto
unfortunately for others individual is himself.</p>
                        <p className={styles.characterText}>-- knowledge of computer games</p>
                        <p className={styles.characterText}>-- can party 24/7</p>
                        <p className={styles.characterText}>-- if he wants something he is unstoppable</p>
                        <p className={styles.characterText}>-- enormously lazy</p>
                    </div>
                </div>
        </div>
    );

};

export default NarutoInfo;