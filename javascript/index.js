// let sections = document.querySelectorAll('.section');
// let totalSections = sections.length;
// let isScrolling = false;
// let currentSection = 0;

// const scrollTo = (index) =>{
//     window.scrollTo({
//         top: sections[index].offsetTop,
//         behavior:'smooth'
//     });
// }

// const handleScroll = (e) =>{
//     if(isScrolling) return
//     isScrolling = true;
//     setTimeout(()=>{
//         if(e.deltaY > 0){
//             currentSection = Math.min(currentSection+1, totalSections - 1 );
//         }
//         else{
//             currentSection = Math.max(currentSection-1,0);
//         }
    
//         scrollTo(currentSection);
//         isScrolling = false;
//     },300);
// }

// document.addEventListener('wheel', handleScroll);