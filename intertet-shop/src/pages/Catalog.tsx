import CatalogGrid from "~/Components/CatalogGrid/CatalogGrid"
import CategoriesCatalog from "~/Components/CatalogSidebar/CategoriesCatalog"
import PageIntro from "~/Components/PageIntro/PageIntro"


const Catalog = () => {
  return (
    <section className="container">
      <PageIntro />
      <div className="FlexCatalog">
        <CategoriesCatalog />
        <CatalogGrid />
      </div>
    </section>
  )
}

export default Catalog