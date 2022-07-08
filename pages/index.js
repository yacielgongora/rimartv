import { Fragment } from 'react';
import Hero from '../components/UI/Hero';
import Services from '../components/UI/Services';
import About from '../components/UI/About';
import Portfolio from '../components/UI/Portfolio';
import Testimonial from '../components/UI/Testimonial';
import Contact from '../components/UI/Contact';

export default function Home() {
  return (
    <Fragment>
      <Hero src="http://rimartv.sentidocomun.do/hls/stream.m3u8" />
      <Services />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}

/*
 <Fragment>
      <Hero src="http://rimartv.sentidocomun.do/hls/stream.m3u8" />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Fragment>

    */
