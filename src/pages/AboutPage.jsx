import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This service/product review was created using React.
          With this app, you can easily collate feedback from 
          your customers.
        </p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back To Homepage</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage