import React from 'react';
import styles from '../../styles/components/InformationSection.module.css';

interface InformationSectionProps {
    title: string;
    description: string;
    image: string;
    toRight: boolean;
}

const InformationSection: React.FC<InformationSectionProps> = ({
    title,
    description,
    image,
    toRight,
}) => {
    return (
        <>
            {toRight ? (
                <section className={'mt-5 w-75 h-100'}>
                    <div className='d-flex flex-row align-items-center justify-content-around flex-wrap'>
                        <div className={styles.sectionInformation}>
                            <h2 className={styles.sectionTitle}>{title}</h2>
                            <p className={styles.sectionDescription}>
                                {description}
                            </p>
                        </div>
                        <img src={image} />
                    </div>
                </section>
            ) : (
                <section className={'mt-5 w-75 h-100'}>
                    <div className='d-flex flex-row align-items-center justify-content-around flex-wrap'>
                        <img src={image} />
                        <div className={styles.sectionInformation}>
                            <h2 className={styles.sectionTitle}>{title}</h2>
                            <p className={styles.sectionDescription}>
                                {description}
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default InformationSection;
