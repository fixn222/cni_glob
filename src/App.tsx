// Route shell: render the landing page or auth screens from the current pathname without adding router dependencies.
import Countries from "./pages/Countries"
import CTA from "./pages/CTA"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Service from "./pages/Service"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Testimonials from "./pages/Testimonials"
import { ROUTES } from "./lib/routes"

const App = ({ pathname }: { pathname: string }) => {
  if (pathname === ROUTES.LOGIN) {
    return <SignIn />
  }

  if (pathname === ROUTES.REGISTER) {
    return <SignUp />
  }

  return (
    <div>
      <Hero />
      <Service />
      <CTA />
      <Countries />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
