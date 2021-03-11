import React from 'react';
import Link from 'next/link'
import { Card, Tag } from 'antd';

const { Meta } = Card;

export default function PortfolioCard({Screens, PortfolioItem, DynamicTags}){
  // {DynamicTags ? console.log(DynamicTags) : null}

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
                  {DynamicTags && DynamicTags.length > 0 ? DynamicTags.splice(0,2).map(tag=> {
                    return <Tag key={tag}><Link href={`/portfolio/tags/${tag}`} className="text-primary badge badge-sm">{tag}</Link></Tag>
                  }) : undefined}
                </div>
              </div>
            }
          />
        </Card>
      </span>
    </Link>
  ) : null
}
