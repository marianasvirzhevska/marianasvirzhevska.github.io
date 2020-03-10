import React from "react";
import styles from "./index.module.scss";

var animatedBoxes = [...Array(7).keys()];

function KateInfo() {
    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.container}`}>
                <p className={styles.paragraph}>
                    Ashley Greene is 20 and she lives on the planet Zhytomberd.
                    Ashley is studying at the university and wants to be an
                    outstanding writer.
                </p>
                <p className={styles.paragraph}>
                    The girl is used to be the center of attention in every
                    aspect of life. She read poems at all kindergarten matinees
                    and became Miss School in 3328.
                </p>
                <p className={styles.paragraph}>
                    Ashley likes listen to Indie rock, read detective stories
                    and hang out with her friends. You may be surprised but this
                    girl has been breakdancing for almost three years and also
                    attended a beadwork club.
                </p>
                <p className={styles.paragraph}>
                    Ashley began to write books when she was 17 years old. First
                    book was started when she suddenly woke up with an idea for
                    story called ‘Three-digit number’.
                </p>
                <p className={styles.paragraph}>
                    Her dream was to go on an intergalactic flight to spend a
                    year in the another world, and then return to Zhytomberd,
                    finding herself in the future 250 years later, writing a
                    book about the greatest journey in her life. But Ashley's
                    plan was interrupted by message from Hyperion. Who knows
                    maybe the book will turn out even better than planned.
                </p>
                <p className={styles.paragraph}>
                    Core skills: Primary: focus on the audience. Since Ashley is
                    used to be the center of attention she knows, if the
                    audience is pleasured you will be treated right --
                    incredible memory -- she can become the center of attention
                    in any situation -- play with all kinds of instruments -- at
                    first she DOES, then she thinks.
                </p>
                <ul className={styles.box_area}>
                    {animatedBoxes.map(el => (
                        <li>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default KateInfo;
