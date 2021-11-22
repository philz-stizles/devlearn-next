import React from 'react'
import Image from 'next/image'

export type Article = { title: string; content: string; src: string }

const Card1 = ({ title, content, src }: Article) => {
  return (
    <div className="card-one">
      <div className="card-one__image">
        {/* <Image alt={title} width="100" height="100" src={src} /> */}
      </div>
      <h3 className="card-one__title">{title}</h3>
      <p className="card-one__content">{content}</p>
      <style jsx>{`
        .card-one {
          flex-direction: column;
          align-items: center;
          display: flex;
        }

        .card-one__image {
          margin-bottom: 1.6rem;
        }

        .card-one__title {
          max-width: 34rem;
          text-align: center;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02rem;
          font-size: 1.9rem;
          margin-bottom: 0.4rem;
        }

        .card-one__content {
          max-width: 34rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Card1
