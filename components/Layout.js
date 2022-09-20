import Footer from "./Footer"
import Navigation from "./Navigation"

export const Layout = ( { children } ) => {
  return (
    <div>
        <Navigation />
        { children }
        <Footer />
    </div>
  )
}

export default Layout