import trashCan from '../../assets/trash-can-outline.svg';
import '../../styles/ExperienceBoxes.css'
function ExperienceBoxes({experiences, deleteExperience}) {
    //Sort experiences in chronological order by beginDate
    experiences.sort((a, b) => {
        return new Date(a.beginDate) - new Date(b.beginDate);
    })

    return (
        <div className="experience-boxes">
            {experiences.map((exp, index) => (
                <div className="experience-box" key={index}>
                    <button onClick={() => deleteExperience(index)}>
                        <img src={trashCan} alt="delete"/>
                    </button>
                    <h3>{exp.companyName}</h3>
                </div>
            ))}
        </div>
    )
}

export default ExperienceBoxes