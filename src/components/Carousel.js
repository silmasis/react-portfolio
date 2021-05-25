import React from 'react';
import Card from '../components/Card'
import { Container, Row } from 'react-bootstrap';

import movie from '../assets/images/movie.png';
import trivia from '../assets/images/trivia.png';
import food from '../assets/images/headshot.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Movie Hangman',
                    subTitle: 'Hangman',
                    imgSrc: movie,
                    link: 'http://silmasis.github.io/Word_Guess_Game/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'NFL Trivia',
                    subTitle: 'Test your NFL knowledge!',
                    imgSrc: trivia,
                    link: 'http://silmasis.github.io/TriviaGame/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Can I Make It?',
                    subTitle: 'A food app',
                    imgSrc: food,
                    link: '',
                    selected: false
                },


            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;