// PasswordStrength.tsx
import React from 'react';

interface PasswordStrengthProps {
    password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const criteria = [
        { regex: /.{8,}/, message: 'Minimálně 8 znaků', valid: password.length >= 8 },
        { regex: /[A-Z]/, message: 'Obsahuje alespoň jedno velké písmeno', valid: /[A-Z]/.test(password) },
        { regex: /\d/, message: 'Obsahuje alespoň jedno číslo', valid: /\d/.test(password) },
        { regex: /[!@#$%^&*._,/=?-]/, message: 'Obsahuje alespoň jeden speciální znak', valid: /[!@#$%^&*._,/=?-]/.test(password) },
    ];

    const validCriteria = criteria.filter(c => c.valid).length;
    let strength = '';

    if (validCriteria === 4) {
        strength = 'Silné';
    } else if (validCriteria === 3) {
        strength = 'Střední';
    } else {
        strength = 'Slabé';
    }

    const getStrengthColor = () => {
        if (strength === 'Silné') return 'green';
        if (strength === 'Střední') return 'orange';
        return 'red';
    };

    return (
        <div>
            <div style={{ width: '100%', height: '10px', backgroundColor: getStrengthColor() }} />
            <p>Síla hesla: {strength}</p>
            <ul>
                {criteria.map((criterion, index) => (
                    <li key={index} style={{ color: criterion.valid ? 'green' : 'red' }}>
                        {criterion.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordStrength;
