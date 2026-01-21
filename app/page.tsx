'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import ArticleCarousel from '../components/ArticleCarousel';
import ArticleCard from '../components/ArticleCard';
import LatestArticlesSidebar from '../components/LatestArticlesSidebar';
import OpinionSidebar from '../components/OpinionSidebar';
import BannerAd from '../components/BannerAd';

// Mock data
const carouselArticles = [
  {
    id: 1,
    image: '/api/placeholder/80/80',
    title: 'The Chinese smartphone upstarts taking on Apple and Samsung'
  },
  {
    id: 2,
    image: '/api/placeholder/80/80',
    title: 'Presidential Train Now Available For Jakartans Traveling To Bandung'
  },
  {
    id: 3,
    image: '/api/placeholder/80/80',
    title: 'A Digital Media Startup Growing Up With Millennial Women'
  }
];

const latestArticles = [
  {
    id: 1,
    image: '/api/placeholder/90/70',
    title: 'Unconventional Workouts That Torch Fat And Sculpt Muscle'
  },
  {
    id: 2,
    image: '/api/placeholder/90/70',
    title: 'Millions of Indigenous People May Lose Voting Rights: Alliance'
  },
  {
    id: 3,
    image: '/api/placeholder/90/70',
    title: 'Crismonita Dwi Putri, RI\'s Track Cycling Athlete for Asian Games'
  },
  {
    id: 4,
    image: '/api/placeholder/90/70',
    title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law'
  },
  {
    id: 5,
    image: '/api/placeholder/90/70',
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
              image="/api/placeholder/800/500"
              showReadMore={true}
            />

            {/* Bottom Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ArticleCard
                variant="standard"
                category="BUSINESS"
                categoryColor="#2563eb"
                title="Grab tackles Jakarta's odd-even license plate policy with special algorithm"
                author="JOHN DOE"
                date="February 17, 2020"
                image="/api/placeholder/400/250"
              />
              <ArticleCard
                variant="standard"
                title="Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting"
                author="JOHN DOE"
                date="February 17, 2020"
                image="/api/placeholder/400/250"
              />
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Banner Ad */}
            <BannerAd
              image="/api/placeholder/400/250"
              title="Banner Ads"
              buttonText="LEARN MORE"
            />

            {/* Opinion Article */}
            <ArticleCard
              variant="sidebar"
              category="OPINION"
              categoryColor="#eab308"
              title="Democratic Party politician calls Prabowo 'cardboard general'"
              author="JOHN DOE"
              date="August 10, 2018"
              excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
              image="/api/placeholder/400/250"
            />

            {/* Lifestyle Article */}
            <ArticleCard
              variant="sidebar"
              category="LIFESTYLE"
              categoryColor="#ec4899"
              title="Google tracks location data even when users turn service off"
              author="JOHN DOE"
              date="August 14, 2018"
              excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
              image="/api/placeholder/400/250"
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

