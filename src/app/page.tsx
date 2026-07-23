"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const ADDRESS_QUERY = "Hue Coffee Roaster 大阪市中央区谷町4-3-7";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS_QUERY);

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(ADDRESS_QUERY) +
  "&output=embed";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [bowing, setBowing] = useState(false);
  const bowTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggle = () => setOpen((v) => !v);

  const startBow = () => {
    if (bowTimeout.current) {
      clearTimeout(bowTimeout.current);
      bowTimeout.current = null;
    }
    setBowing(true);
  };

  const endBow = () => setBowing(false);

  // タッチデバイス（hover非対応）向け: タップした瞬間に一時的にお辞儀させる
  const tapBow = () => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: hover)").matches) return;

    setBowing(true);
    if (bowTimeout.current) clearTimeout(bowTimeout.current);
    bowTimeout.current = setTimeout(() => setBowing(false), 600);
  };

  const bowTriggerProps = {
    onMouseEnter: startBow,
    onMouseLeave: endBow,
    onTouchStart: tapBow,
  };

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !contentRef.current) return;
    const el = contentRef.current;
    const ro = new ResizeObserver(() => setMaxHeight(el.scrollHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  return (
    <>
      <main className={styles.page}>
        <div className={styles.topSection}>
          <div className={styles.introBlock}>
            <h1 className={styles.name}>
              <span>Kitomi</span>
              <span>Shinsuke</span>
            </h1>
            <ul className={styles.tagline}>
              <li>design</li>
              <li>illustration</li>
              <li>animation</li>
            </ul>
          </div>
        </div>

        <div className={styles.characterWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={`${styles.characterImg} ${
              bowing ? styles.characterHidden : ""
            }`}
            src="/images/character.png"
            alt="アリクイのサラリーマン"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={`${styles.characterImg} ${
              bowing ? "" : styles.characterHidden
            }`}
            src="/images/character-bow.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <ul className={styles.social}>
          <li>
            <a
              href="https://x.com/Kitomishinsuke"
              target="_blank"
              rel="noreferrer"
              {...bowTriggerProps}
            >
              X
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tuzzle_ktm/"
              target="_blank"
              rel="noreferrer"
              {...bowTriggerProps}
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:kitomishinsuke@gmail.com">Contact</a>
          </li>
        </ul>
      </main>

      <section className={styles.panel}>
        <button
          type="button"
          className={styles.panelHeader}
          onClick={toggle}
          aria-expanded={open}
          {...bowTriggerProps}
        >
          <span className={styles.panelHeaderText}>
            <span className={styles.mincho}>個展開催</span>
            <span className={styles.lora}>&nbsp;2026/8/21 − 9/6</span>
          </span>
          <span className={styles.chevron} data-open={open}>
            ▲
          </span>
        </button>

        <div className={styles.panelBodyWrapper} style={{ maxHeight }}>
          <div ref={contentRef}>
            <div className={styles.panelBody}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.exhibitionTitle}
                src="/images/exhibition-title.png"
                alt="アリクイのサラリーマンたち The Anteater Clerks"
              />

              <p className={`${styles.description} ${styles.mincho}`}>
                点と線を重ねて描き出されるペン画のモノクロームの世界。約15年ぶりとなる木富慎介の個展「アリクイのサラリーマンたち」を開催します。淡々と過ぎていく彼らの余白のある日々をお楽しみください。
              </p>

              <div className={styles.venueSection}>
                <div className={styles.venue}>
                  <div className={styles.hueBlock}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles.hueLogo}
                      src="/images/hue.svg"
                      alt="Hue Coffee Roaster"
                    />
                    <a
                      className={`${styles.webLink} ${styles.lora}`}
                      href="https://hue-coffee.jp/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Web
                    </a>
                  </div>

                  <div className={`${styles.venueInfo} ${styles.mincho}`}>
                    <h2 className={styles.infoLabel}>営業時間</h2>
                    <p className={styles.lora}>
                      平日 <span>8:00</span>&nbsp;&nbsp;<span>20:00</span>
                    </p>
                    <p className={styles.lora}>
                      土日 <span>8:00</span>&nbsp;&nbsp;<span>18:00</span>
                    </p>

                    <h2 className={styles.infoLabel}>住所</h2>
                    <p>
                      大阪市中央区谷町4-3-7
                      <br />
                      谷町線「谷町四丁目駅」
                      <br />
                      7番出口から徒歩3分
                    </p>

                    <a
                      className={styles.mapLink}
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Map
                    </a>
                  </div>
                </div>

                <div className={styles.mapEmbed}>
                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="fullscreen"
                    title="Hue Coffee Roaster の地図"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
