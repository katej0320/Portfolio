"use client";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from "@/app/LandingComponents/page.module.css";
import SplitType from 'split-type';


export default function ScrambleText() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const splitRef = useRef<any>(null) // split 객체도 재사용

  // ✅ 애니메이션 함수
  const runAnimation = () => {
    if (!splitRef.current || !textRef.current) return

    // 기존 애니메이션 중단 + 다시 실행
    gsap.killTweensOf(splitRef.current.words)

    gsap.fromTo(
      splitRef.current.words,
      {
        x: 200,
        autoAlpha: 0, // ✅ opacity: 0 + visibility: hidden
      },
      {
        x: 0,
        autoAlpha: 1, // ✅ opacity: 1 + visibility: visible
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        stagger: 0.05,
      }
    )
  }

  useEffect(() => {
    if (!textRef.current) return

    splitRef.current = new SplitType(textRef.current, { types: 'words' })

    // 페이지 최초 1회 실행
    runAnimation()

    // ✅ 클릭하면 애니메이션 재실행
    const handleClick = () => runAnimation()
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
      
        <p ref={textRef} className={styles.title}>Hi, I'm Bo-Bae Jang</p>
        <p className={styles.subtitle}>
          A <span className={styles.highlight}>Web Developer</span> with the
          soul of a <span className={styles.highlight}>Pianist</span>.
        </p>
        <p className={styles.description}>
          I build delightful digital experiences
        </p>
        <p className={styles.description}>
          with the precision and artistry of classical music.
        </p>
      </div>
    </div>
  );
}
