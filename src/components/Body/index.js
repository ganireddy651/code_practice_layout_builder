import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="left-navbar-container">
      <h1 className="left-nav-heading">Left Navbar Menu</h1>
      <ul className="list-container">
        <li className="list">Item 1</li>
        <li className="list">Item 2</li>
        <li className="list">Item 3</li>
        <li className="list">Item 4</li>
      </ul>
    </div>
    <div className="content-navbar-container">
      <h1 className="content-heading">Content</h1>
      <p>
        Go back and read the content marketing definition one more time, but
        this time remove the relevant and valuable. That’s the difference
        between content marketing and the other informational garbage you get
        from companies trying to sell you “stuff.” Companies send us information
        all the time – it’s just that most of the time it’s not very relevant or
        valuable (can you say spam?). That’s what makes content marketing so
        intriguing in today’s environment of thousands of marketing messages per
        person per day.
      </p>
    </div>
    <div className="right-navbar-container">
      <h1 className="left-nav-heading">Right Navbar</h1>
      <ul className="right-navbar-ad-container">
        <li className="ad">Ad 1</li>
      </ul>
      <ul className="right-navbar-ad-container">
        <li className="ad">Ad 2</li>
      </ul>
    </div>
  </div>
)

export default Body
