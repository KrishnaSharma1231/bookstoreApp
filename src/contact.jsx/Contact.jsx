import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contacts from "../components/Contacts"

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <Contacts/>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
