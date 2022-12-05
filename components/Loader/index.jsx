'use client';

import { useState, CSSProperties } from 'react';

import { ClipLoader } from 'react-spinners';
import './loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <ClipLoader loading />
    </div>
  );
}
