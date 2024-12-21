/**
 * @param {string} keyWord
 * @param {(s: string) => void} onTypingKeyWord
 */
export function SearchInput({ keyWord, onTypingKeyWord, placeholder}) {

    return <div className="mb-3">
        <input type="text" className="form-control" id="search_input" placeholder={placeholder} value={keyWord} 
        onChange={(e) => onTypingKeyWord(e.target.value)} />
    </div>
}

