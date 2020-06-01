const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Selectors
const nav = document.querySelector('nav')
const firstLink = document.createElement('a')
firstLink.textContent = 'First Link'
nav.prepend(firstLink)
// console.log(firstLink)

const lastLink = document.createElement('a')
lastLink.textContent = 'Last Link'
nav.append(lastLink)
// console.log(lastLink)

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => link.style.color = 'green')
navLinks[1].textContent = siteContent.nav["nav-item-1"]
navLinks[2].textContent = siteContent.nav["nav-item-2"]
navLinks[3].textContent = siteContent.nav["nav-item-3"]
navLinks[4].textContent = siteContent.nav["nav-item-4"]
navLinks[5].textContent = siteContent.nav["nav-item-5"]
navLinks[6].textContent = siteContent.nav["nav-item-6"]
// console.log(navLinks[0].style)

const headerImage = document.querySelector('header img')
headerImage.src = siteContent.nav["img-src"]
// console.log(headerImage)

const ctaH1 = document.querySelector('.cta h1')
ctaH1.textContent = siteContent.cta.h1
const ctaButton = document.querySelector('.cta button')
ctaButton.textContent = siteContent.cta.button
const ctaImgSrc = document.querySelector('#cta-img')
ctaImgSrc.src = siteContent.cta["img-src"]
// console.log(ctaH1)
// console.log(ctaButton)
// console.log(ctaImgSrc)

const mainContentFeatures = document.querySelectorAll('.top-content .text-content h4')[0]
mainContentFeatures.textContent = siteContent["main-content"]["features-h4"]
const mainContentFeaturesContent = document.querySelectorAll('.top-content .text-content p')[0]
mainContentFeaturesContent.textContent = siteContent["main-content"]["features-content"]
const mainContentAbout = document.querySelectorAll('.top-content .text-content h4')[1]
mainContentAbout.textContent = siteContent["main-content"]["about-h4"]
const mainContentAboutContent = document.querySelectorAll('.top-content .text-content p')[1]
mainContentAboutContent.textContent = siteContent["main-content"]["about-content"]
const mainContentMiddleImageSource = document.querySelector('#middle-img')
mainContentMiddleImageSource.src = siteContent["main-content"]["middle-img-src"]
mainContentMiddleImageSource.style.borderRadius = '15px'
const mainContentServices = document.querySelectorAll('.bottom-content .text-content h4')[0]
mainContentServices.textContent = siteContent["main-content"]["services-h4"]
const mainContentServicesContent = document.querySelectorAll('.bottom-content .text-content p')[0]
mainContentServicesContent.textContent = siteContent["main-content"]["services-content"]
const mainContentProduct = document.querySelectorAll('.bottom-content .text-content h4')[1]
mainContentProduct.textContent = siteContent["main-content"]["product-h4"]
const mainContentProductContent = document.querySelectorAll('.bottom-content .text-content p')[1]
mainContentProductContent.textContent = siteContent["main-content"]["product-content"]
const mainContentVision = document.querySelectorAll('.bottom-content .text-content h4')[2]
mainContentVision.textContent = siteContent["main-content"]["vision-h4"]
const mainContentVisionContent = document.querySelectorAll('.bottom-content .text-content p')[2]
mainContentVisionContent.textContent = siteContent["main-content"]["vision-content"]
// console.log(mainContentFeatures)
// console.log(mainContentFeaturesContent)
// console.log(mainContentAbout)
// console.log(mainContentAboutContent)
// console.log(mainContentMiddleImageSource)
// console.log(mainContentServices)
// console.log(mainContentServicesContent)
// console.log(mainContentProduct)
// console.log(mainContentProductContent)
// console.log(mainContentVision)
// console.log(mainContentVisionContent)


const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact["contact-h4"]
const addressP = document.querySelectorAll('.contact p')[0]
addressP.textContent = siteContent.contact.address
const phoneP = document.querySelectorAll('.contact p')[1]
phoneP.textContent = siteContent.contact.phone
const emailP = document.querySelectorAll('.contact p')[2]
emailP.textContent = siteContent.contact.email
// console.log(contactH4)
// console.log(addressP)
// console.log(phoneP)
// console.log(emailP)

const footerP = document.querySelector('footer p')
footerP.textContent = siteContent.footer.copyright
// console.log(footerP)