"use client";

import { useState, CSSProperties } from "react";

import {FadeLoader} from 'react-spinners';
import './loader.scss'

export default function Loader() {
    return (
        <div className="loader">
            <FadeLoader color="#26ffbf" loading />
        </div>
    )
}