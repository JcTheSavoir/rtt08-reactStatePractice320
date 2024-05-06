const Score = ({scoring}) => {

  return (
    <div className="scoresAndDatesContainer">
        {scoring.map((scoreDates) =>
        <div> 
            <div className="scoresDate"><strong>Date:</strong> {scoreDates.date}</div>
            <div className="scoreDetails"><strong>Score:</strong> {scoreDates.score}</div>
        </div>
        )}
    </div>
  )
}
export default Score