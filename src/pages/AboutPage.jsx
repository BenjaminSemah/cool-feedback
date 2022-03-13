import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React product review service app</p>
      <p>Version 1.0.0</p>

      <p>
        <Link href="/">Back To Homepage</Link>
      </p>
    </Card>
  )
}

export default AboutPage