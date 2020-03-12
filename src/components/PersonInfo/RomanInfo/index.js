import React, {useState} from 'react'
import styles from './Roman.module.scss'

function RomanInfo(){

    const [openOne, setOpenOne] = useState(false)
    const [openTwo, setOpenTwo] = useState(false)
    const [openThree, setOpenThree] = useState(true)

    function toggleAccordionOne() {
        setOpenOne(!openOne);
    }

    function toggleAccordionTwo() {
        setOpenTwo(!openTwo);
    }

    function toggleAccordionThree() {
        setOpenThree(!openThree);
    }

    return(
    <div className={styles.container}>
        <div className={styles.containerAccordian}>  
        <article className={styles.accordian}>
            <div className={styles.accordian__card}>
                <div className={`${styles.accordian__header} ${openOne ? styles.black : styles.blue}`}  onClick={toggleAccordionOne}>
                    <h3 className={styles.accordian__header_title}>Biography</h3>
                </div>
                {
                    openOne ? (
                        <div className={styles.accordian__body}>
                        <p className={styles.accordian__body_p}>Christoff Amoscott is 33 years old.</p>
                        <p className={styles.accordian__body_p}>He was only child in a family. 
                                The family consisted of two people: his mother Mary and he. 
                                He never seen his father, 
                                because the father had loosed a contact with planets of their galaxy 
                                during important mission of intergalactic relationships. 
                                His mother had serious heart desease. 
                                When he was young, she died. He was stayed alone...</p>
                    </div> 
                    ) : null
                }
                
            </div>
        </article>

        <article className={styles.accordian}>
            <div className={styles.accordian__card}>
                <div className={`${styles.accordian__header} ${openTwo ? styles.black : styles.blue}`}  onClick={toggleAccordionTwo}>
                    <h3 className={styles.accordian__header_title}>Work</h3>
                </div>
                {
                    openTwo ? (
                        <div className={styles.accordian__body}>
                    <p className={styles.accordian__body_p}>When he was 27 years old, 
                            he graduated from Unic University and achieve speciality 
                            Master in Medical Information.</p>
                    <p className={styles.accordian__body_p}>Now he live in Luz. 
                            This is special planet for scientific workers, 
                            located in the secret area. 
                            Nobody from outside has no access.</p>
                    <p className={styles.accordian__body_p}>There are different kinds of engineering of human body. 
                            Christoff works in staff of Developing Syntetic Cardiovascular System Department. 
                            He develops a syntetic heart.</p>
                    <p className={styles.accordian__body_p}> It was a usual day, 
                            when the message from Hyperion was received... 
                            Can he help to Hyperion? 
                            Can he find his father? 
                            Everything depends on you!</p>
                </div>
                    ) : null
                }
                
            </div>
        </article>

        <article className={styles.accordian}>
            <div className={styles.accordian__card}>
                <div className={`${styles.accordian__header} ${openThree ? styles.black : styles.blue}`}  onClick={toggleAccordionThree}>
                    <h3 className={styles.accordian__header_title}>Skills</h3>
                </div>
                {
                    openThree ? (
                        <div className={styles.accordian__body}>
                    <p className={styles.accordian__body_p}>Core skills:</p>
                    <p className={styles.accordian__body_p}>Primary:</p>
                    <p className={styles.accordian__body_p}>Act as a team. Christoff is a good team player.</p>
                    <p className={styles.accordian__body_p}>--intelligent mind </p>
                    <p className={styles.accordian__body_p}>--creative decisions</p>
                    <p className={styles.accordian__body_p}>--manage time </p>
                    <p className={styles.accordian__body_p}>--always uses unclear scientific terms</p>
                </div>
                    ) : null
                }
                
            </div>    
        </article>
        </div>  
        
        <div className={styles.containerGallery}> 
        <article className={styles.accordian}>
            <div className={styles.accordian__card}>
                <div className={`${styles.accordian__header} ${styles.accordian__headerImage}`}>
                    <h3 className={styles.accordian__header_title}>Gallery</h3>
                </div>
                    <div className={styles.accordian__bodyImage}></div>
            </div>
        </article>
        </div>

        </div>
    )
};

export default RomanInfo;