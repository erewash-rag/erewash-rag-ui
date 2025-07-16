import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return (
      <div className="error">
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/" className="read-more-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      
      <article>
        <header className="article-header">
          <span className="article-category">{article.category}</span>
          <h1 className="article-page-title">{article.title}</h1>
          <div className="article-page-meta">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{format(new Date(article.date), 'MMMM dd, yyyy')}</span>
          </div>
        </header>

        <img 
          src={article.image} 
          alt={article.title}
          className="article-page-image"
        />

        <div 
          className="article-page-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
};

export default ArticlePage; 