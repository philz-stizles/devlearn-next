import React from 'react'

type RatingsProps = {
  count: number
}

const Ratings = ({ count }: RatingsProps) => {
  return (
    <div className="ratings">
      <span className="ratings__value">count</span>
      <ul className="ratings_stars">
        {Array.from(Array(count), (e, i) => {
          return <Star />
        })}
      </ul>
      <style jsx>{`
        .ratings {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

const Star = ({ half }: { half?: boolean }) => {
  return <i className={`las la-star${half ? '-half-alt' : ''}`}></i>
}

export default Ratings
