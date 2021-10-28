/*  drug and drop... условия: есть поле, при двойном клике на которое - в месте клика создается блок, 
который можно как-то назвать, удалить, перетянуть на другое место, отредактировать(не важно что, 
    это может быть текст, цвет или что вам больше нравится). Положение блока и его "свойства" 
    должны сохраняться при перезагрузке страницы
    имеется в виду что можно внутри блока что-то написать, сам блок можно перетянуть, текст можно отредактировать(в том числе и стереть текст) и сам блок можно удалить
это может быть блок в котором внутри будет какой-то инпут(к примеру)
и возле блока будет "крестик" нажав на который сам блок будет удален
соответственно после перезагрузки страницы его не будет
*/

drop.onmousedown = function(event) {

  let shiftX = event.clientX - drop.getBoundingClientRect().left;
  let shiftY = event.clientY - drop.getBoundingClientRect().top;

  drop.style.position = 'absolute';
  drop.style.zIndex = 1000;
  document.body.append(drop);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    drop.style.left = pageX - shiftX + 'px';
    drop.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  drop.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    drop.onmouseup = null;
  };
};

drop.ondragstart = function() {
  return false;
};

// // input
// document.getElementById('show-element').onclick = function() {
//   let element = document.getElementById('to-show');

//   if (element.className === 'hide') {
//     element.className = 'show';
//     document.getElementsByTagName('body')[0].className = 'on';
//     document.getElementById('show-element').className = 'active';
//   } else {
//     element.className = 'hide';
//     document.getElementsByTagName('body')[0].className = 'off';
//     document.getElementById('show-element').className = '';
//   }
// }
