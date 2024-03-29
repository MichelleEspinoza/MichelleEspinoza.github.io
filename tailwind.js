/* tailwind configuration */
tailwind.config = {
  title: 'Michelle Espinoza - Portafolio',
  darkMode: 'class',
  theme: {
      extend: {
          keyframes: {
              typing: {
              "0%": {
                  width: "0%",
                  visibility: "hidden"
              },
              "100%": {
                  width: "100%"
              }  
              },
              blink: {
              "50%": {
                  borderColor: "transparent"
              },
              "100%": {
                  borderColor: "white"
              }  
              }
          },
          animation: {
              typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
          },
          colors: {
              purple: '#5f1ec4',
              pink: '#e41a92',
              orange: '#ff7a01',
              lesspink: '#f07995',
              yellow: '#ffd600',
              blue: '#01d3f6',
              dark:'#212121',
              darkMedium:'#33332d'
          },
          minHeight: {
              20: '20px'
          }
      },
      screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          laptop: '1024px',
          xl: '1440px'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace']
      },
      fontSize: {
          xs: ['10px', '14px'],
          xxs: ['7.5px', '10px'],
          sm: ['14px', '24px'],
          md: ['12px', '15px'],
          base: ['18px', '24px'],
          xbase: ['13px', '17px'],
          lg: ['22px', '27px'],
          xl: ['28px', '32px'],
          xxl: ['38px', '45px']
      }
  },
}

/* Header of sections */
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);