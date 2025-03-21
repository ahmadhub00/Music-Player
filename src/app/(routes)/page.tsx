import React, { Suspense } from "react";
import style from "./page.module.scss";
import Search from "@/components/ui/small/search/Search";
import Loader from "@/components/ui/small/loader/Loader";

/// Fetching Data....
// import { fetchArtist } from "@/app/action/FetchArtist";

// Slides
import Main_Slide from "@/components/layout/swiper-slides/slide_main/Slide_main";
import Event_Slide from "@/components/layout/swiper-slides/event_slide/Event_Slide";
import News_Slide from "@/components/layout/swiper-slides/news_slide/News_Slide";
import Artist_Slide from "@/components/layout/swiper-slides/artist-slide/Artist_Slide";
import Album_Slide from "@/components/layout/swiper-slides/album_slide/Album_Slide";
// import TopChart_Slide from "@/components/ui/top-chart_slide/TopChart_Slide"; /// Delete this slide if not needed....
import SectionInformation from "@/components/ui/small/section-info/SectionInformation";
import Release_Slide from "@/components/layout/swiper-slides/release_slide/Release_Slide";
import { topchart_slide_json, album_slide_json } from "@/json/testing_slides";
import Podcast_Slide from "@/components/layout/swiper-slides/podcast_slide/Podcast_Slide";

/// Lazy loading for better performance.

// Swiper Files Imports
const Swiper_Main = React.lazy(
  () => import("@/components/layout/swiper/swiper_main/Swiper_Main")
);
const Event_Swiper = React.lazy(
  () => import("@/components/layout/swiper/event_swiper/Event_swiper")
);
const News_Swiper = React.lazy(
  () => import("@/components/layout//swiper/news_swiper/News_Swiper")
);
const Common_Swiper = React.lazy(
  () => import("@/components/layout/swiper/common-swiper/Common_Swiper")
);

const Release_Swiper = React.lazy(
  () => import("@/components/layout/swiper/release-swiper/Release_Swiper")
);

const page = () => {
  // const data = await fetchArtist();

  return (
    <main className={style.container}>
      <section className={style.page_search}>
        <Search />
      </section>
      <section>
        <Suspense fallback={<Loader />}>
          <Swiper_Main>
            <Main_Slide />
          </Swiper_Main>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Featured Artists" url="/artist" />
        <Suspense fallback={<Loader />}>
          <Common_Swiper delay={3000}>
            <Artist_Slide />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Featured Top Singers" url="/artist" />
        <Suspense fallback={<Loader />}>
          <Release_Swiper>
            <Release_Slide />
          </Release_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Upcoming Events" url="/events" />
        <Suspense fallback={<Loader />}>
          <Event_Swiper>
            <Event_Slide />
          </Event_Swiper>
        </Suspense>
      </section>

      {/* <section> */}
      {/* <SectionInformation heading="Featured Artists" url="/artist" /> */}
      {/* <Suspense fallback={<Loader />}> // Feature not looking good. so it's off.... 
          <Main_Content />
        </Suspense> */}
      {/* </section> */}
      <section>
        <SectionInformation heading="Top Albums" url="/album" />

        <Suspense fallback={<Loader />}>
          <Common_Swiper delay={500000}>
            <Album_Slide props={album_slide_json} />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Top Charts" url="/section" />

        <Suspense fallback={<Loader />}>
          <Common_Swiper delay={4000}>
            <Album_Slide props={topchart_slide_json} />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="New Release" url="/release" />

        <Suspense fallback={<Loader />}>
          <Common_Swiper delay={7000}>
            <Album_Slide props={album_slide_json} />
          </Common_Swiper>
        </Suspense>
      </section>
      <section>
        <SectionInformation heading="Podcast" url="/events" />
        <Suspense fallback={<Loader />}>
          <Event_Swiper>
            <Podcast_Slide />
          </Event_Swiper>
        </Suspense>
      </section>

      <section>
        <SectionInformation heading="News Blog" url="/news" />

        <Suspense fallback={<Loader />}>
          <News_Swiper>
            <News_Slide />
          </News_Swiper>
        </Suspense>
      </section>
    </main>
  );
};

export default page;
