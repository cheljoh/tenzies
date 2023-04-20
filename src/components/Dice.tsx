export default function Dice(props: {value: number}) {
    return (
        <div className="die">
            <h2>{props.value}</h2>
        </div>
    )
}