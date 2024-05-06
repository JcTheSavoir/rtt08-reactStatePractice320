const Score = ({scoring}) => {

  return (
    <div className="scoresAndDatesContainer">
        {scoring.map((scoreDates, index) =>
        <div key={index}> 
        {/* conditional styling in two different ways: One way for the Date, one way for the Score */}
          <div className={`scores${scoreDates.date >= '2019-01-01' ? 'After2018' : 'Before2019'}`}><strong>Date:</strong> {scoreDates.date}</div>
          
          {scoreDates.score >= 85 ? (
            <>
              <div className="scoreHigh"><strong>Score:</strong> {scoreDates.score}</div>  
            </>
          ) : (
            <>
              <div className="scoreLow"><strong>Score:</strong> {scoreDates.score}</div>  
            </>
          )
        }
        </div>
        )}
    </div>
  )
}


export default Score