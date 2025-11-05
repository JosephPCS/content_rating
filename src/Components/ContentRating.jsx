
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {  //{/*State intialization syntax for counters*/}
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:()=> {
            this.setState((prevState) => ({
                likes: prevState.likes +1,
                totalRatings: prevState.totalRatings +1
            }));
        },
        handleDislike:()=> {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings +1
            }));
        },
    };
  }
  render() {
    return (
     <>
     <div class="content_rating">
        <p>
            In a world where routine reigns and creativity often takes a backseat, *The Creative Act* invites you to embark on a transformative journey to rediscover the power of imagination. Through an engaging blend of storytelling, practical exercises, and insightful reflections, this inspiring guide reveals how to break free from the chains of conformity and tap into your innate creative potential.

Join author Emma Calder as she shares her own story of overcoming self-doubt and rekindling her passion for creativity. With a compassionate voice and practical tools, she encourages readers to embrace the chaos of inspiration, to explore the unknown, and to celebrate the messiness of the creative process. Whether you're an artist, writer, entrepreneur, or simply someone looking to infuse more creativity into everyday life, *The Creative Act* provides a roadmap to ignite your imagination and manifest ideas that can change your world.

Dive into a treasure trove of creative prompts, thought-provoking exercises, and illuminating insights that will spark ideas and cultivate a mindset open to possibility. Discover how to nurture creativity in yourself and others, and learn to see the world through a fresh lens, filled with wonder and possibility.

Unlock your imagination—because the creative act might just be the most powerful act of all.
        </p>
        <div class="rating-buttons">
            <button class="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes}) {/*this is the syntax to access a state in the render*/}
            </button>
            <button class="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>

            <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
