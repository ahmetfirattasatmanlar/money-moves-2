import React from 'react';
import Link from 'next/link'
import { Card } from 'antd';
import TagList from 'components/_common/Tags/TagList';

const { Meta } = Card;

export default function PortfolioCard({Tags, PortfolioId, Screens, PortfolioItem}){
  // {Tags, PortfolioId, Screens, PortfolioItem}
  let renderThumb = () => {
    if(Screens.length > 0 ){
      return Screens[0].thumbnails.large.url || DataTransferItemList.Screens[0].thumbnails.large.url;
    } else {return }
  }
  return Screens ? (
    <Link as={`/portfolio/${PortfolioItem}`} href="/portfolio/[id]">
      <span>
      <Card
        // className={`card-portfolio ${!this.state.isPublic && 'card-portfolio-disabled'}`}
        className="card-portfolio"
        cover={
          <img
            alt="example"
            src={renderThumb()}
          />
        }>
          <Meta
            // title={item.name}
            description={
              <div className="d-flex align-items-center">
                <div className="w-100">
                  <div className="ant-card-meta-title">{PortfolioItem}</div>
                  <TagList tags={Tags.splice(0,2)} disabled/>
                </div>
              </div>
            }
          />
        </Card>
      </span>
    </Link>
  ) : null
}
