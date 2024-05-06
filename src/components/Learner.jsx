import Score from "./Score"

const Learner = ({student}) => {
    // console.log(student)
  return (
    <div className="studentInfoContainer">
        <div className="studentNameParagraph">
            <h2 className="studentName">{student.name}</h2>
            <p className="studentParagraph">{student.bio}</p>
        </div>

        <div className="studentScoreContainer">
            <Score scoring={student.scores}/>
        </div>

    </div>
  )
}
export default Learner