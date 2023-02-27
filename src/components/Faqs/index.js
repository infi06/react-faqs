// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isActive: false, activeId: null}

  clickBtn = id => {
    this.setState(prevState => ({
      activeId: id,
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {activeId} = this.state
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="order-container">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                listItem={each}
                state={this.state}
                activeId={activeId}
                clickBtn={this.clickBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
