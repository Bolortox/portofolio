export const Toggle = ({handleChange}) => {
    return (
        <div>
            <input type="checkbox" id="check" onChange={handleChange} />
        </div>
    )
}