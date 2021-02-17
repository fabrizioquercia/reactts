import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'reactstrap';

type LoaderTypes = {
    message?: string
}

function Loader(tipi:LoaderTypes) {
    return (
        <p >
            <Alert className="btn-info">
                <em>Aspetta n'attimo che sto a caricà la pippa eh...<br />te faccio girà le palle 5 secondi!</em>
            </Alert>
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fa-1x" />&nbsp;&nbsp;<em>{tipi?.message}</em>
        </p>
    ) 
};

export default Loader;