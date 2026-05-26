import Swal from "sweetalert2";


export function redirectAlert(title, msg, url, icon ){


  let timerInterval;
  Swal.fire({
    title: title ,
    html: `${msg} <b></b>`,
    timer: 5000,
    timerProgressBar: true,
    icon: icon,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      window.location.href=url

    }
  })




}

export function alertaGeneral(msg, msg2,icono) {
  Swal.fire({
    title: msg,
    text: msg2,
    icon: icono,
  });
}
