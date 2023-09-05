import React, { useState, useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const SuccessMessage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-12 text-green-500 font-extrabold text-3xl">
            <p>Message sent successfully!</p>
            <BsCheckCircleFill size={80} />
        </div>
    );
};

export default SuccessMessage;
