import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ARTICLES_ENDPOINT } from '../config/api';
import { Helmet } from 'react-helmet-async';
import { useExperiment } from '../context/ExperimentContext';

const buildUrl = (pageNum, experiment) => {
  const params = new URLSearchParams();
  if (pageNum > 0) params.set('page', pageNum);
  if (experiment) params.set('experiment', 'true');
  const query = params.toString();
  return query ? `${ARTICLES_ENDPOINT}?${query}` : ARTICLES_ENDPOINT;
};

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const { experiment } = useExperiment();
  const sentinelRef = useRef(null);

  useEffect(() => {
    setArticles([]);
    setCurrentPage(0);
    setTotalPages(1);
    setLoading(true);
    setError(null);

    fetch(buildUrl(0, experiment))
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch articles');
        return res.json();
      })
      .then(data => {
        setArticles(data.articles);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [experiment]);

  const loadMore = useCallback(() => {
    if (loadingMore || currentPage >= totalPages - 1) return;

    const nextPage = currentPage + 1;
    setLoadingMore(true);

    fetch(buildUrl(nextPage, experiment))
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch articles');
        return res.json();
      })
      .then(data => {
        setArticles(prev => [...prev, ...data.articles]);
        setCurrentPage(nextPage);
        setTotalPages(data.total_pages);
        setLoadingMore(false);
      })
      .catch(err => {
        setError(err.message);
        setLoadingMore(false);
      });
  }, [loadingMore, currentPage, totalPages, experiment]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  if (loading) return <div className="loading">Loading articles...</div>;
  if (error) return <div className="error">{error}</div>;

  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredArticle = sorted[0];
  const otherArticles = sorted.slice(1);
  const hasMore = currentPage < totalPages - 1;

  return (
    <>
      <Helmet>
        <title>Erewash Rag</title>
        <meta name="description" content="Satirical local news blog - bringing humor to your neighborhood" />
        <meta name="keywords" content="Erewash Rag, satirical news, local news, humor, blog, Erewash, UK, parody, entertainment" />
        <link rel="canonical" href="https://erewash-rag.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Erewash Rag" />
        <meta property="og:description" content="Satirical local news blog - bringing humor to your neighborhood" />
        <meta property="og:url" content="https://erewash-rag.co.uk/" />
        <meta property="og:image" content="https://erewash-rag.co.uk/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Erewash Rag" />
        <meta name="twitter:description" content="Satirical local news blog - bringing humor to your neighborhood" />
        <meta name="twitter:image" content="https://erewash-rag.co.uk/favicon.svg" />
      </Helmet>

      {featuredArticle && (
        <section className="featured-section">
          <div className="featured-article">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="featured-image"
            />
            <div className="featured-content">
              <span className="featured-category">{featuredArticle.category}</span>
              <h1 className="featured-title">{featuredArticle.title}</h1>
              <p className="featured-excerpt">{featuredArticle.excerpt}</p>
              <Link to={`/articles/${featuredArticle.id}`} className="read-more-btn">
                Read Full Story
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="articles-section">
        <h2>Latest Stories</h2>
        <div className="articles-grid">
          {otherArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div ref={sentinelRef} />
        {loadingMore && <div className="loading">Loading more stories...</div>}
        {!hasMore && articles.length > 1 && (
          <p className="loading">You&apos;ve reached the end</p>
        )}
      </section>
    </>
  );
};

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="article-card">
      <img
        src={article.image}
        alt={article.title}
        className="article-image"
      />
      <div className="article-content">
        <span className="article-category">{article.category}</span>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span>By {article.author}</span>
          <span>{format(new Date(article.date), 'MMM dd, yyyy')}</span>
        </div>
      </div>
    </Link>
  );
};

export default HomePage;
