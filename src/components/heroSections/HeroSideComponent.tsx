

const HeroSideComponent = () => {
   return (
      <>
         <section className="hero-container ">
            <section className="left-hero-section ">
               <menu className="nav-small under-title p-0 ">
                  <li>Home</li>
                  <li>About</li>
                  <li>More</li>
               </menu>
               <div className="hero-text-wrap">
                  <article className="align-self">
                     <h1 className="hero-header m-0 mb-s">Elstolpar.se</h1>
                     <div className="mb-s hero-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde debitis magni recusandae eveniet ullam qui accusamus repudiandae suscipit. Nihil cum</div>
                     <div className="hero-text text-bold pb-2">Vi laddar du kör</div>
                     <button className="btn-invert">Läs mer</button>
                  </article>
               </div>
            </section>

            <img className="img-side" src="https://plus.unsplash.com/premium_photo-1679389667224-47934a5fecb2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </section>
      </>
   )
}

export default HeroSideComponent;