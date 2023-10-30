// JavaScript

// //実行する機能
// const show = (entries, obs) => {
//     const keyframes = {
//         opacity: [0, 1],
//         translate: ['0 200px',0]
//       }
//       entries[0].target.animate(keyframes,600);

//             //一度表示されたら止める
//       obs.unobserve(entry.target);
//   }

//   //監視機能の設置
// const observer = new IntersectionObserver(show);

// // //監視対象の指示
// // observer.observe(document.querySelector('#img01'));


// //監視対象
// const images = document.querySelectorAll('.img');
// images.forEach(img =>{
//   observer.observe(img);
// });



//一度表示したら動作を止める
const show = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['0 400px',0]
        }
        entry.target.animate(keyframes,600);
  
        //一度表示されたら止める
        obs.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(show);
  
  //監視対象
  const images = document.querySelectorAll('.img');
  images.forEach(img =>{
    observer.observe(img);
  });