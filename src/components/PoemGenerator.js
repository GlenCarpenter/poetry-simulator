import React from 'react';
import { prepPhrases } from '../prepPhrases';
import Input from './Input';
import datamuse from '../apis/datamuse';
import '../css/PoemGenerator.css';

class PoemGenerator extends React.Component {
   
    state = {
        poemSeed: '',
        rhymeArray: [],
        similarArray: [],
        describeArray: [],
        triggerArray: [],
        followArray: [],
        poemPlaceholder: ''
    }

    // API calls to datamuse
    getWordsThatRhyme = async term => {
        const response = await datamuse.get('/words', {
            params: {
                rel_rhy: term
            }
        });
        
        this.setState({ 
            rhymeArray: response.data.filter(el => el.word !== ".")
        });
        console.log(this.state.rhymeArray[0]);
    };

    getSimilarWords = async term => {
        const response = await datamuse.get('/words', {
            params: {
                ml: term
            }
        });
        
        this.setState({ 
            similarArray: response.data.filter(el => el.word !== ".")
        });
    };

    getWordsThatDescribe = async term => {
        const response = await datamuse.get('/words', {
            params: {
                rel_jjb: term
            }
        });
        
        this.setState({ 
            describeArray: response.data.filter(el => el.word !== ".")
        });
    };

    getWordsThatTrigger = async term => {
        const response = await datamuse.get('/words', {
            params: {
                rel_trg: term
            }
        });
        
        this.setState({ 
            triggerArray: response.data.filter(el => el.word !== ".")
        });
    };

    getWordsThatFollow = async term => {
        const response = await datamuse.get('/words', {
            params: {
                lc: term
            }
        });
        
        this.setState({ 
            followArray: response.data.filter(el => el.word !== ".")
        });
    };

    // Update state when input form is submitted or button is clicked
    onFormSubmission = term => {
        if(term) {
            this.processPoemPlaceholder();
            this.setState({
                poemSeed: term,
                rhymeArray: [],
                similarArray: [],
                describeArray: [],
                triggerArray: [],
                followArray: []
            });
            this.getWordsThatRhyme(term);
            this.getSimilarWords(term);
            this.getWordsThatDescribe(term);
            this.getWordsThatTrigger(term);
            this.getWordsThatFollow(term);
        }
    }

    // Placeholder while poem is processing
    processPoemPlaceholder = () => {
        this.setState({ poemPlaceholder: 'Processing your poem...' });
    }

    // Helper methods for populating poem with random words
    getRandomWord = inputArr => {
        let randIndex = Math.floor(Math.random() * inputArr.length);
        return inputArr[randIndex].word;
    }

    getRandomPhrase = ()=> {
        return prepPhrases[Math.floor(Math.random() * prepPhrases.length)];
    }

    getPoemTitle = () => {
        return `${this.getRandomPhrase()} a ${this.state.poemSeed}`;
    }

    // Conditions required to display a poem, otherwise will display the default
    conditionsToRenderPoem = () => {
        return this.state.rhymeArray.length > 1 &&
                this.state.similarArray.length > 1 &&
                this.state.describeArray.length > 1 &&
                this.state.triggerArray.length > 1 &&
                this.state.followArray.length > 1;
    }

    // Populate the poem with random words from datamuse API based off of search term
    renderPoem = () => {
        if(this.conditionsToRenderPoem()){
            return(
                <div className="poemGenerator">
                    <Input onClickOrSubmit={this.onFormSubmission}/>
                    <div className="poemTitle">
                        <h3>{this.getPoemTitle()}</h3>
                        <p>by Poetry Simulator</p>
                    </div>
                    <div className="poemContainer">
                    <div className="leftStanza">
                        <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                        <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                    </div>

                    <div className="lineSpace"></div>

                    <div className="rightStanza">
                    <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                        <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                    </div>

                    <div className="lineSpace"></div>

                    <div className="leftStanza">
                        <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                        <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                    </div>

                    <div className="lineSpace"></div>

                    <div className="rightStanza">
                    <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                        <p>{this.getRandomPhrase()} {this.getRandomWord(this.state.describeArray)} {this.getRandomWord(this.state.similarArray)} </p>
                        <p className="leftIndent">{this.getRandomPhrase()} {this.getRandomWord(this.state.triggerArray)} {this.getRandomWord(this.state.rhymeArray)} </p>
                    </div>

                    <div className="lineSpace"></div>
                    <div className="lineSpace"></div>
                </div>
            </div>
            )
        } else {
            return(
                <div>
                    <Input onClickOrSubmit={this.onFormSubmission}/>
                    <div className="poemPlaceholder">{this.state.poemPlaceholder}</div>
                </div>
            )
        };
    }

    render() {
        return <div>{this.renderPoem()}</div>
    };
}

export default PoemGenerator;