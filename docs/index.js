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

// --- Contact Form ---

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwfcxUbfcm9zWX-GtJkOO0uniKKoCHvkRNydanC61veL5M6QVVIyAj4Q2f6JCKIsx8/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector('#confirmation')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(() => {
          msg.innerHTML = ""
        }, 3000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })