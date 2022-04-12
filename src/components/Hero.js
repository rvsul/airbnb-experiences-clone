import heropng from "../images/hero.png";

export default function Hero() {
  return (
    <section className="Hero">
      <img className="hero-pic" src={heropng} />
      <h1 className="hero-header"> Online Experiences </h1>
      <p className="">
        Join Unique interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
}
