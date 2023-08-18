function StudiesSection({studies}) {
    //Sort studies in chronological order by beginDate
    studies.sort((a, b) => {
        return new Date(a.beginDate) - new Date(b.beginDate);
    });

    return (
        <>
            <h2>Education</h2>
            {
                studies && studies.map((study, index) => (
                    <div className="study-section" key={index}>
                        <div className="study-section__left">
                            <p>From {study.beginDate} to {study.endDate}</p>
                            <p>{study.location}</p>
                        </div>
                        <div className="study-section__right">
                            <h3>{study.schoolName}</h3>
                            <p>{study.studyField}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default StudiesSection;
