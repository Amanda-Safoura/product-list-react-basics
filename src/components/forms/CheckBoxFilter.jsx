/**
 * @param {boolean} checked
 * @param {(s: boolean) => void} onCheck
 */
export function CheckBoxFilter({ checked, onCheck, label, id }) {

    return <div className="form-check">
        <input className="form-check-input" type="checkbox" id={id} checked={checked} onChange={(e) => onCheck(e.target.checked)} />
        <label className="form-check-label" htmlFor={id}>
            {label}
        </label>
    </div>

}
