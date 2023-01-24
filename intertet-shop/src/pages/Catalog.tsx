import CatalogGrid from "~/Components/CatalogGrid/CatalogGrid"
import Filter from "~/Components/Filter/Filter"
import PageIntro from "~/Components/PageIntro/PageIntro"


const Catalog = () => {
  return (
    <section className="container">
      <PageIntro />
      <div className="FlexCatalog">
        <Filter />
        <CatalogGrid />
      </div>
    </section>
  )
}

export default Catalog