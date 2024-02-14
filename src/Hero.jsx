import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>I'm baby bicycle rights quinoa butcher offal hell of pork belly. Microdosing bitters tofu kitsch art party sus ethical poutine taxidermy whatever humblebrag. Mustache cliche lumbersexual cred waistcoat jianbing unicorn. Gastropub hoodie craft beer, bitters mukbang fashion axe neutral milk hotel fit viral tacos. Same narwhal 8-bit solarpunk, hoodie marfa put a bird on it bespoke intelligentsia cred direct trade Brooklyn.</p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
