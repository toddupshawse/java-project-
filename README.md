# Todd Upshaw Portfolio Project  
## Week 5.8 – Creating Scalable Foundations

### Overview
This project is a dynamic portfolio page built using **HTML, CSS, and JavaScript**.  
It demonstrates modern scalable design principles by storing project data using **JavaScript objects**, saving and retrieving them using **sessionStorage**, and rendering them onto the page using **DOM manipulation**.

### Features
✔ Dynamic loading of projects  
✔ JSON storage using sessionStorage  
✔ JavaScript objects and arrays  
✔ Loop-based rendering  
✔ Clean UI with consistent styling  
✔ Fully functional GitHub-ready portfolio page  

---

## Languages & Libraries Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Browser Web Storage API**
- **GitHub Pages**

---

## How It Works
1. Project data is defined using three JavaScript objects.
2. The objects are stored inside an array.
3. The array is saved into `sessionStorage` using `JSON.stringify()`.
4. When the page loads:
   - If project data doesn't exist → it is stored.
   - If it does exist → it is loaded and parsed using `JSON.parse()`.
5. The page dynamically generates project cards using DOM manipulation.

---

## Dependencies
No external libraries are required.  
The page runs natively in any modern browser.

---

## How to Run
1. Clone or download the repository.  
2. Open **index.html** in any browser.  
3. Project data will appear dynamically.  

---

## Author
**Todd Upshaw**  
JavaScript Developer & Software Engineer in Training

---

