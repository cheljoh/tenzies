export default function Dice(props: {value: number, isHeld: boolean, holdDice: () => void}) {
    const buttonStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="die" style={buttonStyle} onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )
}