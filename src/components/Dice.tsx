export default function Dice(props: {id: number, value: number, isHeld: boolean, holdDice: () => void}) {
    const buttonStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="die" style={buttonStyle} onClick={props.holdDice} data-testid={props.id}>
            <h3>{props.value}</h3>
        </div>
    )
}