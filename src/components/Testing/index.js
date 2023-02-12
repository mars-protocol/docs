
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import TermsofServiceUrl from '@site/static/pdf/mars-tos.pdf#toolbar=0'

function OpenTermsOfUsePopup() {
    $('#iframeTou').attr('src', "../../../static/pdf/mars-tos.pdf");
    $('#divTermsOfUse').modal("show");
    return false;
}

export default function Testing(props) {
    return (
        <iframe id="iframeTou" style={{ width: '100%', minHeight: 600 }} />
    );
}






