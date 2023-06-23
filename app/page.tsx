import '../styles/montserrat.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Project from './components/Project'

const Home = () => {
  return (
    <>
      <Header></Header>
      <main className="pt-10 min-w-full flex flex-col items-center">
        <div className="w-5/6 grid grid-cols-2 grid-col gap-16 pb-10">
          <Project
            id="01"
            description="Prepare to meet luxury houses, new projects INSPIRED BY BLED CASTLE ,SLOVENIA in the midst of modern atmosphere close to nature with beautiful gardens around the project. with beautiful scenery with electric wires to the ground for the whole project luxury club house Large swimming pool and fully equipped fitness center with RELAX SPACE for the whole family to truly relax."
            location="Bangkok"
            propertyType="House"
            publisherName="SC ASSET"
            title="Bangkok Boulevard Signature Chaengwattana"
          ></Project>
          <Project
            id="02"
            description="Meet the new series of luxury Nordic houses inspired by the tourist destinations in Northern Europe. Feel closer to nature with the high-ceiling, glass wall, an architectural signature of Nordic countries where the people are well known for being the happiest in the world. Feast your eyes on the iconic, elegant design of the luxury Nordic clubhouse with fully equipped facilities. Make your everyday life like an elegant staycation with the grand common park inspired by the 3 seasons of Scandinavian pine forest."
            location="Bangkok"
            propertyType="House"
            publisherName="SC ASSET"
            title="Bangkok Boulevard Changwattana 2"
          ></Project>
          <Project
            id="03"
            description="Dusit Residences features grand homes with stunning park vistas, ideal for those who desire a timelessly classic and private living space with close connections to the city. Tastefully furnished, Asian inspired décor with a subtle Thai sensibility brings together inviting colour combinations and accents of luxurious natural materials and fine finishes to this splendid sanctuary in the city."
            location="Bangkok"
            propertyType="House"
            publisherName="Vimarn Suriya Co., Ltd."
            title="Dusit Residences"
          ></Project>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
