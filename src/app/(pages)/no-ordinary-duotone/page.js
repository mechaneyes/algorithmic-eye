"use client";

import Image from "next/image";

import "@/app/styles/styles.scss";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="project project--duotone">
      <div className="hero">
        <Image
          src="/images/no-ordinary-duotone-001-1.1.0.jpg"
          width={1920}
          height={1458}
          className="project__img"
          alt="No Ordinary Duotone printed image"
        />
        <div className="hero__copy">
          <div className="hero__copy__title">
            <h1>No Ordinary Duotone</h1>
            <h3>2005 &ndash; 2024</h3>
          </div>
          <p>
            No Ordinary Monkey was an amazing party that took place in the
            basement restaurant of FiDi office building at 50 Broadway. Many
            mornings I left and got out onto the street just as the sun was
            coming up. While not quite anything goes, you could get away with a
            lot.
          </p>
          <p>
            The image above is the first I&apos;ve printed. Below are some of the
            iterations I went through, some of which I hope to print in the
            coming weeks.
          </p>
          {/* <Link href="https://winterwerk.one/posts/gossamer">
            <p>Read more about Gossamer on WinterWerk</p>
          </Link> */}
        </div>
      </div>
      <div className="project__iteration">
        <Image
          src="/images/noOrdinaryMonkey.jpg"
          width={1920}
          height={1440}
          className="project__img"
          alt="No Ordinary Duotone: The shot that started it all"
        />
        <div className="project__description">
          <div className="project__description__title">
            <h4>Original Photograph</h4>
            <h5>2005.09.16</h5>
          </div>
          <p>
            The shot that started it all. I shot this at the No Ordinary Monkey
            !!! After Party.
          </p>
        </div>
      </div>
      <div className="project__iteration">
        <Image
          src="/images/no-ordinary-duotone-000.jpg"
          width={1920}
          height={1440}
          className="project__img"
          alt="No Ordinary Duotone: File that produced the print up top"
        />
        <div className="project__description">
          <div className="project__description__title">
            <h4>File Producing Print Up Top</h4>
          </div>
          <p>This is the file that produced the print up top.</p>
          <p>
            In Photoshop, I use layer masks to approximate the color that the
            Risograph is going to produce. It&apos;s not at all accurate, but allows
            me to get a sense of how it will print.
          </p>
        </div>
      </div>
      <div className="project__iteration">
        <Image
          src="/images/no-ordinary-duotone--bright-red-v-yellow.jpg"
          width={1920}
          height={1440}
          className="project__img"
          alt="No Ordinary Duotone: Bright Red v Yellow"
        />
        <div className="project__description">
          <div className="project__description__title">
            <h4>Bright Red v Yellow &ndash; Solarized</h4>
          </div>
        </div>
      </div>
      <div className="project__iteration">
        <Image
          src="/images/no-ordinary-duotone--skyBlue-v-mint.jpg"
          width={1920}
          height={1440}
          className="project__img"
          alt="No Ordinary Duotone: Sky Blue v Mint"
        />
        <div className="project__description">
          <div className="project__description__title">
            <h4>Sky Blue v Mint &ndash; Solarized</h4>
          </div>
        </div>
      </div>
      <div className="project__iteration">
        <Image
          src="/images/no-ordinary-duotone--yellow-v--bright-red.jpg"
          width={1920}
          height={1440}
          className="project__img"
          alt="No Ordinary Duotone: Yellow v Bright Red"
        />
        <div className="project__description">
          <div className="project__description__title">
            <h4>Yellow v Bright Red</h4>
          </div>
        </div>
      </div>
      <div className="project__iteration">
        <Image
          src="/images/no-ordinary-duotone--teal-v-mint----solar.jpg"
          width={1920}
          height={1440}
          className="project__img"
          alt="No Ordinary Duotone: Teal v Mint - Solarized"
        />
        <div className="project__description">
          <div className="project__description__title">
            <h4>Teal v Mint &ndash; Solarized</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
