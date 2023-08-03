import React, { Component } from "react";
import './index.css'

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null
        };
    }

    handleQuestionClick = (index) => {
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === index ? null : index
        }));
    };

    render() {
        const { activeIndex } = this.state;

        return (
            <div className="container">
                <h1 className="title">Frequently Asked Questions</h1>
                <div className="faq-item">
                    <h3
                        className={`question ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => this.handleQuestionClick(0)}
                    >
                        What payment methods do you accept?
                    </h3>
                    {activeIndex === 0 && <p className="answer"> We accept payments via credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers.</p>}
                </div>
                <div className="faq-item">
                    <h3
                        className={`question ${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => this.handleQuestionClick(1)}
                    >
                        How can I reset my password?
                    </h3>
                    {activeIndex === 1 && <p className="answer"> To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your registered email to reset your password.</p>}
                </div>
                <div className="faq-item">
                    <h3
                        className={`question ${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => this.handleQuestionClick(2)}
                    >
                        How can I track my order?
                    </h3>
                    {activeIndex === 2 && <p className="answer">You can track your order by logging into your account and navigating to the "Order History" section. There, you will find the tracking number and shipping status for your order.</p>}
                </div>
                <div className="faq-item">
                    <h3
                        className={`question ${activeIndex === 3 ? 'active' : ''}`}
                        onClick={() => this.handleQuestionClick(3)}
                    >
                        What is your return policy?
                    </h3>
                    {activeIndex === 3 && <p className="answer">We offer a 30-day return policy for all products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange..</p>}
                </div>
            </div>
        );
    }
}

export default FAQ;
