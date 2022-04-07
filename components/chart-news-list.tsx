/* eslint-disable max-len */
import React from 'react';
// import Link from 'next/link';
import Trend from '../models/trend';
import AriticleBox from './article-box';


interface PropsType {
    trends: Trend[],
    isNaverSection: boolean,
}

const ChartNewsList = ({trends, isNaverSection}: PropsType) => {
  return (
    <div className={'bg-white max-w-4xl mx-auto p-8 md:p-12 rounded-lg ' + (isNaverSection ? 'md:shadow-2xl my-0 md:my-10' : 'shadow-2xl my-10')}>
      <h4 className="font-bold text-2xl">키워드별 관련 뉴스</h4>
      {trends && trends.slice(0, 10).map((trend, index) => {
        return (
          <div key={index} className="grid md:grid-cols-5 my-3 border-y divide-y md:divide-none">
            <div className='grid grid-cols-3'>
              <div className="flex justify-center items-center text-sm font-semibold p-2">{index + 1}</div>
              <div className="col-span-2 flex justify-center items-center text-sm font-semibold p-2">{trend.keyword}</div>
            </div>
            <div className='md:col-span-4 grid grid-rows-3 divide-y'>
              {trend.topArticles && trend.topArticles.map((topArticle, index) => {
                return (
                  <div key={index}>
                    <AriticleBox article={topArticle}/>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartNewsList;
