// gotoTop
const gotoTop = document.querySelector('.gotoTop');
document.addEventListener('scroll', e => document.documentElement.scrollTop>0?gotoTop.classList.add('show'):gotoTop.classList.remove('show'))
gotoTop.addEventListener('click', e => document.documentElement.scrollTop=0)

// Clickable Logo to Reload Page
const logo = document.querySelector('.logo');
const a = document.createElement('a');
a.href = "javascript:window.location.reload()";

logo.addEventListener('click', e => a.click())

// Nav

const navBar = document.querySelector('nav');
document.addEventListener('scroll', e => document.documentElement.scrollTop>0?navBar.classList.add('scrolled'):navBar.classList.remove('scrolled'))

// ---- Skills Slider ----

const tablinks = [...document.querySelectorAll(".tab-links")];
const tabcontent = document.querySelector(".tab-contents");
const lists  = [
    `<ul>
        <li><span>C, Java, Python</span><br>Skilled in Developing Console Based Apps</li>
        <li><span>Web Development</span><br>Skilled web developer with expertise in HTML & CSS with working knowledge of JavaScript</li>
        <li><span>UI/UX</span><br>Designing Web/App Interfaces in applications like Figma</li>
        <li><span>Problem Solving</span><br>Passionate about coding and problem solving, constantly seeking new challenges to improve my skills</li>
        <li><span>Typing</span><br>Average 85 WPM</li>
    </ul>`,
    `<ul>
        <li><span>2019 - 2020</span><br>Secondary Education<br>Tika Ram Model School (CBSE)</li>
        <li><span>2021 - 2022</span><br>Senior Secondary Education<br>Haryana Open School (BSEH)</li>
        <li><span>2020 - Current</span><br>Diploma in Computer Engineering<br>Government Polytechnic Sonipat (HSBTE)</li>
    </ul>`,
    `<ul>
        <li><span>Hindi</span><br>Native or bilingual proficiency</li>
        <li><span>English</span><br>Professional working proficiency</li>
        <li><span>Japanese</span><br>Limited working proficiency</li>
    </ul>`
]

tablinks.forEach((link,index) => 
  link.addEventListener('click', e => {
    tablinks.forEach(tablink => tablink.classList.remove("active-link"))
    link.classList.add("active-link");
    tabcontent.innerHTML = lists[index];
  })
)

tablinks[0].click()

// ---- Image Slider ----

const slideshow = document.querySelector('.slideshow');

const sources = [
  'Images/Certificate/JAPANESE.jpg',
  'Images/Certificate/JavaScript.jpg',
  'Images/Certificate/Python.jpg',
  'Images/Certificate/SQL.jpg',
  'Images/Certificate/Typing.jpg',
  'Images/Certificate/CyberSecurityEssentials.jpg',
];
[...slideshow.querySelectorAll('.photo')].forEach((elem, index) => elem.style.backgroundImage=`url('${sources[index]}')`)
const arrows = [...slideshow.querySelector('[arrows]').children];
const slides = [...slideshow.querySelectorAll('.slides')];

const getStyle = (elem, prop) => Number(getComputedStyle(elem)[prop].replace('px',''));

function setCurrentSlide(slide){
  currentSlide = slide;
  const index = slides.indexOf(slide);
  slides[index+1]?.classList.add('fadeRight', 'fade');
  slides[index-1]?.classList.add('fadeLeft', 'fade');
  slides[index+1]?.classList.remove('active');
  slides[index-1]?.classList.remove('active');
  slides[0].style.marginLeft = `${-(slides.indexOf(slide)*600)+(getStyle(slideshow, 'width')-getStyle(slides[0], 'width'))/2}px`;
  slide.classList.add('active');
  slide.classList.remove('fade', 'fadeLeft', 'fadeRight');
}
let currentSlide;
setCurrentSlide(slides[0]);
arrows.forEach((arrow,index) => {
  arrow.addEventListener('click', e => {
    if(index%2 === 0){
      if(slides[slides.indexOf(currentSlide)-1]){
        setCurrentSlide(slides[slides.indexOf(currentSlide)-1])
      }if(!slides[slides.indexOf(currentSlide)-1]){
        arrow.style.opacity = .5;
      }else{
        arrow.style.opacity = 1;
      }
    }else{
      if(slides[slides.indexOf(currentSlide)+1]){
        setCurrentSlide(slides[slides.indexOf(currentSlide)+1])
      }if(!slides[slides.indexOf(currentSlide)+1]){
        arrow.style.opacity = .5;
      }else{
        arrow.style.opacity = 1;
      }
    }
  })
})

// AutoSlide

const myIntverval = setInterval(() => {
  if(slides[slides.indexOf(currentSlide)+1]){
    setCurrentSlide(slides[slides.indexOf(currentSlide)+1]);
  }else{
    setCurrentSlide(slides[0]);
  }
},5000)


// ---- Contact Form ----

const scriptURL = 'https://script.google.com/macros/s/AKfycbwfcxUbfcm9zWX-GtJkOO0uniKKoCHvkRNydanC61veL5M6QVVIyAj4Q2f6JCKIsx8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('#confirmation')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if(response.ok){
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(() => {
          msg.innerHTML = ""
        }, 3000);
        form.reset()
      }
    })
    .catch(error => console.error('Error!', error.message))
})