import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ARTICLES_ENDPOINT } from '../config/api';
// import { articles } from '../data/articles'; // Remove this line

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(ARTICLES_ENDPOINT)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch articles');
        return res.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading articles...</div>;
  if (error) return <div className="error">{error}</div>;

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  return (
    <div className="home-page">
      {/* Featured Article */}
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

      {/* Other Articles Grid */}
      <section className="articles-section">
        <h2>Latest Stories</h2>
        <div className="articles-grid">
          {otherArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
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