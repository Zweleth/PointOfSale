let perfumes = JSON.parse(localStorage.getItem("data"))
let cartItems = JSON.parse(localStorage.getItem("cart"))
  

    let colors = [
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
        {
            bgColor: 'var(--prod-color1)',
            color: 'var(--prod-color4)'
        },
        {
            bgColor: 'var(--prod-color2)',
            color: 'var(--prod-color6)'
        },
        {
            bgColor: 'var(--prod-color3)',
            color: 'var(--prod-color5)'
        },
        {
            bgColor: 'var(--prod-color4)',
            color: 'var(--prod-color1)'
        },
        {
            bgColor: 'var(--prod-color6)',
            color: 'var(--prod-color2)'
        },
        {
            bgColor: 'var(--prod-color5)',
            color: 'var(--prod-color3)'
        },
    ]


    function displayProducts() {
        let products = document.querySelector(".perfumes");
        Object.keys(perfumes).forEach((i) => {
          if (perfumes.length) {
            // console.log(`${i}: ${perfumes[i]}`);
            products.innerHTML += `
            <div class="prod" style="min-width: 33.33vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 5rem;
            padding-bottom: 1rem;
            padding-right: 2rem;
            padding-left: 2rem;
            background-color: ${colors[i].bgColor};
            color: ${colors[i].color}">
                <h5 style="margin-bottom: 2rem; ">${perfumes[i].name}</h5>
                <div class="img" style="background-image: url(${perfumes[i].image_link}); width: 100%;
                height: 25rem;
                
                background-position: center;
                background-size: 80%;
                background-repeat: no-repeat;
                display:flex;
                align-items:center">
                    <img src="${perfumes[i].image_link}" style="width:90%"; height: 20rem;>
                </div>
                <h6 style="margin-top: 1rem;" >Price: R ${perfumes[i].price}</h6>
                <h6 style="margin-top: 1rem;">${perfumes[i].description}</h6>
                <div class="btnAddToCart style="width: 100%; height: 4rem;">
                    <button class="btn" id="${perfumes[i].id}"style="margin-top: 3.5rem;
                    width: 10rem;
                    height: 3rem;
                    border: none;
                    border: 2px solid;
                    color: ${colors[i].color}
                    border-color ${colors[i].color};">Add to cart</button>
                </div>
            </div>
                  `;
          }
          
        });
        for (let i=0; i<3; i++) {
            products.innerHTML += `
            <div class="prod" style="min-width: 33.33vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 5rem;
            padding-bottom: 1rem;
            padding-right: 2rem;
            padding-left: 2rem;
            background-color: ${colors[i].bgColor};
            color: ${colors[i].color}">
                <h5 style="margin-bottom: 2rem; ">${perfumes[i].name}</h5>
                <div class="img" style="background-image: url(${perfumes[i].image_link}); width: 100%;
                height: 25rem;
                
                background-position: center;
                background-size: 80%;
                background-repeat: no-repeat;
                display:flex;
                align-items:center">
                    <img src="${perfumes[i].image_link}" style="width:90%"; height: 20rem;>
                </div>
                <h6 style="margin-top: 1rem;" >Price: R ${perfumes[i].price}</h6>
                <h6 style="margin-top: 1rem;">${perfumes[i].description}</h6>
                <div class="btnAddToCart style="width: 100%; height: 4rem;">
                    <button class="btn" id="${perfumes[i].id}"style="margin-top: 3.5rem;
                    width: 10rem;
                    height: 3rem;
                    border: none;
                    border: 2px solid;
                    color: ${colors[i].color}
                    border-color ${colors[i].color};">Add to cart</button>
                </div>
            </div>
                  `;
          }
      }

    displayProducts();
    
    let btnAddToCart = document.querySelectorAll('.btnAddToCart')
    btnAddToCart.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            stopSlide();
        })
    })

    btnAddToCart.forEach(btn => {
        btn.addEventListener('mouseout', () => {
            resumeSlide();
        })
    })

    function stopSlide() {
        document.querySelector('.perfumes').id = 'stopSlide'
    }

    function resumeSlide() {
        document.querySelector('.perfumes').id = ''
    }

   let btnAddItem = document.querySelectorAll('.btn')
    btnAddItem.forEach(btn => {
        btn.addEventListener('click', () => {
            let x = parseInt(btn.id)
            addItemToCart(x-1);  
        // 
    })
   })

    function addItemToCart(i) {
        if (cartItems.includes(perfumes[i])) {

        }
        else {
            perfumes[i].qty= 1;
            cartItems.push(perfumes[i])
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
   }
   
    // ====================================================================================================

