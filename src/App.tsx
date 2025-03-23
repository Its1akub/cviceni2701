import {useEffect, useState} from 'react'
import './App.css'
import PasswordInput from "./components/PasswordInput.tsx";
import PasswordStrength from "./components/PasswordStrength.tsx";
import CharacterSequenceValidator from "./components/CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./components/PasswordTimeValidator.tsx";
import CurrentTemperature from "./components/CurrentTemperature.tsx";
import CountryFlagValidator from "./components/CountryFlagValidator.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    const [password, setPassword] = useState<string | null>(null);
    const [passwordTime, setPasswordTime] = useState<number>(Date.now());





    useEffect(() => {
        if (password !== null && passwordTime === null) {
            setPasswordTime(Date.now());
        }
    }, [password]);





    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {
                if (prevPassword === null) return prevPassword;
                if (prevPassword.length === 0) return prevPassword;
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {

                    return prevPassword + "😶‍🌫️";
                } else {

                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10000); // 10 sekund pro test; reálně 120000 ms (2 minuty)
        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <>
            <h1 className="m-lg-4 text-white">Password validator</h1>
            <PasswordInput passwordValue={password} setter={setPassword} />
            <PasswordStrength password={password}/>
            <CharacterSequenceValidator password={password}/>
            <PasswordTimeValidator password={password} createdAt={passwordTime}/>
            <CountryFlagValidator password={password}/>
            <CurrentTemperature/>

        </>
    )
}


export default App