import { useState, useEffect } from "react";
import { evaluatePassword } from "./PasswordStrength";

type PasswordTimeValidatorProps = {
    password: string | null;
    createdAt: number;
    minTimeMs?: number;
};

const PasswordTimeValidator = ({ password, createdAt, minTimeMs = 5000 }: PasswordTimeValidatorProps) => {
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        if (!password) {
            setIsValid(null);
            return;
        }
        const { errors } = evaluatePassword(password);

        if (errors.length > 0) {
            setIsValid(null);
            return;
        }

        const timeElapsed = Date.now() - createdAt;
        setIsValid(timeElapsed >= minTimeMs);
    }, [password, createdAt, minTimeMs]);

    return (
        <div>
            {isValid === null ? (
                <p></p>
            ) : (
                <p className={isValid ? "text-success" : "text-danger"}>
                    Časová validace hesla: {isValid ? "Platné" : "Neplatné (zadáno příliš rychle)"}
                </p>
            )}
        </div>
    );
};

export default PasswordTimeValidator;
