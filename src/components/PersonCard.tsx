import { TFreq, frequencies } from "../App"

interface IProps {
    name: string,
    freq: TFreq,
    setFreq: React.Dispatch<React.SetStateAction<TFreq>>
}

const PersonCard = ({name, freq, setFreq}: IProps) => {
    return (
        <div className="person-card">
            <div className="profile-card">
                <div className="pict">
                    <img src="/avatar.png" alt={name} />
                </div>
                <div>
                    <div className="text">Report for</div>
                    <div className="name">{name}</div>
                </div>
            </div>
            <div className="frequencies">
                {frequencies.map((d) => (
                    <div className={freq===d ? "active":""} onClick={() => setFreq(d)}>{d}</div>
                ))}
            </div>
        </div>
    )
}

export default PersonCard