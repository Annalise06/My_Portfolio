import React from 'react';
import { portfolio  } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section1">
      <h2 className="section_title">My <span>Works</span></h2>

      <div className="portfolio_container container grid">
        {portfolio.map((item ) => {
          return <PortfolioItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Portfolio;