import { Fragment } from 'react';
import Player from '../components/UI/Player';
import Services from '../components/UI/Services';
import Testimonial from '../components/UI/Testimonial';
import Contact from '../components/UI/Contact';

export default function Home() {
  return (
    <Fragment>
      <Player src="https://rimarrtv.sentidocomundo.com/hls/stream.m3u8" />
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
