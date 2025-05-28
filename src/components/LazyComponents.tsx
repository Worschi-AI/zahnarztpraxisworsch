
import { lazy } from 'react';

// Lazy load non-critical components
export const LazyTestimonialsSection = lazy(() => import('./home/TestimonialsSection'));
export const LazyStatisticsSection = lazy(() => import('./home/StatisticsSection'));
export const LazyHomepageFAQ = lazy(() => import('./home/HomepageFAQ'));
export const LazyTeamPreview = lazy(() => import('./home/TeamPreview'));
export const LazyFooter = lazy(() => import('./Footer'));

// About page components
export const LazyAboutPhilosophy = lazy(() => import('./about/AboutPhilosophy'));
export const LazyAboutPraxisGallery = lazy(() => import('./about/AboutPraxisGallery'));
export const LazyAboutFAQ = lazy(() => import('./about/AboutFAQ'));

// Services page components
export const LazyQualityPromiseSection = lazy(() => import('./services/QualityPromiseSection'));
export const LazyServicesOverviewFAQ = lazy(() => import('./services/ServicesOverviewFAQ'));

// Team page components
export const LazyTeamValues = lazy(() => import('./team/TeamValues'));
export const LazyTeamFAQ = lazy(() => import('./team/TeamFAQ'));

// Contact page components
export const LazyLocationMap = lazy(() => import('./contact/LocationMap'));
