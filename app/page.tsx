'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import ArticleCarousel from '../components/ArticleCarousel';
import ArticleCard from '../components/ArticleCard';
import CompactArticleCard from '../components/CompactArticleCard';
import LatestArticlesSidebar from '../components/LatestArticlesSidebar';
import OpinionSidebar from '../components/OpinionSidebar';
import BannerAd from '../components/BannerAd';

// Mock data
const carouselArticles = [
  {
    id: 1,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-14-1-75x75.jpg',
    title: 'The Chinese smartphone upstarts taking on Apple and Samsung'
  },
  {
    id: 2,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-21-75x75.jpg',
    title: 'Presidential Train Now Available For Jakartans Traveling To Bandung'
  },
  {
    id: 3,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-15-75x75.jpg',
    title: 'A Digital Media Startup Growing Up With Millennial Women'
  }
];

const latestArticles = [
  {
    id: 1,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-25-120x86.jpg',
    title: 'Unconventional Workouts That Torch Fat And Sculpt Muscle'
  },
  {
    id: 2,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-30-120x86.jpg',
    title: 'Millions of Indigenous People May Lose Voting Rights: Alliance'
  },
  {
    id: 3,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-48-120x86.jpg',
    title: 'Crismonita Dwi Putri, RI\'s Track Cycling Athlete for Asian Games'
  },
  {
    id: 4,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-32-120x86.jpg',
    title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law'
  },
  {
    id: 5,
    image: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-33-120x86.jpg',
    title: 'Garuda operates larger planes for Jakarta-Palembang route'
  }
];

const opinionArticles = [
  'Tour showcases shared art history of Indonesia and Singapore',
  'Finland Has An Education System The Other Country Should Learn From',
  'Women in Politics: Urgency of Quota System For Women In Regional Elections',
  'China\'s Peng banned and fined for Wimbledon corruption attempt',
  'Democratic Party politician calls Prabowo \'cardboard general\''
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f1f2' }}>
      {/* Header */}
      <Header onMenuToggle={() => setMenuOpen(true)} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Sidebar - Hidden on Mobile */}
          <aside className="hidden lg:block lg:col-span-3">
            <LatestArticlesSidebar articles={latestArticles} />
            <OpinionSidebar articles={opinionArticles} />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-6">
            {/* Top Carousel */}
            <ArticleCarousel articles={carouselArticles} />

            {/* Featured Article */}
            <ArticleCard
              variant="featured"
              category="POLITICS"
              categoryColor="#6b7280"
              title="'Election was rigged' says opposition, police confirm three dead"
              author="JOHN DOE"
              coAuthors="1 others"
              date="February 17, 2020"
              commentCount={0}
              excerpt="When we get out of the glass bottle of our ego and when we escape like the squirrels in the..."
              image="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-34-750x375.jpg"
              showReadMore={true}
            />

            {/* Bottom Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CompactArticleCard
                category="BUSINESS"
                categoryColor="#2563eb"
                title="Grab tackles Jakarta's odd-even license plate policy with special algorithm"
                author="JOHN DOE"
                date="February 17, 2020"
                excerpt=""
                image="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/07/demo-2-350x250.jpg"
              />
              <CompactArticleCard
                category="POLITICS"
                categoryColor="#D3302F"
                title="Jokowi supporters try to prevent anti-Jokowi activist from entering Batam"
                author="JOHN DOE"
                date="August 10, 2018"
                excerpt=""
                image="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/07/demo-12-350x250.jpg"
              />
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            {/* Banner Ad */}
            {/* <div className="mb-6">
              <BannerAd
                image="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/08/banner-ad-345x345.jpg"
                title="Banner Ads"
              />
            </div> */}

            {/* Right Sidebar Articles - 2 columns on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Opinion Article */}
              <CompactArticleCard
                category="OPINION"
                categoryColor="#eab308"
                title="Democratic Party politician calls Prabowo 'cardboard general'"
                author="JOHN DOE"
                date="August 10, 2018"
                excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
                image="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-24-350x250.jpg"
                badgePosition="top-left"
              />

              {/* Lifestyle Article */}
              <CompactArticleCard
                category="LIFESTYLE"
                categoryColor="#ec4899"
                title="Google tracks location data even when users turn service off"
                author="JOHN DOE"
                date="August 14, 2018"
                excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
                image="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-49-350x250.jpg"
                badgePosition="top-left"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

