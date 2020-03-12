import React from "react";
import styles from './index.module.scss';

const LamiaInfo = () => {
    const skillset = [
        {label: 'Intellect', range: 78},
        {label: 'Negotiate', range: 17},
        {label: 'Empathy', range: 88},
        {label: 'Emotions', range: 45},
        {label: 'Flexibility', range: 78},
    ];

    const getRange = (range) => {
        const style = {};
        if (range < 20){
            style.backgroundColor = 'rgba(244, 56, 54, 0.5)';
        }
        if (range > 80){
            style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        }

        style.height = (range*200)/100;

        return style
    };


    return (
        <div className={styles.root}>
            <div className="container">
                <h3 className={styles.subtitle}>Biography</h3>
                <div className={styles.alert}><span>Spoiler alert!</span> The section(s) below are <span>major spoilers.</span></div>
                <div className={styles.content}>
                    She's from Lusus, a world that has gravity 2 times stronger than that of Earth. She is the the daughter of belated Senator Byron Lamia.
                    After his apparent suicide Brawne became a private investigator. Reasons of the suicide were unclear moreover
                    investigation on that case was quick and prejudiced like Brawne discovered later.
                </div>
                <div className={styles.content}>
                    From that time she understood two things: first, she hates politics, second, she may only belive herself.
                    Brawne is a kind of private person who doesn’t want to talk much and share her feeling, you never know what thoughts is on her mind, mystery girl, to admit she is strong willed and confident, also she is great leader but at least now she doesn’t know it yet.
                </div>
                <h3 className={styles.subtitle}>Skills set</h3>
                <div className={styles.dashboard}>
                    {
                        skillset.map((item, i) => {
                            return (
                                <div className={styles.skillItem} key={i}>
                                    <div className={styles.range} style={getRange(item.range)}>{item.range} %</div>
                                    <div className={styles.label}>{item.label}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

};

export default LamiaInfo;