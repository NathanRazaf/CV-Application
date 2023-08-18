import '../../styles/StudiesBoxes.css';
import trashCan from '../../assets/trash-can-outline.svg';
function StudiesBoxes({studies, deleteStudy}) {
    //Sort studies in chronological order by beginDate
    studies.sort((a, b) => {
        return new Date(a.beginDate) - new Date(b.beginDate);
    });

    return (
        <div className="studies-boxes">
            {studies.map((study, index) => {
                return (
                    <div key={index} className="study-box">
                        <button className="delete-button" onClick={() => deleteStudy(index)}>
                            <img src={trashCan} alt="delete"/>
                        </button>
                        <h3>{study.schoolName}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default StudiesBoxes