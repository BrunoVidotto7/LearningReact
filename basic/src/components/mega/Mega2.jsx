import "./Mega.css";
import React, {useState} from "react";

export default props => {
    function generateNumbersNotIn(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio)
            ? generateNumbersNotIn(min, max, array)
            : aleatorio;
    }

    function generateNumbers(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = generateNumbersNotIn(1, 60, nums);
                return [...nums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [qt, setQt] = useState(props.qt || 6)
    const initialNumbers = Array(qt).fill(0)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{'[' + numbers.join(', ')+']'}</h3>
            <div>
                <label>Number quantity</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qt}
                    onChange={(e) => {
                        setQt(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}
                />
            </div>
            <button onClick={(_) => setNumbers(generateNumbers(qt))}>
                Generate Numbers
            </button>
        </div>
    );
}