import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Erewash Rag</title>
        <meta name="description" content="Learn about Erewash Rag, your satirical local news source for humor and entertainment in Erewash, UK." />
        <meta name="keywords" content="About Erewash Rag, satirical news, local news, humor, blog, Erewash, UK, parody, entertainment" />
        <link rel="canonical" href="https://erewash-rag.co.uk/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Erewash Rag" />
        <meta property="og:description" content="Learn about Erewash Rag, your satirical local news source for humor and entertainment in Erewash, UK." />
        <meta property="og:url" content="https://erewash-rag.co.uk/about" />
        <meta property="og:image" content="https://erewash-rag.co.uk/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Erewash Rag" />
        <meta name="twitter:description" content="Learn about Erewash Rag, your satirical local news source for humor and entertainment in Erewash, UK." />
        <meta name="twitter:image" content="https://erewash-rag.co.uk/favicon.svg" />
      </Helmet>
      <div className="about-page">
        <h1 className="about-title">About Erewash Rag</h1>
        <div className="about-content">
          <p>
            Welcome to the <strong>Erewash Rag</strong>, your premier source for satirical local news that's so AI slop your Gen Z grandkids would be proud to sit morbidly in front of it.
          </p>
          
          <p>
            Founded in 2025 by a Software Engineer who had ever so slightly too much to drink at the pub, the Erewash Rag was born from the principle of bringing accountability to power and then I got bored and just started throwing stuff together instead
          </p>
          <p>
            <strong>Our Editorial Standards:</strong>
          </p>
          
          <ul>
            <li>All stories must be completely AI generated (I do knot no how 2 reed or rite and eye do not intend 2 leern)</li>
            <li>The source of all stories is Erewash Borough Council website or Facebook page (or some other local authority)</li>
            <li>We fact-check nothing (because facts are dangerously close to farts)</li>
            <li>We mash everything up with a big teapot I borrowed off my Mother and strain it through an AI model</li>
            <li>We serve it to you hot and lumpy</li>
          </ul>
          
          <p>
            <strong>Important Disclaimer:</strong>
          </p>
          
          <p>
            Everything you read on this website is complete AI slop intended for entertainment purposes only. Any resemblance to real events, people, or places is purely coincidental.
          </p>
          
          <p>
            If you're looking for actual news, we recommend supporting real local journalism like.. er... No hang on I'm sure I can think of one...
          </p>
          
          <p>
            <strong>Contact Us:</strong>
          </p>
          
          <p>
            Have a story idea? Want to complain about our journalistic standards? Think we should be more serious? Send us an email at: <em>i-dont-care-what-you-think-and-yet-you-think-i-also-set-up-a-mail-server-for-you-to-send-me-complaints@erewash-rag.co.uk</em>.
          </p>

        </div>
      </div>
    </>
  );
};

export default AboutPage; 