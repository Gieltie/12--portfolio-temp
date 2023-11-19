import './index.scss'
import Button from './Button'

export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        
        <div className="service">
          <h3>blablabla</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex modi iste quibusdam exercitationem minus eum expedita iure nobis. Molestias culpa consequuntur ratione debitis. Error nostrum recusandae dolore fugiat officiis!</p>
        </div>
        
        <div className="service">
          <h3>blablabla</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima nostrum nesciunt, praesentium recusandae esse, quisquam asperiores excepturi ratione enim voluptatem nisi sit? Vel nihil omnis culpa, praesentium labore exercitationem.</p>
        </div>
        
        <div className="service">
          <h3>blablabla</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae et quis commodi sequi? Ea expedita cupiditate, molestias ex accusantium tenetur, iure voluptatum similique ratione architecto pariatur, quae maiores mollitia?</p>
        </div>
      </div> 
      <Button />
    </section>
  )
}