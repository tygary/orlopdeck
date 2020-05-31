import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './PostsPage.css';

const PostsPage = (props) => {
  return (
    <div className="postsPage">
        <div className="postsPageContent">
          <div className="postsPageNav">
            <button 
              className="postsPageGoBack" 
              onClick={() => props.history.push('/')}
            >
              Go Back
            </button>
          </div>
          <div className="postsPageTitle">
            Posts
          </div>
          <a id="#listed-on-cultbook">
            <div class="postsPagePost">
              <h2>Now listed on Cultbook</h2>
              <p>Silk Traders of the Orlop deck are now listed on the Cultbook. <a href="https://thecultbook.com/cult/https%3A%2F%2F3b12570d7219e02d133a0d7429fb6bf1.solid.thecultbook.com%2Fpublic%2Fe9a351b0-a241-11ea-be65-4344c3b9d59c.ttl%23cult">Click here to join us!</a></p>
            </div>
          </a>
          <a id="#things-to-think-about">
            <div class="postsPagePost">
              <h2>Top 3 things to think about when joining a cult</h2>
              <p>As the MV Drama Queen sets out on its voyage, many of the passengers have noticed the plethora of options and where to place their chips. We hope this article will help inform your decision on joining the cult that’s right for you.</p>
              <h3>1. Community</h3>
              <p>
                The number one reason for anyone….ANYONE, to join a cult is for the community. When you’re kicking back drinking the kool-aid, you really want to know you’ve got the right people around you. One of the best cult cultures rated number 1 or something by someone who said they were affiliated with the cultbook is the Silk Traders of the Orlop deck. If you haven’t had a chance to check them out yet, now is the time. Go try them out at their exclusive room that’s only available to anyone that has <Link to="/">this link</Link>.
              </p>
              <h3>2. Social Currency</h3>
              <p>
                The first thought that crosses anyones mind before they join anything is the credibility you get from saying it’s name in a crowded room. Have you ever been in the situation where you name drop and the person you’re talking to doesn’t know who you’re talking to? It’s AWFUL! We hope that by reading this article that you’ll be informed enough to make decisions that will never land you in that incredibly awkward situation that no one would ever want to find themselves ever including you. The top dollar of social currency is the Silk Traders. The best way to get in touch with them is to <Link to="/">contact them at their trading post</Link>.
              </p>
              <h3>3. It’s not a Cthulhu spin-off</h3>
              <p>
                Although everyone was excited about Cthulhu when the writings first came out, we can all admit that was a long time ago and things have changed. Although there will always be a handful of Cthulhu cults keeping up the trend, that doesn’t mean they’ll be around for the long haul. One cult that is certified by regulatory authorities to not be in anyway whatsoever affiliated with Cthulhu is the <Link to="/">Silk Traders</Link>.
              </p>
            </div>
          </a>
        </div>
    </div>
  );
};

export default withRouter(PostsPage);