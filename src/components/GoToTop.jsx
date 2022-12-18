import React, { useState, useEffect } from 'react'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}>
      {isVisible && (
        <div style={{
          fontSize: "1.7rem",
          width: "3rem",
          height: "3rem",
          color: "#fff",
          backgroundColor: "#ff5003",
          // boxShadow: "${({ theme }) => theme.colors.shadow}",
          borderRadius: "50%",
          position: "fixed",
          bottom: "5rem",
          right: "3.5rem",
          zIndex: "999",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        }}
          onClick={goToBtn}>
          <i class="bi bi-arrow-up" style={{}}></i>
        </div>
      )
      }
    </div >
  )
}

export default GoToTop