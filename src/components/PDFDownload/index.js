import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function PDFDownload(props) {
    return (
        <div className={styles.box}>
            <a target="\_blank" href={require('../../../static/pdf/mars-fud-bible.pdf').default}>
                <p className={styles.text}>Download PDF</p>
            </a>
        </div>
    );
}
