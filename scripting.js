// variable

const selectAwal = document.querySelector('.box ul li img')
const listGame = document.querySelectorAll('.box ul:nth-child(1) li img')
const listGame2 = document.querySelectorAll('.box ul:nth-child(2) li img')
const listGame3 = document.querySelectorAll('.box ul:nth-child(2) li img')
let i = 0;
let j = 0;

const arrList = [listGame, listGame2]
console.log()
// program

selectAwal.setAttribute('class', 'selection')

document.onkeydown = checkArrow;

function checkArrow(e) {

      e = e || listGame;

         if( e.keyCode == '38') {

               if( i > 0 ) {

                  arrList[i][j].setAttribute('class', 'gambar')
                  arrList[i-1][j].setAttribute('class', 'selection')
                  return i--;
               }
         } else if( e.keyCode == '40' ) {
            
               if( i < arrList.length - 1 ) {

                  arrList[i][j].setAttribute('class', 'gambar')
                  arrList[i+1][j].setAttribute('class', 'selection')
                  return i++;
               }
         } else if( e.keyCode == '37' ) {

               if(  j > 0 ) {

                  arrList[i][j].setAttribute('class', 'gambar')
                  arrList[i][j-1].setAttribute('class', 'selection')
                  return j--;
               }

         } else if( e.keyCode == '39' ) {

               if( j < arrList[0].length - 1 ) {

                  arrList[i][j].setAttribute('class', 'gambar')
                  arrList[i][j+1].setAttribute('class', 'selection')
                  return j++;
               }
         }
console.log(i + ' ' + j)
}
