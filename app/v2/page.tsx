import Footer from '../components/Footer'
import Header from '../components/Header'
import Stuff from '../components/Stuff'

const Home = () => {
  const voteText = 'Vote for project'
  return (
    <>
      <Header></Header>
      <main className="container w-5/6 min-w-full md:min-w-full-lg grid grid-cols-1 md:grid-cols-2 grid-col gap-x-16 gap-y-5 py-10 px-5 justify-items-center">
        <Stuff
          id="01"
          description="Prepare to meet luxury houses, new projects INSPIRED BY BLED CASTLE ,SLOVENIA in the midst of modern atmosphere close to nature with beautiful gardens around the project. with beautiful scenery with electric wires to the ground for the whole project luxury club house Large swimming pool and fully equipped fitness center with RELAX SPACE for the whole family to truly relax."
          location="Bangkok"
          stuffType="House"
          ownerName="SC ASSET"
          title="Bangkok Boulevard Signature Chaengwattana"
          stuffImage="stuff-01.jpg"
          stuffLogo="stuff-logo-01.png"
          voteText={voteText}
        ></Stuff>
        <Stuff
          id="02"
          description="Meet the new series of luxury Nordic houses inspired by the tourist destinations in Northern Europe. Feel closer to nature with the high-ceiling, glass wall, an architectural signature of Nordic countries where the people are well known for being the happiest in the world. Feast your eyes on the iconic, elegant design of the luxury Nordic clubhouse with fully equipped facilities. Make your everyday life like an elegant staycation with the grand common park inspired by the 3 seasons of Scandinavian pine forest. Make your everyday life like an elegant staycation with the grand common park inspired by the."
          location="Bangkok"
          stuffType="House"
          ownerName="SC ASSET"
          title="Bangkok Boulevard Changwattana 2"
          stuffImage="stuff-02.jpg"
          stuffLogo="stuff-logo-02.png"
          voteText={voteText}
        ></Stuff>
        <Stuff
          id="03"
          description="Dusit Residences features grand homes with stunning park vistas, ideal for those who desire a timelessly classic and private living space with close connections to the city. Tastefully furnished, Asian inspired décor with a subtle Thai sensibility brings together inviting colour combinations and accents of luxurious natural materials and fine finishes to this splendid sanctuary in the city. Dusit Residences features grand homes with stunning park vistas, ideal for those who desire a timelessly classic and private living space with close connections to the city. Tastefully furnished, Asian inspired décor with a subtle Thai sensibility brings together inviting colour combinations. with a subtle Thai sensibility brings together inviting colour combinations."
          location="Bangkok"
          stuffType="House"
          ownerName="Vimarn Suriya Co., Ltd."
          title="Dusit Residences"
          stuffImage="stuff-03.jpg"
          stuffLogo="stuff-logo-03.png"
          voteText={voteText}
        ></Stuff>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
