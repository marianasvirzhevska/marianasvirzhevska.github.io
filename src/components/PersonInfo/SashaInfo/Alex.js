import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Alex.module.scss';

function Main() {
    return (
        <>
            <div className={styles.main}>
                <div className={`container ${styles.relative}`}>
                    <Link to="/main" className="back-button">Back</Link>
                    <div className={styles.character}>
                        <div className={styles.characterWrapper}>
                            <div className={styles.characterPhoto}></div>
                        </div>
                        <div className={styles.characterWrapper}>
                            <h3 className={styles.characterName}>Alex Callisto</h3>
                            <p className={styles.characterOccupetion}>Scholar and professor</p>
                            <ul className={styles.characterAppearance}>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Height:</p>
                                    <p className={styles.characterDataValue}>180 cm</p>
                                </li>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Weight:</p>
                                    <p className={styles.characterDataValue}>180 lbs</p>
                                </li>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Hair color:</p>
                                    <p className={styles.characterDataValue}>Red</p>
                                </li>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Eye color:</p>
                                    <p className={styles.characterDataValue}>Gray</p>
                                </li>
                            </ul>
                            <p className={styles.characterDataProp}>Other identifying data:</p>
                            <p className={styles.characterDataValue}>Not available</p>
                            <p className={styles.characterDataProp}>Identification NO.:</p>
                            <p className={styles.characterDataValue}>P383011.AC.00.843</p>
                        </div>
                    </div>

                    <div className={styles.characterMainText}>
                        <p className={styles.characterText}>Dr. Alex Callisto obtained his
                            Ph.D. in the Department of Physics at the Bristol University.
                            Alex has served as a lead scientist for 25 years in the physics
                            and astrophysics sciences. However, what made Alex so interesting
                            as a scientist was his ability to keep his mind open to
                            possibilities that were in direct conflict with conventional
                            science. Dr. Alex conducted extensive and controversial experiments
                            in the fringe sciences, including invisibility via electro-magnetic
                            energy, creating human-robot hybrids and quantum teleportation.
                            Of course he is also able to use his great knowledge of science
                            to remedy the situation. Good problem solving skills are one
                            of the key aspects of a good scientist after all...</p>
                        <p className={styles.characterText}>Core skills:</p>
                        <p className={styles.characterText}>Primary: act with integrity.
                            Alex has a mind that can take a jumbled set of facts, techniques
                            and equipment, and condense that into a working analytical method.</p>
                        <p className={styles.characterText}>-- never fails, just finds ways that won’t work</p>
                        <p className={styles.characterText}>-- familiar with any kind of science</p>
                        <p className={styles.characterText}>-- 25 years in science made him pretty cold-blooded</p>
                        <p className={styles.characterText}>-- hates when kids messing with his inventions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;